const RSSParser = require("rss-parser");
const feeds = require("../../feeds.json");

module.exports = async function () {
  const parser = new RSSParser();
  const posts = [];

  for (const feed of feeds) {
    try {
      const data = await parser.parseURL(feed.url);
      if (data.items.length > 0) {
        const latestPost = data.items[0];
        posts.push({
          title: latestPost.title,
          link: latestPost.link,
          date: latestPost.pubDate,
          categoria: feed.categoria,
          blogTitle: data.title
        });
      }
    } catch (error) {
      console.error(`Error fetching feed ${feed.url}:`, error);
    }
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};