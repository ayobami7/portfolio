// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1180d340a1ff206be230bbd0299067f5@o4508994085847040.ingest.de.sentry.io/4508994089320528",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  // integrations: [
  //   Sentry.feedbackIntegration({
  //     // Additional SDK configuration goes in here, for example:
  //     colorScheme: "system",
  //   }),
  // ],
});
