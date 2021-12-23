import { useEffect, useRef, useState } from "react";

export default function useRenderBgFx(): boolean {
  const [renderBgFx, setRenderBgFx] = useState(false);
  // TODO: Upgrade React and switch to transitions
  const timerRef = useRef<any>(0);

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        setRenderBgFx(
          window.matchMedia("(pointer: none) OR (prefers-reduced-motion)")
            .matches
        );
      }, 350);
    }

    return () => clearTimeout(timerRef.current);
  }, []);

  return renderBgFx;
}
