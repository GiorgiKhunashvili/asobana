/** URLs carry IDs only. Screens must validate IDs against the loaded catalog. */
export const routes = {
  postcard: (chapterId: string) => ({
    pathname: '/postcards/[chapterId]' as const,
    params: { chapterId },
  }),
  game: (levelId: string) => ({
    pathname: '/game/[levelId]' as const,
    params: { levelId },
  }),
  chapter: (chapterId: string) => ({
    pathname: '/chapters/[chapterId]' as const,
    params: { chapterId },
  }),
  victory: (levelId: string) => ({
    pathname: '/victory/[levelId]' as const,
    params: { levelId },
  }),
};
export function singleParam(
  value: string | string[] | undefined,
): string | null {
  return typeof value === 'string' ? value : null;
}
