import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { removeHugoShortcodes, normalizeMarkdownFormatting } from '@/lib/markdown';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostContent } from '@/components/blog/BlogPostContent';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  const cleanedContent = normalizeMarkdownFormatting(removeHugoShortcodes(post.content));

  return (
    <main className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPostHeader title={post.title} date={post.date} />
        </div>
      </section>

      {/* Content */}
      <article className="pb-32 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPostContent content={cleanedContent} />
        </div>
      </article>
    </main>
  );
}

