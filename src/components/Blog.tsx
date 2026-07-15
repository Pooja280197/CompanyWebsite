import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { ScrollTextReveal } from './ScrollTextReveal';
import '../styles/blog-essos.css';

const PAGE_SIZE = 3;

const H1_LINE_A = [
  { text: 'Blog' },

];

const H1_LINE_B = [
  { text: 'full' },
  { text: 'drafts' },
  { text: 'follow' },
  { text: 'after' },
  { text: 'page' },
  { text: 'content' },
  { text: 'is' },
  { text: 'approved' },
];

function CategoryPill({ label, light }: { label: string; light?: boolean }) {
  return (
    <span className={`blog-essos__pill${light ? ' blog-essos__pill--light' : ''}`}>
      <span className="blog-essos__pill-dot" aria-hidden="true" />
      {label}
    </span>
  );
}

export default function Blog() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = 'Blog — NSS';
  }, []);

  const featured = BLOG_POSTS[0];
  const latest = BLOG_POSTS.slice(1);
  const cornerPool = useMemo(() => [...BLOG_POSTS], []);
  const totalPages = Math.max(1, Math.ceil(cornerPool.length / PAGE_SIZE));
  const cornerPosts = cornerPool.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goCorner = (dir: -1 | 1) => {
    setPage((p) => {
      const next = p + dir;
      if (next < 1) return totalPages;
      if (next > totalPages) return 1;
      return next;
    });
  };

  return (
    <div className="blog-essos">
      <div className="blog-essos__shell">
        <header className="blog-essos__intro">
         

          <h1 className="blog-essos__intro-title" id="blog-heading">
            <ScrollTextReveal
              tag="span"
              align="left"
              animate="words"
              className="blog-essos__intro-line blog-essos__intro-line--lead"
              textColor="#0a0a0a"
              letterInterval={42}
              letterDurationMs={580}
              words={H1_LINE_A}
            />
            {/* <ScrollTextReveal
              tag="span"
              align="left"
              animate="words"
              className="blog-essos__intro-line blog-essos__intro-line--sub"
              textColor="#6b7280"
              letterInterval={36}
              letterDurationMs={520}
              startDelay={320}
              words={H1_LINE_B}
            /> */}
          </h1>

       
        </header>

        <section className="blog-essos__hero" aria-label="Featured and latest articles">
          <Link to={`/blog/${featured.slug}`} className="blog-essos__featured">
            <span className="blog-essos__featured-badge">Featured</span>
            <img src={featured.image} alt="" className="blog-essos__featured-img" />
            <div className="blog-essos__featured-glass">
              <CategoryPill label={featured.category} light />
              <h2 className="blog-essos__featured-title">{featured.title}</h2>
              <div className="blog-essos__featured-foot">
                <p className="blog-essos__meta blog-essos__meta--on-dark">
                  {featured.date} · {featured.readTime}
                </p>
                <span className="blog-essos__featured-cta">
                  Read brief <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          <aside className="blog-essos__latest">
            <div className="blog-essos__latest-head">
              <h2 className="blog-essos__latest-heading">Latest posts</h2>
              <span className="blog-essos__latest-count">{latest.length}</span>
            </div>
            <ul className="blog-essos__latest-list">
              {latest.map((post, i) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="blog-essos__latest-item">
                    <span className="blog-essos__latest-index">{String(i + 1).padStart(2, '0')}</span>
                    <img src={post.image} alt="" className="blog-essos__latest-thumb" />
                    <div className="blog-essos__latest-body">
                      <p className="blog-essos__latest-cat">{post.category}</p>
                      <p className="blog-essos__latest-title">{post.title}</p>
                      <p className="blog-essos__meta">
                        {post.date} · {post.readTime}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="blog-essos__corner">
          <div className="blog-essos__corner-head">
            <div>
              <p className="blog-essos__eyebrow blog-essos__eyebrow--sm">
                <span className="blog-essos__eyebrow-mark" aria-hidden="true" />
                All briefs
              </p>
              <h2 className="blog-essos__section-title">Founders corner</h2>
            </div>
            <div className="blog-essos__nav-arrows">
              <button
                type="button"
                className="blog-essos__arrow"
                aria-label="Previous"
                onClick={() => goCorner(-1)}
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="blog-essos__arrow"
                aria-label="Next"
                onClick={() => goCorner(1)}
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="blog-essos__corner-grid">
            {cornerPosts.map((post, i) => (
              <Link
                key={`${post.slug}-${page}-${i}`}
                to={`/blog/${post.slug}`}
                className="blog-essos__card"
              >
                <div className="blog-essos__card-media">
                  <img src={post.image} alt="" />
                  <span className="blog-essos__card-read">{post.readTime}</span>
                </div>
                <CategoryPill label={post.category} />
                <h3 className="blog-essos__card-title">{post.title}</h3>
                <p className="blog-essos__card-excerpt">{post.excerpt}</p>
                <span className="blog-essos__card-link">
                  Open brief <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <nav className="blog-essos__pagination" aria-label="Pagination">
          <button
            type="button"
            className="blog-essos__page-arrow"
            aria-label="Previous page"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="blog-essos__pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`blog-essos__page${page === n ? ' is-active' : ''}`}
                onClick={() => setPage(n)}
                aria-current={page === n ? 'page' : undefined}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="blog-essos__page-arrow"
            aria-label="Next page"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      </div>
    </div>
  );
}
