export function AmbientField({ tone = "warm" }: { tone?: "warm" | "dark" }) {
  const a =
    tone === "dark"
      ? "bg-[radial-gradient(circle,rgba(232,196,150,0.22),transparent_62%)]"
      : "bg-[radial-gradient(circle,rgba(166,124,82,0.32),transparent_64%)]";
  const b =
    tone === "dark"
      ? "bg-[radial-gradient(circle,rgba(239,224,200,0.14),transparent_60%)]"
      : "bg-[radial-gradient(circle,rgba(239,224,200,0.85),transparent_60%)]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className={`orb orb-a ${a}`} />
      <div className={`orb orb-b ${b}`} />
    </div>
  );
}
