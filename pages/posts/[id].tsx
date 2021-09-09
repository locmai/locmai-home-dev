import MasterLayout from '@components/Layouts';
import Date from '@components/Date';
import { getAllPostIds, getPostData } from '@lib/utils'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Tag } from 'antd';

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
    tags: Array<String>
  }
  }) {
  
  const tagsContent = postData.tags.map((tag) => <Tag>#{tag} </Tag>);

  return (
    <MasterLayout>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div>{tagsContent}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </MasterLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}