'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

function formatDate(dateString: string): string {
  // Parse the ISO date string and extract date components without timezone conversion
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return `${monthNames[month]} ${day}, ${year}`;
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
              {post.title}
            </h2>
            <time className="text-gray-400 text-sm">
              {formatDate(post.date)}
            </time>
          </motion.article>
        </Link>
      ))}
    </div>
  );
}

