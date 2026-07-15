import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getBlogPost, BLOG_POSTS } from '../data/blogPosts';
import '../styles/blog-essos.css';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = getBlogPost(slug);

  useEffect(() => {
    if (post) document.title = post.metaTitle;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="blog-essos blog-essos--article">
      <article className="blog-essos__shell blog-essos__article">
        <Link to="/blog" className="blog-essos__back">
          <ArrowLeft size={16} />
          Back to briefs
        </Link>

        <header className="blog-essos__article-head">
          <span className="blog-essos__pill">
            <span className="blog-essos__pill-dot" aria-hidden="true" />
            {post.category}
          </span>
          <h1 className="blog-essos__article-title">{post.title}</h1>
          <p className="blog-essos__meta">
            {post.date} · {post.readTime} · Draft pending
          </p>
        </header>

        <div className="blog-essos__article-hero">
          <img src={post.image} alt="" />
        </div>

        <div className="blog-essos__brief">
          <div className="blog-essos__brief-grid">
            <div>
              <p className="blog-essos__brief-label">Target keyword</p>
              <p className="blog-essos__brief-value">{post.keyword}</p>
            </div>
            <div>
              <p className="blog-essos__brief-label">Meta title</p>
              <p className="blog-essos__brief-value">{post.metaTitle}</p>
            </div>
          </div>

          <div className="blog-essos__brief-block">
            <p className="blog-essos__brief-label">Structure</p>
            <ol className="blog-essos__structure">
              {post.structure.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="blog-essos__brief-block">
            <p className="blog-essos__brief-label">Internal links</p>
            <div className="blog-essos__link-row">
              {post.links.map((link) => (
                <Link key={link.href} to={link.href} className="blog-essos__chip">
                  {link.label}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <p className="blog-essos__note">
            Full draft: 1,200–1,800 words · Real author byline [PENDING: author names/bios] · Article
            schema
          </p>
        </div>

        {others.length > 0 && (
          <section className="blog-essos__more">
            <h2 className="blog-essos__section-title">More briefs</h2>
            <div className="blog-essos__corner-grid">
              {others.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="blog-essos__card">
                  <div className="blog-essos__card-media">
                    <img src={item.image} alt="" />
                  </div>
                  <span className="blog-essos__pill">
                    <span className="blog-essos__pill-dot" aria-hidden="true" />
                    {item.category}
                  </span>
                  <h3 className="blog-essos__card-title">{item.title}</h3>
                  <p className="blog-essos__meta">
                    {item.date} · {item.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
