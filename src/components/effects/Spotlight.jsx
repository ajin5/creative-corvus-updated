import { useIsFinePointer, useMousePosition, usePrefersReducedMotion } from '../../lib/useMousePosition';

export default function Spotlight() {
  const isFine = useIsFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const { x, y } = useMousePosition();

  if (!isFine || reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      aria-hidden="true"
      style={{
        background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(242,169,59,0.06), transparent 70%)`,
      }}
    />
  );
}
