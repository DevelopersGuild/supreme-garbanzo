const { description } = require("../../package");

module.exports = {
  title: "De Anza Remote Club Meetings",
  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#8b032c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Meeting Times",
        link: "/meeting/",
      },
      {
        text: "Developers Guild",
        link: "https://da-developers.dev/",
      },
    ],
    sidebar: "auto",
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
