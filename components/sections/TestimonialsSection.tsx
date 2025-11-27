'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/lib/animations/scroll-reveal';

const testimonials = [
  {
    quote: 'Mastering keyboard shortcuts through No Lag Mind transformed my workflow. I can now code at the speed of thought.',
    author: 'Sarah Chen',
    role: 'Senior Developer',
    avatar: '👩‍💻',
  },
  {
    quote: 'The no-click principle changed everything. My productivity has skyrocketed and I feel more in control of my work.',
    author: 'Marcus Johnson',
    role: 'Product Manager',
    avatar: '👨‍💼',
  },
  {
    quote: 'Learning AI tools through this platform has been a game-changer. I can now automate repetitive tasks effortlessly.',
    author: 'Emily Rodriguez',
    role: 'Content Creator',
    avatar: '✍️',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What People Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Join thousands who have transformed their productivity
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} direction="up" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all h-full"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

