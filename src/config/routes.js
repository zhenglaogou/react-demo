import React from "react";

import BasicLayout from "@/layouts/BasicLayout";

const Dashboard = React.lazy(() => import("@/pages/Dashboard")),
  NotFound = React.lazy(() => import("@/pages/NotFound")),

  routerConfig = [
    {
      path: "/",
      component: BasicLayout,
      children: [
        {
          path: "/dashboard/monitor",
          component: Dashboard
        },
        {
          path: "/exception/404",
          component: NotFound
        },
        {
          path: "/",
          redirect: "/dashboard/monitor"
        },
        {
          component: NotFound
        }
      ]
    }
  ];

export default routerConfig;
