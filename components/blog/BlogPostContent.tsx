'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostContentProps {
  content: string;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="markdown-content"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }: any) => <h1 className="text-4xl font-bold text-white mt-8 mb-4">{children}</h1>,
          h2: ({ children }: any) => <h2 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h2>,
          h3: ({ children }: any) => <h3 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h3>,
          h4: ({ children }: any) => <h4 className="text-xl font-bold text-white mt-4 mb-2">{children}</h4>,
          p: ({ children }: any) => <p className="text-lg text-gray-300 mb-4 leading-relaxed">{children}</p>,
          a: ({ href, children }: any) => (
            <a href={href} className="text-cyan-400 hover:text-cyan-300 underline">
              {children}
            </a>
          ),
          ul: ({ children }: any) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4">{children}</ul>,
          ol: ({ children }: any) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2 ml-4">{children}</ol>,
          li: ({ children }: any) => <li className="text-gray-300">{children}</li>,
          strong: ({ children }: any) => <strong className="text-white font-semibold">{children}</strong>,
          em: ({ children }: any) => <em className="text-gray-300 italic">{children}</em>,
          code: ({ children, className }: any) => {
            const isInline = !className;
            return isInline ? (
              <code className="text-cyan-400 bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          pre: ({ children }: any) => (
            <pre className="bg-black border border-white/10 rounded-lg p-4 mb-4 overflow-x-auto">
              {children}
            </pre>
          ),
          blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-cyan-500/50 pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-white/10 my-8" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}

