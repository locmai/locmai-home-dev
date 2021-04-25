import { NextPage } from "next";
import MasterLayout from "@components/Layouts";
import { getAllPosts } from '@lib/utils';

type Props = {
  allPosts?: Array<any>;
};

const PostsPage: NextPage<Props> = ({ allPosts }) => {
  const allPostsList = allPosts.map((post) =>
    <li key={post.slug}><a href={`/posts/${post.slug}`}>{post.title} - {post.date}</a></li>)
  return (
    <MasterLayout title="Posts">
      <ul>
        {allPostsList}
      </ul>
    </MasterLayout>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}