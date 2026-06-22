export default function DemoLoading() {
  return (
    <div className="relative min-h-screen pt-32 px-6 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center max-w-[480px]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border border-rule" />
          <div className="absolute inset-0 rounded-full border-t border-aurora animate-spin" />
          <div className="absolute inset-2 rounded-full border border-ethereal-purple/30 animate-pulse" />
        </div>
        <div>
          <p className="label text-aurora mb-3">Initializing the scene</p>
          <p className="text-text-muted text-[14px] leading-[1.6]">
            Compiling shaders, loading the world, summoning 16 agents into orbit.
          </p>
        </div>
      </div>
    </div>
  );
}
