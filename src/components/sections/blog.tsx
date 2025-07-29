import Link from 'next/link';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/blog-posts';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Button } from '../ui/button';

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Section id="blog" className="bg-muted/60">
      <AnimateOnScroll>
        <SectionTitle>From Our Blog</SectionTitle>
        <SectionDescription>
          हमारे ब्लॉग से सीधे आपके लिए, व्यापार की दुनिया से नवीनतम जानकारी और प्रेरणा।
        </SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post, index) => (
          <AnimateOnScroll key={post.id} delay={200 + index * 100}>
            <BlogCard post={post} />
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={500}>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-transform hover:scale-105">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
