export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    thumb: post.featured_media_url,
    pubDate: post.date,
    authorId: post.author,
    authorName: post.author_data.nickname,
    authorAvatar: post.author_data.avatar,
    desc: post.excerpt.rendered,
    categoriesId: post.categories,
    slug: post.slug,
    viewCount: post.view_count,
    commentCount: post.comment_count,
    contentHTML: post.content.rendered,
  };
}
