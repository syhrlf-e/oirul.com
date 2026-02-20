export default function Process() {
  return (
    <section
      className="border-b border-border-light bg-background"
      id="process"
    >
      <div className="max-w-[1600px] mx-auto border-x border-border-light">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="p-6 md:p-8 lg:p-12 border-r border-border-light hover:bg-white/5 transition-colors">
            <span className="block text-xs font-mono text-primary mb-2 md:mb-4">
              [01]
            </span>
            <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">
              Konsultasi
            </h4>
            <p className="text-xs md:text-sm text-text-muted">
              Diskusi visi bisnis.
            </p>
          </div>
          <div className="p-6 md:p-8 lg:p-12 md:border-r border-border-light hover:bg-white/5 transition-colors">
            <span className="block text-xs font-mono text-primary mb-2 md:mb-4">
              [02]
            </span>
            <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">
              Desain
            </h4>
            <p className="text-xs md:text-sm text-text-muted">
              Perancangan UI/UX modern.
            </p>
          </div>
          <div className="p-6 md:p-8 lg:p-12 border-t md:border-t-0 border-r border-border-light hover:bg-white/5 transition-colors">
            <span className="block text-xs font-mono text-primary mb-2 md:mb-4">
              [03]
            </span>
            <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">
              Develop
            </h4>
            <p className="text-xs md:text-sm text-text-muted">
              Coding performa tinggi.
            </p>
          </div>
          <div className="p-6 md:p-8 lg:p-12 border-t md:border-t-0 bg-transparent hover:bg-white/10 transition-colors">
            <span className="block text-xs font-mono text-primary mb-2 md:mb-4">
              [04]
            </span>
            <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">
              Launch
            </h4>
            <p className="text-xs md:text-sm text-text-muted">
              Siap online dunia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
