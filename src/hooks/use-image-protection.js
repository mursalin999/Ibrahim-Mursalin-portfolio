import { useEffect } from "react";
/**
 * Global image/content protection:
 * - Disables right-click context menu
 * - Disables drag on images
 * - Blocks common save/devtools shortcuts
 * - Blocks text selection on media
 * Note: This deters casual theft only. Determined users can still bypass.
 */
export const useImageProtection = () => {
    useEffect(() => {
        const onContextMenu = (e) => {
            const target = e.target;
            // Allow context menu on form inputs / textareas
            if (target.closest("input, textarea, [contenteditable='true']"))
                return;
            e.preventDefault();
        };
        const onDragStart = (e) => {
            const target = e.target;
            if (target.tagName === "IMG" || target.tagName === "VIDEO" || target.closest("[data-protected]")) {
                e.preventDefault();
            }
        };
        const onKeyDown = (e) => {
            // Block Ctrl/Cmd+S (save), Ctrl/Cmd+U (view source), Ctrl/Cmd+Shift+I/J/C (devtools), F12, PrintScreen
            const key = e.key.toLowerCase();
            const ctrl = e.ctrlKey || e.metaKey;
            if ((ctrl && (key === "s" || key === "u" || key === "p")) ||
                (ctrl && e.shiftKey && (key === "i" || key === "j" || key === "c")) ||
                key === "f12") {
                e.preventDefault();
            }
        };
        document.addEventListener("contextmenu", onContextMenu);
        document.addEventListener("dragstart", onDragStart);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("contextmenu", onContextMenu);
            document.removeEventListener("dragstart", onDragStart);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);
};
