// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    callToArms: "Abonne-toi pour maitriser ton dév !",
    me: {
      title: "Qui suis-je ?",
      description:
        "Je m'appelle Nathaniel : dév senior, tech lead (et toutes ses variations), formateur et maintenant créateur de contenus.<br>Cela fait plus de vingt ans que je suis dans le métier, et depuis trop longtemps je me dis qu'il est temps de partager mes connaissances.",
    },
  },
  title: "Nathaniel Vaur Henel, ton dév sensei",
  tagline: "Deux décennies d'expérience pour t'aider à maîtriser ton dév",

  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://nathaniel-vaur-henel.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nathaniel-vaur-henel", // Usually your GitHub org/user name.
  projectName: "nathaniel-vaur-henel.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/devento/',
          path: "devento",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Mon blog de dév",
          blogDescription: "Le blog de Nathaniel Vaur Henel, ton dév sensei",
          blogSidebarCount: 50,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Nathaniel Vaur Henel`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev-workout",
        path: "dev-workout",
        routeBasePath: "dev-workout",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "Nathaniel Vaur Henel",
        logo: {
          alt: "nvh",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Devento",
          },
          { to: "/dev-workout", label: "Dév Workout", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/devento/tags", label: "Tags Devento", position: "right" },
          {
            href: "https://github.com/Nathaniel-Vaur-Henel",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contenus",
            items: [
              {
                label: "Devento",
                to: "/devento",
              },
              {
                label: "Dev Workout",
                to: "/dev-workout",
              },
              {
                html: '<div class="footer-blog-container">\
                        <div class="footer-blog-text"><a href="/blog" class="footer__link-item">Blog</a></div>\
                        <div class="footer-blog-images"> \
                            <a href="/blog/rss.xml"><img src="/img/flux-rss.png" alt="Flux RSS" /></a> \
                            <a href="/blog/atom.xml"><img src="/img/flux-atom.svg" alt="Flux Atom"/></a> \
                            <a href="/blog/feed.json"><img src="/img/feed-json.svg" alt="Flux JSON"/></a> \
                            <img /> \
                            <img /> \
                            <img /> \
                        </div> \
                     </div>',
              }
            ],
          },
          {
            title: "Références",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com",
              },
              {
                label: "Wikipédia",
                href: "https://fr.wikipedia.org/",
              },
              {
                label: "Baeldung",
                href: "https://www.baeldung.com/",
              },
            ],
          },
          {
            title: "Me retrouver",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Nathaniel-Vaur-Henel",
              },
              {
                label: "Linkedin",
                href: "https://github.com/Nathaniel-Vaur-Henel",
              },
            ],
          },
          {
            title: "Me soutenir",
            items: [
              {
                label: "Via Paypal",
                href: "https://paypal.me/NathanielVaurHenel?country.x=FR&locale.x=fr_FR",
              },
              {
                label: "Via buymeacoffee.com",
                href: "https://www.buymeacoffee.com/nathanielvh",
              },
              {
                label: "Via ko-fi.com",
                href: "https://ko-fi.com/nathanielvaurhenel",
              },
            ],
          },
          {
            title: "Crédits",
            items: [
              {
                label: "Image Devento par Smashicons",
                href: "https://www.flaticon.com/fr/auteurs/smashicons",
              },
              {
                label: "Image Blog par Freepik",
                href: "https://www.flaticon.com/fr/auteurs/freepik",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nathaniel Vaur Henel. Built with <a href="https://docusaurus.io/" target="_about" class="footer__link-item">Docusaurus</a>, 💻, 💪🏾 and 🖤.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["java"],
      },
      algolia: {
        appId: 'GUSLMEOWUH',
        apiKey: '6c401866b1a230b7ce35982f17f3de7e',
        indexName: 'nathaniel-vaur-henelio',
      }
    }),
  markdown: {
    format: "mdx",
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent.replaceAll("{{MY_VAR}}", "MY_VALUE");
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
