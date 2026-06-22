"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Section = {
  filename: string;
  slug: string;
  title: string;
  wordCount: number;
  content: string;
};

type Data = {
  title: string;
  subtitle: string;
  version: string;
  published: string;
  sections: Section[];
};

export function WhitepaperRenderer({ data }: { data: Data }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen pt-[68px]">
      {/* Background aurora glow (subtle) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,245,255,0.06), transparent 60%), radial-gradient(ellipse at bottom, rgba(155,77,255,0.04), transparent 60%)",
        }}
      />

      <div className="relative z-10 shell py-[clamp(80px,12vh,140px)]">
        {/* Cover */}
        <header className="max-w-[820px] mb-[clamp(64px,10vh,120px)]">
          <div className="label text-aurora mb-6 flex items-center gap-3">
            <span className="block w-8 h-px bg-aurora" />
            <span>Whitepaper · v{data.version}</span>
          </div>
          <h1 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.95] text-text">
            {data.title}
          </h1>
          <p className="mt-6 text-text-muted text-[18px] md:text-[20px] leading-[1.55] max-w-[60ch] font-light">
            {data.subtitle}.
          </p>
          <div className="mt-10 flex items-center gap-6 flex-wrap">
            <span className="label text-text-faint">
              Published {data.published}
            </span>
            <span className="text-text-faint">·</span>
            <span className="label text-text-faint">
              {data.sections.length} sections ·{" "}
              {data.sections.reduce((a, s) => a + s.wordCount, 0).toLocaleString()}{" "}
              words
            </span>
          </div>
        </header>

        {/* TOC */}
        <nav className="max-w-[820px] mb-[clamp(64px,10vh,120px)] border-l border-rule pl-6">
          <div className="label text-text-faint mb-4">Contents</div>
          <ol className="space-y-2">
            {data.sections.map((s, i) => (
              <li key={s.filename}>
                <a
                  href={`#${s.slug}`}
                  onClick={() => setActiveSlug(s.slug)}
                  className={`text-[14px] transition-colors duration-300 ${
                    activeSlug === s.slug
                      ? "text-aurora"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  <span className="text-text-faint mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title.replace(/^\d+\.\s+/, "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <article className="max-w-[820px] prose-cineora">
          {data.sections.map((s) => (
            <section
              key={s.filename}
              id={s.slug}
              className="mb-[clamp(80px,12vh,140px)] scroll-mt-24"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="font-display headline-section text-text mb-8 mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="font-display text-[clamp(24px,3.5vw,42px)] text-text mt-16 mb-5 leading-[1.15]">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-display text-[clamp(18px,2.4vw,26px)] text-text mt-10 mb-4">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-text-muted text-[16px] md:text-[17px] leading-[1.75] mb-5 font-light">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-text font-medium">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="text-aurora not-italic">{children}</em>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 my-6 ml-0 list-none">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-2 my-6 ml-0 list-none counter-reset-cineora">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-text-muted text-[16px] leading-[1.7] font-light pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-text-faint">
                      {children}
                    </li>
                  ),
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-aurora hover:text-text underline-offset-4 hover:underline transition-colors"
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-aurora pl-6 my-6 italic text-text">
                      {children}
                    </blockquote>
                  ),
                  hr: () => <div className="hairline my-12 max-w-[400px]" />,
                  code: ({ children }) => (
                    <code className="font-mono text-[14px] text-aurora bg-[rgba(0,245,255,0.06)] px-1.5 py-0.5">
                      {children}
                    </code>
                  ),
                }}
              >
                {s.content}
              </ReactMarkdown>
            </section>
          ))}
        </article>

        {/* Footer notice */}
        <footer className="max-w-[820px] mt-[clamp(80px,12vh,140px)] pt-12 border-t border-rule">
          <div className="label text-text-faint">
            © 2026 Cineora Foundation. Whitepaper v{data.version} · {data.published}
          </div>
        </footer>
      </div>
    </main>
  );
}