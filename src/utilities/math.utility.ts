export function calculateRadialPosition(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  const tx = radius * Math.cos(rad);
  const ty = radius * Math.sin(rad);
  return { tx, ty };
}