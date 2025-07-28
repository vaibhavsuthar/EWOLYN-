import { getPostBySlug, blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const getImageHint = (slug: string) => {
    switch (slug) {
      case 'unlocking-startup-success':
        return 'Indian startup office';
      case 'the-power-of-digital-presence':
        return 'Indian business digital';
      case 'navigating-the-legal-landscape':
        return 'Indian legal documents';
      default:
        return 'business technology';
    }
  }

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
            priority
            data-ai-hint={getImageHint(post.slug)}
          />
          <div
            className="prose dark:prose-invert lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
