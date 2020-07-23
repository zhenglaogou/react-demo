// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [

  ],

  asideMenuConfig = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "home2",
      children: [
        {
          name: "monitor",
          path: "/dashboard/monitor"
        }
      ]
    },
    {
      name: "exception",
      path: "/exception",
      icon: "notice",
      children: [
        {
          name: "404",
          path: "/exception/404"
        }
      ]
    }
  ];

export {headerMenuConfig, asideMenuConfig};
