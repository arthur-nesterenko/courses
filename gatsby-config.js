require( `dotenv` ).config();

module.exports = {
    siteMetadata: {
        siteTitle: `Courses | Arthur Nesterenko`,
        defaultTitle: `Courses | Arthur Nesterenko`,
        siteTitleShort: `courses`,
        siteDescription: `JS Courses`,
        siteUrl: process.env.SITE_URL || "http://localhost:8000",
        siteAuthor: `@arthurnstr`,
        siteImage: `/favicon.png`,
        siteLanguage: `en`,
        themeColor: `#007991`,
        basePath: `/`,
        footer: `Theme by Rocketseat`,
    },
    plugins: [
        {
            resolve: `@rocketseat/gatsby-theme-docs`,
            options: {
                configPath: `src/config`,
                docsPath: `src/docs`,
                githubUrl: `https://github.com/arthur-nesterenko`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Courses | Arthur Nesterenko`,
                short_name: `Courses`,
                start_url: `/`,
                background_color: `#ffffff`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_ID,
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: process.env.SITE_URL || "http://localhost:8000",
            },
        },
        `gatsby-plugin-offline`,
    ],
};
