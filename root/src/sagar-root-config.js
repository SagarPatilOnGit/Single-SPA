
// import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@sagar/react",
//   app: () => System.import("@sagar/react"),
//   // activeWhen: ["/react"],
// });

// registerApplication({
//   name: "angular",
//   app: () => System.import("angular"),
//   // activeWhen: ["/angular"],
// });
// start({
//   urlRerouteOnly: true,
// });


import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();