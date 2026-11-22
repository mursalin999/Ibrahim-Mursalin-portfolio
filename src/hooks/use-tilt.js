import { useCallback, useRef } from "react";
/**
 * Tiny 3D tilt-on-hover using CSS transforms only (no R3F).
 * Max ~5 degrees. Respects prefers-reduced-motion by no-op.
 */
export function useTilt(max = 5) {
    const ref = useRef(null);
    const onMove = useCallback((e) => {
        const el = ref.current;
        if (!el)
            return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateZ(0)`;
    }, [max]);
    const onLeave = useCallback(() => {
        const el = ref.current;
        if (!el)
            return;
        el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    }, []);
    return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}
