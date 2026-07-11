import { Link } from 'react-router-dom';

export interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export function CaseStudyHero({
  title,
  subtitle,
  tags,
  image,
  ctaLabel = 'Contact Us',
  ctaTo = '/#contact',
}: CaseStudyHeroProps) {
  const titleBaseDelay = 0.1;
  const charStagger = 0.045;
  const charDuration = 0.85;

  const wordGroups = title.split(/\s+/).filter(Boolean).map((word, wordIndex, words) => {
    let startIndex = 0;
    for (let w = 0; w < wordIndex; w += 1) {
      startIndex += words[w].length + 1;
    }

    return {
      word,
      spaceDelay: wordIndex > 0 ? titleBaseDelay + (startIndex - 1) * charStagger : null,
      letters: [...word].map((char, charIndex) => ({
        char,
        delay: titleBaseDelay + (startIndex + charIndex) * charStagger,
      })),
    };
  });

  const animatedCount = title.length;
  const subtitleDelay =
    titleBaseDelay + Math.max(0, animatedCount - 1) * charStagger + charDuration * 0.45;
  const tagsDelay = subtitleDelay + 0.35;
  const ctaDelay = tagsDelay + 0.2;

  return (
    <header className="case-study-hero relative overflow-hidden">
      <div className="case-study-hero__bg" aria-hidden="true">
        <img src={image} alt="" className="case-study-hero__bg-img" />
        <div className="case-study-hero__bg-overlay" />
      </div>

      <div className="case-study-hero__inner relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-0">
        <h1 className="case-study-hero__title">
          {wordGroups.map((group, groupIndex) => (
            <span key={`${group.word}-${groupIndex}`} className="case-study-hero__title-word-group">
              {group.spaceDelay !== null && (
                <span
                  className="case-study-hero__title-char case-study-hero__title-char--space"
                  style={{ animationDelay: `${group.spaceDelay}s` }}
                >
                  {'\u00A0'}
                </span>
              )}
              {group.letters.map((letter, letterIndex) => (
                <span
                  key={`${letter.char}-${letterIndex}`}
                  className="case-study-hero__title-char"
                  style={{ animationDelay: `${letter.delay}s` }}
                >
                  {letter.char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p
          className="case-study-hero__subtitle case-study-hero__fade-in"
          style={{ animationDelay: `${subtitleDelay}s` }}
        >
          {subtitle}
        </p>

        {tags.length > 0 && (
          <div
            className="case-study-hero__tags case-study-hero__fade-in mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3"
            style={{ animationDelay: `${tagsDelay}s` }}
          >
            {tags.map((tag) => (
              <span key={tag} className="case-study-hero__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          to={ctaTo}
          className="case-study-hero__cta case-study-hero__fade-in"
          style={{ animationDelay: `${ctaDelay}s` }}
        >
          {ctaLabel}
        </Link>
      </div>

      <div className="case-study-hero__curve" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="case-study-hero__curve-svg">
          <path
            d="M0,130 Q720,58 1440,130 L1440,160 L0,160 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </header>
  );
}
