/** Shared by the vector glyph and its pre-rendered Android assets. The small
 * hint-price coin keeps its one-point minimum stroke instead of scaling it. */
export function coinGeometry(size: number) {
  const r = size / 2;
  return {
    r,
    cy: r - size * 0.04,
    faceRadius: r * 0.9,
    ringRadius: r * 0.68,
    strokeWidth: Math.max(1, size * 0.05),
    starTransform: `translate(${r - size * 0.27} ${r - size * 0.31}) scale(${(size * 0.54) / 24})`,
  };
}
