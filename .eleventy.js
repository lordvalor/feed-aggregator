module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", function(date, format) {
    const { DateTime } = require("luxon");
    return DateTime.fromJSDate(new Date(date)).toFormat(format);
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}