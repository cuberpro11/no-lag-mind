import { getAllPosts } from '@/lib/blog';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogList } from '@/components/blog/BlogList';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHeader />
        </div>
      </section>

      {/* Posts List */}
      <section className="pb-32 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </section>
    </main>
  );
}

