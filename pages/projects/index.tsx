import { NextPage } from "next";
import MasterLayout from "@components/Layouts";
import { getSortedProjectsData } from '@lib/utils';

type Props = {
  allProjects?: Array<any>;
};

const ProjectsPage: NextPage<Props> = ({ allProjects }) => {
  const allProjectsList = allProjects.map((project) => (
    <li key={project.id}>
      <a href={`/projects/${project.id}`}>
        {project.title} - {project.date}
      </a>
    </li>
  ));
  return (
    <MasterLayout>
      <ul>{allProjectsList}</ul>
    </MasterLayout>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: { allProjects },
  }
}