module.exports = {
  title: "Hello Vuepress",
  description: "Just playing around",
  port: 9527,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "前端",
        link: "/webs/"
      },
      {
        text: "GitHub",
        link: "https://github.com/LeeVillage"
      }
    ],
    sidebar: {
      "/webs/": [
        {
          title: "前端",
          collapsable: false,
          children: ["", "vuepress", "zsh"]
        }
      ]
    },
    lastUpdated: "最后更新时间"
  }
};
