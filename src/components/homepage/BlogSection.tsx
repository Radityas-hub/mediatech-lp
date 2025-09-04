interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category?: string;
  readTime?: string;
  date?: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const defaultPosts: BlogPost[] = [
    {
      id: "1",
      title: "Mengapa UI/UX Menjadi Kunci Transformasi Digital",
      excerpt: "Kami membahas peran penting desain dalam membentuk pengalaman pengguna yang optimal dan strategis untuk bisnis modern.",
      image: "/blog/ui-ux-transformation.jpg",
      category: "Design",
      readTime: "5 min read",
      date: "Nov 15, 2024"
    },
    {
      id: "2", 
      title: "Mediatech Ekspansi ke Sektor F&B Digital",
      excerpt: "Langkah strategis terbaru kami dalam membawa teknologi ke industri kuliner lokal dengan solusi digital terintegrasi.",
      image: "/blog/fb-digital-expansion.jpg",
      category: "Business",
      readTime: "7 min read", 
      date: "Nov 10, 2024"
    },
    {
      id: "3",
      title: "Tips Membangun Startup Properti dengan Dukungan Teknologi",
      excerpt: "Panduan singkat bagi pelaku bisnis properti dalam memanfaatkan solusi digital untuk mengoptimalkan operasional dan pengalaman pelanggan.",
      image: "/blog/startup-property-tech.jpg",
      category: "Technology",
      readTime: "6 min read",
      date: "Nov 5, 2024"
    }
  ];

  const blogPosts = posts || defaultPosts;

  // Helper function to truncate title
  const truncateTitle = (title: string, maxLength: number = 45): string => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength).trim() + "...";
  };

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-blue-600 tracking-widest text-sm font-medium mb-4">
            BLOGS
          </h3>
          <h2 className="text-[#202020] text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Insights & Innovation
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Wawasan dan informasi seputar strategi digital, desain produk, hingga 
            pengembangan teknologi terbaru di berbagai sektor industri.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative w-full h-64 lg:h-72 overflow-hidden mb-6 bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <div class="text-white text-center">
                            <div class="text-sm font-medium">Blog Image</div>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Category Badge */}
                {post.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Blog Content */}
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
                  {truncateTitle(post.title)}
                </h3>
                
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
