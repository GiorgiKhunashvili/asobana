import { router } from 'expo-router';

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

/** Back to the journey path, the main screen: closes what is open over the tabs. */
export function toJourney(): void {
  router.dismissTo('/');
}
