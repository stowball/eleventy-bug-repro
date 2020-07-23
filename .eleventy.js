module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/dist');

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
    markdownTemplateEngine: 'ejs',
    passthroughFileCopy: true,
    templateFormats: [
      'css',
      'ejs',
      'js', // Remove this to make it work in 0.10.0+, but then I can't reload changes to assets like in 0.9.0
      'md',
    ],
  };
};
