import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { blogPosts } from '@/lib/blog-posts';
import { BlogCard } from '@/components/blog-card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export default function BlogPage() {
  return (
    <main className="pt-24">
      <Section id="blog-list" className="bg-background">
        <AnimateOnScroll>
          <SectionTitle>Our Blog</SectionTitle>
          <SectionDescription>
            Stay updated with the latest news, insights, and trends in the startup ecosystem.
          </SectionDescription>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimateOnScroll key={post.id} delay={100 + index * 100}>
              <BlogCard post={post} />
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </main>
  );
}
