export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'unlocking-startup-success',
    title: 'Unlocking Startup Success: A Guide to Government Schemes',
    date: '2024-07-15',
    excerpt: 'Discover the various government schemes available to burgeonin' +
      'g startups in India and how Evvolyn can help you navigate them.',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <p>Starting a new venture in India has never been more exciting, thanks to a supportive ecosystem and a plethora of government initiatives. Schemes like the Seed Fund Scheme, PMEGP, and various MSME loans are designed to provide the financial impetus that young companies need. At Evvolyn, we specialize in helping you understand the nuances of each scheme, ensuring you choose the one that best fits your business model.</p>
      <p>Our team of experts guides you through the application process, from documentation to submission, maximizing your chances of securing funding. We believe that with the right financial backing, your innovative ideas can transform into successful enterprises.</p>
    `,
  },
  {
    id: 2,
    slug: 'the-power-of-digital-presence',
    title: 'The Power of a Strong Digital Presence for MSMEs',
    date: '2024-07-10',
    excerpt: 'In the digital age, a strong online presence is not just an' +
      ' option but a necessity. Learn how to build a commanding digital footprint.',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <p>For Micro, Small, and Medium Enterprises (MSMEs), a robust digital presence can be a game-changer. It opens up new markets, enhances customer engagement, and builds brand credibility. Evvolyn’s digital marketing services, including Graphic Designing, Content Marketing, and Social Media Marketing, are tailored to meet the unique needs of MSMEs.</p>
      <p>We help you craft a compelling brand story, create engaging content, and run targeted campaigns that deliver measurable results. Let us help you harness the power of digital to propel your business to new heights.</p>
    `,
  },
  {
    id: 3,
    slug: 'navigating-the-legal-landscape',
    title: 'Navigating the Legal Landscape: A Startup’s Guide',
    date: '2024-07-05',
    excerpt: 'Understanding the legal intricacies of starting and running a ' +
      'business is crucial. Here’s how to stay compliant and protected.',
    imageUrl: 'https://placehold.co/600x400.png',
    content: `
      <p>The legal landscape for startups can be complex, with various registrations and compliances to adhere to. From Private Limited Company registration to NGO Darpan and CSR+ registrations, the requirements can be daunting. Evvolyn’s legal advisory experts are here to simplify this process for you.</p>
      <p>We provide end-to-end support for all your registration needs, ensuring you are compliant from day one. Our goal is to handle the legalities so you can focus on what you do best: building your business.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};
