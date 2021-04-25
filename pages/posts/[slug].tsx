import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import markdownToHtml from '@lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '@lib/utils'
import MasterLayout from "@components/Layouts";

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const content = post.content
  return (
    <MasterLayout title="Loc Mai">
      <article className="mb-32">
        <Head>
          <title>
            {post.title}
          </title>
        </Head>

        <section>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </article>
    </MasterLayout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}