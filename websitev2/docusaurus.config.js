module.exports={
  title: "Avolites Manuals",
  tagline: "Official Manual for the Avolites software",
  url: "https://manual.avolites.com",
  baseUrl: "/",
  organizationName: "Avolites",
  projectName: "AvoDocs",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    "/js/fuse.js",
    "/js/search.js",
    "/js/video.js"
  ],
  favicon: "img/favicon.ico",
  customFields: {
    gaGtag: true,
    copyrightUrl: "https://avolites.com",
    markdownPlugins: [
      null
    ],
    repoUrl: "https://github.com/AvolitesLtd/TitanManual"
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: require.resolve('./sidebars.json')
        },
        blog: {},
        theme: {
          customCss: ["../static/avolites-icons/icons.css", "../src/css/customTheme.scss"]
        }
      }
    ]
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve("./docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
        docsDir: "../docs",

        highlightSearchTermsOnTargetPage: true,        
      },
    ]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'German',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: "Avolites Manuals",
      logo: {
        src: "img/Avolites_Logo_White.svg"
      },
      items: [
        {
          to: "docs",
          label: "Titan",
          position: "left"
        },
        {
          label: 'Prism',
          position: 'left',
          items: [
            {
              to: 'docs/prism/player/about',
              label: 'Player',
            },
            {
              to: 'docs/prism/one/about',
              label: 'One',
            }
          ]
        },
        {
          to: "/help",
          label: "Help",
          position: "left"
        },
        {
          href: "https://avolites.com",
          label: "Main Website",
          position: "left"
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: "Version",
          to: "docs/titan",
          position: "right",
          items: [
            {
              label: "14.0",
              to: "docs/titan/",
              activeBaseRegex: "docs/titan/(?!12.0|13.0|14.0|next)"
            },
            {
              label: "13.0",
              to: "docs/titan/13.0/"
            },
            {
              label: "12.0",
              to: "docs/titan/12.0/"
            },
            {
              label: "v15.0 Beta",
              to: "docs/titan/next/",
              activeBaseRegex: "docs/titan/next/(?!support|team|resources)"
            }
          ]
        }
      ]
    },
    image: "img/avolites_share.jpg",
    footer: {
      links: [
        {
          // Label of the section of these links
          title: 'Avolites',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/titan/',
            },
            {
              label: 'Support',
              to: 'https://www.avolites.com/support/"',
            },
            {
              label: 'Titan API Documentation',
              to: 'https://api.avolites.com/"',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.avolites.com/privacy-policy',
            }
          ],
        },
        {
          title: 'Other Resources',
          items: [
            {
              label: 'Downloads',
              to: "/versions"
            },
            {
              label: 'Main Website',
              to: "https://www.avolites.com/"
            },
            {
              label: 'YouTube',
              to: "https://www.youtube.com/avolites"
            },
            {
              label: 'Facebook Group',
              to: "https://www.facebook.com/groups/Avolites/"
            },
            {
              label: 'Avolites.de Wiki',
              to: "https://www.avolites.de/wiki"
            },
          ]
        }
      ],
      copyright: "Copyright Avolites 2021 ©",
      logo: {
        "src": "img/Avolites_Logo_Red.svg"
      }
    },
    gtag: {
      "trackingID": "GTM-TZMDJV5"
    }
  }
}