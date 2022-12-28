function PostDetailRichText({ contentHTML }) {
  return (
    <div
      className="rte"
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    ></div>
  );
}
export default PostDetailRichText;
