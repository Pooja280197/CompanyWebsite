const TW = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67b02255b31413b811c048ab_si-twitter.svg';
const LI = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67b02256c742c6b7cb28f718_si-linkedin.svg';
const IG = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67b02256f67a8cad36930a39_si-insta.svg';
const DR = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67b02255fd7da562e4e9dd7a_si-dribbble.svg';

function FooterLink({ href, children, small }: { href: string; children: string; small?: boolean }) {
  return (
    <a href={href} className={`footer-link group${small ? ' footer-link--sm' : ''}`}>
      <span className="footer-link__wave">
        <span className="footer-link__text">{children}</span>
        <span className="footer-link__text footer-link__text--hover" aria-hidden="true">{children}</span>
      </span>
    </a>
  );
}

function Logo() {
  return <img src="/mainLogo.png" alt="NSS" className="h-14 w-auto" />;
}

export default function Footer() {
  return (
    <footer className="footer-bg px-6 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16">

          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="footer-text-muted text-sm leading-relaxed mt-5 mb-7 max-w-[220px]">
              Building bold brands with thoughtful design.
            </p>
            <div className="flex gap-2.5">
              {[TW, LI, IG, DR].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="footer-social"
                  aria-label="Social link"
                >
                  <img src={icon} alt="" className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Company', links: ['About', 'Services', 'Work', 'Team', 'Pricing'] },
            { title: 'Services', links: ['Brand Strategy', 'Web Development', 'Digital Marketing', 'UI/UX Design', 'Analytics'] },
            { title: 'Contact', links: ['hello@nssagency.com', '+1 (555) 123-4567', 'San Francisco, CA'] },
          ].map((col) => (
            <div key={col.title}>
              <p className="footer-heading text-sm font-semibold mb-5">{col.title}</p>
              <div className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <FooterLink key={l} href="#">{l}</FooterLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-7 border-t border-black/8 gap-4">
          <p className="footer-text-faint text-xs">© 2025 NSS Agency. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <FooterLink key={l} href="#" small>{l}</FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
