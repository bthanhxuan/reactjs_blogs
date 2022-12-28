import './post-detail.css';
import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';
import PostDetailTags from './PostDetailTags';

function PostDetailContent({ contentHTML }) {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
      </div>
      <div className="content-padding">
        <PostDetailRichText contentHTML={contentHTML} />

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  );
}

export default PostDetailContent;
