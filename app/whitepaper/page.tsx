import { promises as fs } from "fs";
import path from "path";
import { WhitepaperRenderer } from "@/components/whitepaper/WhitepaperRenderer";

export const metadata = {
  title: "Whitepaper — Cineora",
  description:
    "The institutional-grade whitepaper for Cineora, the Living Cinematic Civilization Protocol.",
};

async function loadSections() {
  const dir = path.join(process.cwd(), "whitepaper", "content");
  const files = (await fs.readdir(dir))
    .filter((f) => f.endsWith(".md"))
    .sort();

  const indexRaw = await fs.readFile(path.join(dir, "index.json"), "utf-8");
  const indexData = JSON.parse(indexRaw);

  const sections = await Promise.all(
    files
      .filter((f) => f !== "index.json")
      .map(async (filename) => {
        const content = await fs.readFile(path.join(dir, filename), "utf-8");
        const meta = indexData.whitepaper.sections.find(
          (s: { filename: string }) => s.filename === filename
        );
        return {
          filename,
          slug: meta?.slug || filename.replace(".md", ""),
          title: meta?.title || filename,
          wordCount: meta?.wordCount || 0,
          content,
        };
      })
  );

  return {
    title: indexData.whitepaper.name,
    subtitle: indexData.whitepaper.subtitle,
    version: indexData.whitepaper.version,
    published: indexData.whitepaper.published,
    sections,
  };
}

export default async function WhitepaperPage() {
  const data = await loadSections();
  return <WhitepaperRenderer data={data} />;
}