const requiredEnvVars = [
  "NEXT_PUBLIC_BASE_URL",
  "NEXT_PUBLIC_HORIZON_PUBLIC_URL",
  "NEXT_PUBLIC_HORIZON_TESTNET_URL",
  "NEXT_PUBLIC_COINGECKO_API_URL",
  "NEXT_PUBLIC_DISCORD_URL",
  "NEXT_PUBLIC_TELEGRAM_URL",
  "NEXT_PUBLIC_GITHUB_URL",
] as const;

function validateEnvVars() {
  const missing = requiredEnvVars.filter(
    (key) => !process.env[key]
  );
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")`
    );
  }
}

validateEnvVars();

export const env = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  horizonPublic: process.env.NEXT_PUBLIC_HORIZON_PUBLIC_URL!,
  horizonTestnet: process.env.NEXT_PUBLIC_HORIZON_TESTNET_URL!,
  coingeckoApi: process.env.NEXT_PUBLIC_COINGECKO_API_URL!,
  discord: process.env.NEXT_PUBLIC_DISCORD_URL!,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL!,
  github: process.env.NEXT_PUBLIC_GITHUB_URL!,
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/nestera",
} as const;