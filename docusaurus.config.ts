import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Circle",
  tagline: "Circle are cool",
  favicon: "img/favicon.ico",
  scripts: [{ src: "/js/script.js", defer: true, "data-domain": "circle.uz" }],

  // Set the production url of your site here
  url: "https://circle.uz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Dedicated", // Usually your GitHub org/user name.
  projectName: "Circle", // Usually your repo name.
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "uz",
    locales: ["en", "uz", "ru"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      uz: {
        htmlLang: "uz",
      },
      ru: {
        htmlLang: "ru",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        // id: 'product', // omitted => default instance
        path: 'frontend',
        routeBasePath: 'frontend',
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/dedicated-agency/circle.uz/tree/main",
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'backend',
        path: 'backend',
        routeBasePath: 'backend',
        sidebarPath:  "./sidebars.ts",
        editUrl: "https://github.com/dedicated-agency/circle.uz/tree/main",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/favicon.ico",
    navbar: {
      title: "Circle",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "/frontend/intro",
          position: "left",
          label: "Frontend",
        },
        {
          to: "/backend/intro",
          position: "left",
          label: "Backend",
          
        },
      
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Frontend",
              to: "/frontend/intro",
            },
            {
              label: "Backend",
              to: "/backend/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/circleuz",
            },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/dedicated-agency/circle.uz",
            },
          ],
        },
      ],
      // logo: { src: "img/favicon.ico" },
      copyright: `Copyright © ${new Date().getFullYear()} Dedicated.agency`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
