import { NextPage } from "next";
import MasterLayout from "@components/Layouts";
import { getSortedPostsData } from "@lib/utils";

type Props = {
  allPosts?: Array<any>;
};

const HomePage: NextPage<Props> = ({ allPosts }) => {
  const allPostsList = allPosts.map((post) => (
    <li key={post.id}>
      <a href={`/posts/${post.id}`}>
        {post.title} - {post.date}
      </a>
    </li>
  ));
  return (
    <MasterLayout title="Loc Mai">
      <h4>Posts</h4>
      <ul>{allPostsList}</ul>

      <h4>Contacts</h4>
      <ul>
      <li>
        {" "}
        GitHub:{" "}
        <a href="https://github.com/locmai" target="blank">
          locmai
        </a>{" "}
      </li>
      <li>
        {" "}
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/locmai0201/" target="blank">
          locmai0201
        </a>{" "}
      </li>
     </ul>
    </MasterLayout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: { allPosts },
  };
}