import * as React from "react"

// Recreation of the Wikipedia "Distribution of Surahs by Juz'" chart
// (File:ColorArabic.png on https://en.wikipedia.org/wiki/Juz%27), made
// interactive. Each Juz is a 100% horizontal bar split into segments, one per
// Surah present in that Juz; a segment's width is the share of the Juz that
// Surah occupies (measured in verses). A Surah keeps the same colour across the
// Juz it spans, so multi-Juz Surahs (e.g. Al-Baqarah over Juz 1-3) read as one.

// Transliterated Surah names, index 0 => Surah 1.
const SURAH_NAMES = [
  "Al-Fatiha", "Al-Baqarah", "Aal-i-Imraan", "An-Nisa", "Al-Ma'idah",
  "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus",
  "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr",
  "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Taa-Haa",
  "Al-Anbiya", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan",
  "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-'Ankabut", "Ar-Rum",
  "Luqman", "As-Sajdah", "Al-Ahzab", "Saba", "Fatir",
  "Yaseen", "As-Saffat", "Saad", "Az-Zumar", "Ghafir",
  "Fussilat", "Ash-Shura", "Al-Zukhruf", "Ad-Dukhan", "Al-Jathiyah",
  "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf",
  "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman",
  "Al-Waqi'ah", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahanah",
  "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "Al-Talaq",
  "Al-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij",
  "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Mudaththir", "Al-Qiyamah",
  "Al-Insan", "Al-Mursalat", "An-Naba", "An-Naziat", "Abasa",
  "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj",
  "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad",
  "Al-Shams", "Al-Layl", "Ad-Duha", "Al-Inshirah", "At-Tin",
  "Al-'Alaq", "Al-Qadr", "Al-Bayyina", "Al-Zalzalah", "Al-'Adiyat",
  "Al-Qaria", "Al-Takathur", "Al-Asr", "Al-Humazah", "Al-Fil",
  "Al-Quraysh", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "Al-Nasr",
  "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas",
]

// Verse counts per Surah (Hafs), index 0 => Surah 1. Totals 6236.
const SURAH_VERSES = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109,
  123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60,
  34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45,
  60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44,
  28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3,
  5, 4, 5, 6,
]

// Starting verse [surah, ayah] of each Juz. Consistent with the Hizb data
// elsewhere in the app (Juz N begins where Hizb 2N-1 begins).
const JUZ_STARTS: [number, number][] = [
  [1, 1], [2, 142], [2, 253], [3, 93], [4, 24],
  [4, 148], [5, 82], [6, 111], [7, 88], [8, 41],
  [9, 93], [11, 6], [12, 53], [15, 1], [17, 1],
  [18, 75], [21, 1], [23, 1], [25, 21], [27, 56],
  [29, 46], [33, 31], [36, 28], [39, 32], [41, 47],
  [46, 1], [51, 31], [58, 1], [67, 1], [78, 1],
]

type Segment = { surah: number; verses: number; pct: number }
type JuzRow = { juz: number; total: number; segments: Segment[] }

// The last verse of a Juz is the verse just before the next Juz begins.
function endOfJuz(i: number): [number, number] {
  if (i === JUZ_STARTS.length - 1) return [114, SURAH_VERSES[113]]
  const [ns, na] = JUZ_STARTS[i + 1]
  if (na > 1) return [ns, na - 1]
  return [ns - 1, SURAH_VERSES[ns - 2]]
}

function buildDistribution(): JuzRow[] {
  return JUZ_STARTS.map(([ss, sa], i) => {
    const [es, ea] = endOfJuz(i)
    const raw: Array<[number, number]> = []
    if (ss === es) {
      raw.push([ss, ea - sa + 1])
    } else {
      raw.push([ss, SURAH_VERSES[ss - 1] - sa + 1])
      for (let s = ss + 1; s < es; s++) raw.push([s, SURAH_VERSES[s - 1]])
      raw.push([es, ea])
    }
    const total = raw.reduce((acc, [, v]) => acc + v, 0)
    return {
      juz: i + 1,
      total,
      segments: raw.map(([surah, verses]) => ({
        surah,
        verses,
        pct: (verses / total) * 100,
      })),
    }
  })
}

const DISTRIBUTION = buildDistribution()

// Shades of green matching the app palette, ordered so consecutive Surahs land
// on clearly different shades. A Surah always maps to the same colour.
const GREENS = [
  "hsl(142 71% 30%)",
  "hsl(141 60% 58%)",
  "hsl(140 78% 38%)",
  "hsl(142 45% 66%)",
  "hsl(141 80% 34%)",
  "hsl(140 55% 62%)",
  "hsl(142 64% 44%)",
  "hsl(141 48% 70%)",
  "hsl(140 70% 50%)",
]

const colorFor = (surah: number) => GREENS[(surah - 1) % GREENS.length]

type Tip = {
  x: number
  y: number
  juz: number
  surah: number
  verses: number
  pct: number
}

export default function ChartSurahDistribution() {
  const [hoverSurah, setHoverSurah] = React.useState<number | null>(null)
  const [tip, setTip] = React.useState<Tip | null>(null)

  return (
    <div className="w-full text-xs" onMouseLeave={() => setTip(null)}>
      <div className="flex flex-col gap-1">
        {DISTRIBUTION.map((row) => (
          <div key={row.juz} className="flex items-center gap-2">
            <span className="w-14 shrink-0 text-right tabular-nums text-muted-foreground">
              Juz {row.juz}
            </span>
            <div className="flex h-6 w-full overflow-hidden rounded">
              {row.segments.map((seg, idx) => {
                const active = hoverSurah === null || hoverSurah === seg.surah
                return (
                  <button
                    key={`${seg.surah}-${idx}`}
                    type="button"
                    aria-label={`Juz ${row.juz}, Surah ${seg.surah} ${
                      SURAH_NAMES[seg.surah - 1]
                    }, ${seg.verses} verses`}
                    className="h-full border-r border-card/70 transition-opacity last:border-r-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{
                      flexGrow: seg.verses,
                      flexBasis: 0,
                      minWidth: 0,
                      backgroundColor: colorFor(seg.surah),
                      opacity: active ? 1 : 0.25,
                    }}
                    onMouseEnter={(e) => {
                      setHoverSurah(seg.surah)
                      setTip({
                        x: e.clientX,
                        y: e.clientY,
                        juz: row.juz,
                        surah: seg.surah,
                        verses: seg.verses,
                        pct: seg.pct,
                      })
                    }}
                    onMouseMove={(e) =>
                      setTip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : t))
                    }
                    onMouseLeave={() => setHoverSurah(null)}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-muted-foreground">
        Each bar is one Juz at full width; a segment&apos;s width is the share of
        that Juz taken by a Surah. Hover to highlight a Surah across every Juz it
        spans.
      </p>

      {tip && (
        <div
          className="pointer-events-none fixed z-50 rounded-md border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl"
          style={{ left: tip.x + 12, top: tip.y + 12 }}
        >
          <div className="font-medium">Juz {tip.juz}</div>
          <div className="mt-1 flex items-center gap-2">
            <span
              className="size-2.5 shrink-0 rounded-[2px]"
              style={{ backgroundColor: colorFor(tip.surah) }}
            />
            <span className="text-muted-foreground">
              {tip.surah}. {SURAH_NAMES[tip.surah - 1]}
            </span>
          </div>
          <div className="mt-1 font-mono tabular-nums">
            {tip.verses} verses · {tip.pct.toFixed(1)}% of Juz
          </div>
        </div>
      )}
    </div>
  )
}
