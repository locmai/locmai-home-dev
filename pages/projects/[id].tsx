import MasterLayout from '@components/Layouts';
import Date from '@components/Date';
import { getAllProjectIds, getProjectData } from '@lib/utils'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Project({
  projectData,
}: {
  projectData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <MasterLayout title={projectData.title}>
      <article>
        <h1>{projectData.title}</h1>
        <div>
          <Date dateString={projectData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </MasterLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params.id as string);
  return {
    props: {
      projectData,
    },
  };
}
