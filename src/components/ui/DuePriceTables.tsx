import { fanelloDue } from "@/content/site";
import { Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function DuePriceTables() {
  return (
    <div
      id="preise"
      className="scroll-mt-28 mt-16 border-t border-sand/70 pt-12 sm:pt-14 lg:mt-20 lg:pt-16"
    >
      <Reveal>
        <Eyebrow>Preisliste {fanelloDue.year}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-[1.75rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.05rem] lg:text-[2.35rem]">
          Schlafsystem Due.
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          Preise in CHF, Liegelänge 200 cm. Das Holzgestell ist nicht enthalten.
        </p>
      </Reveal>

      <div className="mt-10 space-y-12 lg:mt-12 lg:space-y-16">
        {fanelloDue.tables.map((table, index) => (
          <Reveal key={table.title} delay={index * 0.04}>
            <h3 className="font-serif text-[1.55rem] tracking-[-0.03em] sm:text-[1.85rem]">
              {table.title}
            </h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {table.caption}
            </p>
            <div className="-mx-5 mt-6 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <div className="min-w-[56rem] bg-ivory p-5 sm:p-7 lg:p-8">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-sand">
                      <th
                        scope="col"
                        className="sticky left-0 bg-ivory py-3 pr-5 text-[13px] font-medium text-ink"
                      >
                        Artikel
                      </th>
                      {table.columns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="label px-2.5 py-3 text-right text-bronze sm:px-3"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.label} className="border-b border-sand/70 last:border-b-0">
                        <th
                          scope="row"
                          className="sticky left-0 bg-ivory py-3.5 pr-5 text-[15px] font-medium text-ink sm:text-[16px]"
                        >
                          {row.label}
                        </th>
                        {row.values.map((value, i) => (
                          <td
                            key={`${row.label}-${table.columns[i]}`}
                            className="px-2.5 py-3.5 text-right font-serif text-[1.05rem] tabular-nums tracking-[-0.02em] text-ink sm:px-3 sm:text-[1.15rem]"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <ul className="mt-4 space-y-1.5">
              {table.footnotes.map((note) => (
                <li
                  key={note}
                  className="text-[13px] leading-relaxed text-muted sm:text-[14px]"
                >
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
