export default function (config) {
  config.addPassthroughCopy({ public: "/" });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
}
