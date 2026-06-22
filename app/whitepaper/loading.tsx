export default function WhitepaperLoading() {
  return (
    <div className="relative min-h-screen pt-32 px-6">
      <div className="max-w-[820px] mx-auto">
        <div className="label text-aurora mb-4">Whitepaper</div>
        <div className="h-[64px] w-2/3 bg-rule/30 mb-12 animate-pulse" />
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-3 bg-rule/20 animate-pulse"
              style={{ width: `${85 - (i % 3) * 12}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
