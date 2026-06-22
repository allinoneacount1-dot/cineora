export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border border-rule" />
          <div className="absolute inset-0 rounded-full border-t border-aurora animate-spin" />
        </div>
        <p className="label text-text-faint">Loading…</p>
      </div>
    </div>
  );
}
