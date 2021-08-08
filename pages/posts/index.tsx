import { NextPage } from "next";
import MasterLayout from "@components/Layouts";
import { getSortedPostsData } from '@lib/utils';

type Props = {
  allPosts?: Array<any>;
};

const PostsPage: NextPage<Props> = ({ allPosts }) => {
  const allPostsList = allPosts.map((post) =>
    <li key={post.id}><a href={`/posts/${post.id}`}>{post.title} - {post.date}</a></li>)
  return (
    <MasterLayout>
      <ul>
        {allPostsList}
      </ul>
    </MasterLayout>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const allPosts = getSortedPostsData()

  return {
    props: { allPosts },
  }
}