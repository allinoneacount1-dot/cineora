import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Cineora",
  description:
    "The terms governing access to and use of the Cineora site, whitepaper, and protocol interfaces.",
};

export default function TermsPage() {
  return (
    <main className="relative pt-32 pb-24 px-6">
      <article className="max-w-[760px] mx-auto">
        <p className="label text-aurora mb-4">Legal</p>
        <h1 className="font-display text-[clamp(40px,6vw,64px)] leading-[1.05] text-text mb-8">
          Terms of Service
        </h1>
        <p className="text-text-faint text-[12px] mb-12">
          Last updated: June 22, 2026
        </p>

        <div className="prose-cineora space-y-8 text-text-muted text-[15px] leading-[1.8]">
          <Section title="1. Acceptance">
            <p>
              By accessing cineora-mocha.vercel.app or any sub-route (the
              &ldquo;Site&rdquo;), you agree to these Terms. If you do not agree, do
              not use the Site.
            </p>
          </Section>

          <Section title="2. The Site is informational">
            <p>
              The Site presents a creative and protocol vision for a living
              cinematic civilization. It does not offer securities, financial
              instruments, investment products, or yield-bearing assets. Nothing
              on the Site constitutes financial, legal, or investment advice.
            </p>
            <p>
              Any future token or protocol utility described in the whitepaper is
              a design proposal. Implementation, distribution, and availability
              are subject to change, regulatory review, and may not occur in any
              jurisdiction.
            </p>
          </Section>

          <Section title="3. Wallet connection">
            <p>
              The wallet connection feature uses third-party wallet software
              (MetaMask, Coinbase Wallet, Rabby, and similar) over the public
              Ethereum and Base networks. Cineora never custodies your funds,
              never has access to your private keys, and cannot reverse
              on-chain transactions.
            </p>
            <p>
              You are solely responsible for the security of your wallet, seed
              phrase, and connected addresses. Verify every transaction before
              signing.
            </p>
          </Section>

          <Section title="4. Intellectual property">
            <p>
              All content on the Site — including the Cineora name, visual
              identity, whitepaper text, agent system descriptions, and code in
              this repository — is the property of the Cineora project and its
              contributors, unless otherwise noted.
            </p>
            <p>
              You may quote, link, and reference the Site for non-commercial
              purposes with attribution.
            </p>
          </Section>

          <Section title="5. No warranties">
            <p>
              The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, express or implied. We do not warrant
              that the Site will be uninterrupted, error-free, or free of
              harmful components.
            </p>
          </Section>

          <Section title="6. Limitation of liability">
            <p>
              To the maximum extent permitted by law, the Cineora project and
              its contributors shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of the Site.
            </p>
          </Section>

          <Section title="7. Changes">
            <p>
              We may update these Terms at any time. Continued use of the Site
              after changes constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="8. Contact">
            <p>
              Questions? Reach the project at{" "}
              .
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-[24px] text-text mb-4">{title}</h2>
      {children}
    </section>
  );
}
