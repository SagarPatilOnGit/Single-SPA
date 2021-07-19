// TODO add react app


import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sagar/react",
  app: () => System.import("@sagar/react"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular",
  app: () => System.import("angular"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});