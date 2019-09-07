module.exports = {
  siteMetadata: {
    title: "Gatsby Twenty Fifteen",
    description: "GatsbyJS Site - Style based on Twenty Fifteen WordPress Theme. https://wordpress.org/themes/twentyfifteen/ ",
    author: "@riobahtiar",
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "blog.test",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        auth: {
          jwt_user: "admin",
          jwt_pass: "password",
          jwt_base_path: "/jwt-auth/v1/token"
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "/yoast/**"
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-glamor",
    "gatsby-plugin-typography"
  ],
}