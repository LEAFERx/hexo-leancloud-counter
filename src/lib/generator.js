function generator(locals) {
  const { config } = this;
  if (config.leancloud_counter.enable) {
    const path = 'leancloud_counter_post_list.json';
    const posts = [].concat(locals.posts.toArray())
      .filter(x => x.published)
      .map(x => ({
        title: x.title,
        url: config.root + x.path,
      }));
    return {
      path,
      data: JSON.stringify(posts),
    };
  }
  return null;
}

module.exports = {
  generator,
};
