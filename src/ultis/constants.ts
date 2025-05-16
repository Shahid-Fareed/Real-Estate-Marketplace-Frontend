import { DashboardRouter, HomeRouter } from "../routers";

export const APPS = [
  {
    subdomain: "www",
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: "dashboard",
    app: DashboardRouter,
    main: false,
  },
];
