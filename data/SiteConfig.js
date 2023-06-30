const config = {
  siteTitle: "Marcio José Lisboa",
  siteTitleShort: "Marcio José Lisboa",
  siteTitleAlt: "Marcio José Lisboa",
  siteLogo: "/logos/logo-1024.png",
  siteUrl: "https://www.programadorbr.com.br",
  repo: "https://github.com/mjlbnu",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "LL",
  siteDescription:
    "Marcio José Lisboa's Digital Garden. Articles related to web development, new technologies, agile methodologies, and career.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "G-G03CFN68HG",
  postDefaultCategoryID: "Tecnology",
  newsletter: "",
  newsletterEmbed: "",
  userName: "Marcio",
  userEmail: "mjlbnu@gmail.com",
  userTwitter: "",
  menuLinks: [
    {
      name: "Sobre Mim",
      link: "/sobre/",
    },
    {
      name: "Artigos",
      link: "/blog/",
    },
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff",
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
