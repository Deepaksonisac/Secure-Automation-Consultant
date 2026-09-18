const CLIENTS = [
  'Cairn India',
  'NPCIL',
  'Shree Cement',
  'Hindustan Zinc',
  'Taj Rambagh',
  'Hyatt',
  'RRVPNL',
  'Prayagraj Smart City',
  'SMS Hospital',
  'Allen Institute',
]

export function TrustMarquee() {
  return (
    <section className="border-y border-border bg-card/40 py-8" aria-label="Trusted by">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
        Trusted across India&apos;s most demanding facilities
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="sac-marquee flex w-max items-center gap-12 pr-12">
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-muted-foreground/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
