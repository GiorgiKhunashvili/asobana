/**
 * Live AdMob units serve only in builds whose EAS profile sets
 * ASOBANA_LIVE_ADS=1 (eas.json `production`). It is read here, when each native
 * build evaluates its config, rather than inlined by the bundler, whose cache
 * can carry a stale value between builds.
 */
module.exports = ({ config }) => ({
  ...config,
  extra: { ...config.extra, liveAds: process.env.ASOBANA_LIVE_ADS === '1' },
});
