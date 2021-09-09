import { NextPage } from "next";
import MasterLayout from "@components/Layouts";
import { getSortedPostsData, getPostData } from "@lib/utils";
import { uniq, concat } from "lodash";
type Props = {
  allPosts?: Array<any>;
  allTags?: Array<String>;
};

const PostsPage: NextPage<Props> = ({ allPosts, allTags }) => {
  const allPostsList = allPosts.map((post) => (
    <li key={post.id}>
      <a href={`/posts/${post.id}`}>
        {post.title} - {post.date}
      </a>
    </li>
  ));

  let uniqTags = uniq(allTags);
  console.log(uniqTags)
  const tagsContent = uniqTags.map((tag) => (
    // <a href={`/tags/${tag}`}>#{tag} </a>
    <a>#{tag} </a>
  ));

  return (
    <MasterLayout>
      <h3>Recent posts</h3>
      <ul>{allPostsList}</ul>
      <h3>Tags</h3>
      {tagsContent}
    </MasterLayout>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const allPosts = getSortedPostsData()
  
  let allTags = new Array

  const allPostIds = allPosts.map(post => post.id)
  
  for (let id of allPostIds) {
    const tags = (await getPostData(id)).tags;
    allTags = concat(allTags, tags);
  }

  return {
    props: { allPosts, allTags },
  };
}