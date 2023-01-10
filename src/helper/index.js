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

export function mappingMenuData(menu) {
  const childItemsData = menu?.child_items || [];
  const childItems = childItemsData.map(mappingMenuData);

  return {
    id: menu.ID,
    name: menu.title,
    linkURL: menu.url,
    childItems,
  };
}

export function mappingCommentData(comment) {
  return {
    id: comment.id,
    authorId: comment.author,
    authorName: comment.author_name,
    authorAvatar: comment.author_data.avatar,
    pubDate: comment.date,
    content: comment.content.rendered,
    replyCount: comment.comment_reply_count,
    parent: comment.parent,
  };
}
