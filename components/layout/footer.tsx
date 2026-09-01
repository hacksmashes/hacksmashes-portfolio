import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-base font-semibold text-fg">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{siteConfig.description}</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="gutter-mark mb-3">{"// sitemap"}</p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors duration-200 ease-editorial hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="gutter-mark mb-3">{"// connect"}</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-fg-muted transition-colors duration-200 ease-editorial hover:text-fg"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.mobile}`}
                    className="text-sm text-fg-muted transition-colors duration-200 ease-editorial hover:text-fg"
                  >
                    Mobile
                  </a>
                </li>
                {/* <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-fg-muted transition-colors duration-200 ease-editorial hover:text-fg"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-fg-muted transition-colors duration-200 ease-editorial hover:text-fg"
                  >
                    LinkedIn
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-faint">
            © {year} {siteConfig.name}. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-xs text-fg-faint">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
