import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/blog-posts';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {

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
    <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint={getImageHint(post.slug)}
        />
      </Link>
      <CardHeader>
        <CardTitle className="text-xl leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-primary hover:underline">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
