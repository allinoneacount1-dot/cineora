import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase — Cineora",
  description:
    "A live interactive scene from the Cineora civilization — WebGL agents in motion, composing cinema in real time.",
  openGraph: {
    title: "Showcase — Cineora",
    description:
      "A live interactive scene from the Cineora civilization — agents in motion, composing cinema in real time.",
    type: "website",
  },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
