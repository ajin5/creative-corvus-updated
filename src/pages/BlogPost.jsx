import { useParams, Link, Navigate } from 'react-router-dom';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { getPostBySlug, blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'Creative Corvus Design and Media School' },
          image: post.image,
        }}
      />

      <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-gold-500 hover:text-gold-400">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-gold-500">
            {post.category}
          </span>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-5 text-sm text-mist-500">
            <span className="flex items-center gap-1">
              <CalendarDays size={14} />
              {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img src={post.image} alt="" className="w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-mist-300 leading-relaxed">{para}</p>
          ))}
        </Reveal>
      </article>

      {more.length > 0 && (
        <section className="border-t border-white/10 bg-navy-800/40 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="mb-8 font-display text-2xl font-bold text-mist-100">More from the blog</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-white/10 bg-navy-800 p-5 transition-colors hover:border-gold-500/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-500">{p.category}</span>
                  <h3 className="mt-2 font-display font-bold text-mist-100 group-hover:text-gold-400 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
