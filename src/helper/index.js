export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    thumb: post.featured_media_url,
    pubDate: post.date,
    authorName: post.author_data.nickname,
    authorAvatar: post.author_data.avatar,
    desc: post.excerpt.rendered,
  };
}