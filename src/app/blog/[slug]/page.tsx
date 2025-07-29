interface BlogPost {
  title: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "unlocking-startup-success": {
    title: "Unlocking Startup Success: A Guide to Government Schemes",
    content: `
      Discover the various government schemes available to burgeoning startups in India and how Evvolyn can help you navigate them.
    `,
  },
  "power-of-digital-presence": {
    title: "The Power of a Strong Digital Presence for MSMEs",
    content: `
      In the digital age, a strong online presence is not just an option but a necessity. Learn how to build a commanding digital footprint.
    `,
  },
  // Add more blog slugs here
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return <div>404 - Blog not found</div>;
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}