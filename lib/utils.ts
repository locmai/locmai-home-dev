
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')
const projectsDirectory = path.join(process.cwd(), "_projects");

export function getSortedPostsData() {
  return getSortedArticleData(postsDirectory);
}

export function getSortedProjectsData() {
  return getSortedArticleData(projectsDirectory);
}

export function getSortedArticleData(articleDirectory: string) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(articleDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(articleDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  return getAllArticleIds(postsDirectory);
}

export function getAllProjectIds() {
  return getAllArticleIds(projectsDirectory);
}

export function getAllArticleIds(articleDirectory: string) {
  const fileNames = fs.readdirSync(articleDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  return getArticleData(id, postsDirectory);
}

export async function getProjectData(id: string) {
  return getArticleData(id, projectsDirectory);
}

export async function getArticleData(id: string, articleDirectory: string) {
  const fullPath = path.join(articleDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string, tags: Array<String> }),
  };
}
