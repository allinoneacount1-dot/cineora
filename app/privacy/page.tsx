import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cineora",
  description:
    "How Cineora handles — and deliberately does not handle — your data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative pt-32 pb-24 px-6">
      <article className="max-w-[760px] mx-auto">
        <p className="label text-aurora mb-4">Legal</p>
        <h1 className="font-display text-[clamp(40px,6vw,64px)] leading-[1.05] text-text mb-8">
          Privacy Policy
        </h1>
        <p className="text-text-faint text-[12px] mb-12">
          Last updated: June 22, 2026
        </p>

        <div className="prose-cineora space-y-8 text-text-muted text-[15px] leading-[1.8]">
          <Section title="The short version">
            <p>
              We collect almost nothing. The Site does not use tracking
              cookies, advertising pixels, or third-party analytics. Wallet
              connection happens client-side; your address is never sent to our
              servers unless you explicitly submit a form.
            </p>
          </Section>

          <Section title="1. What we collect">
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-text">Nothing by default.</strong>{" "}
                Browsing the Site generates standard server logs (IP, user
                agent, request path) that are retained briefly for abuse
                prevention and then discarded.
              </li>
              <li>
                <strong className="text-text">Waitlist submissions.</strong> If
                you choose to join the waitlist, we receive the email address
                you submit and a timestamp. That&apos;s it.
              </li>
              <li>
                <strong className="text-text">Wallet data.</strong> When you
                connect a wallet, the connection is established between your
                browser and your wallet provider (MetaMask, Coinbase, etc.).
                Cineora receives your public wallet address only if and when
                you sign a transaction or message initiated by the Site.
              </li>
            </ul>
          </Section>

          <Section title="2. What we do NOT collect">
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>No behavioral or browsing analytics</li>
              <li>No advertising identifiers or retargeting data</li>
              <li>No biometric, location, or device fingerprinting</li>
              <li>No private keys, seed phrases, or signing payloads</li>
            </ul>
          </Section>

          <Section title="3. Third parties">
            <p>
              The Site embeds content from and routes requests through
              third-party infrastructure:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-text">Vercel</strong> — hosting and
                edge delivery. See{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aurora hover:underline"
                >
                  Vercel&apos;s privacy policy
                </a>
                .
              </li>
              <li>
                <strong className="text-text">Public RPC providers</strong> —
                balance and chain queries are routed through public RPC
                endpoints. These requests are visible to RPC operators.
              </li>
              <li>
                <strong className="text-text">Wallet providers</strong> — your
                wallet extension or app is governed by its own privacy policy.
              </li>
            </ul>
          </Section>

          <Section title="4. Data retention">
            <p>
              Waitlist emails are retained until you ask us to delete them or
              the project is wound down. Server logs are retained for a maximum
              of 30 days.
            </p>
          </Section>

          <Section title="5. Your rights">
            <p>
              You can request export or deletion of any data we hold about you
              through the project&apos;s official channels once they are
              publicly listed. We respond within 30 days.
            </p>
          </Section>

          <Section title="6. Changes">
            <p>
              If we change this policy in a material way, we will note the
              change at the top of this page and update the effective date.
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
