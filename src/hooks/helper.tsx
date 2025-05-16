import { DashboardRouter } from "../routers";
import { APPS } from "../ultis/constants";

export const handleModalClose = (id: string): void => {
  const element = document.querySelector(`#${id}`) as HTMLElement | null;
  console.log(element)
  if (element) {
    console.log();
    element.click();
  }
};

export const getApp = () => {
  const subdomain = getSubdomain(window.location.hostname);

  const main = APPS.find((app) => app.main);

  if (!main) throw new Error("Must have main app");

  if (subdomain === "") return main.app;

  const app = APPS.find((app) => subdomain === app.subdomain);

  if (!app) {
    // Load home.css if subdomain doesn't match any app
    loadCSSFile('/home.css');
    return main.app;
  }

  // Load dashboard.css for DashboardRouter routes
  if (app.app === DashboardRouter) {
    loadCSSFile('/assets/assets/css/app.min.css');
    loadCSSFile('/assets/assets/css/bootstrap.min.css');
    loadCSSFile('/assets/assets/css/icons.min.css');
    loadCSSFile('/assets/assets/css/custom.css');

     // Load JavaScript files for DashboardRouter routes
     //loadJSFile('/assets/assets/js/app.js');
  }
  return app.app;
};

export const getSubdomain = (location: string) => {
  const locationParts = location.split(".");

  let sliceTill = -2;

  //for LocalHost
  const isLocalHost = locationParts.slice(-1)[0] === "localhost";
  if (isLocalHost) sliceTill = -1;

  return locationParts.slice(0, sliceTill).join("");
};



export const loadCSSFile = (filename: string) => {
  const link = document.createElement('link');
  link.href = filename;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
};


function loadJSFile(filename: string) {
  const script = document.createElement('script');
  script.src = filename;
  document.body.appendChild(script);
}