
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// https://adilonfaith.blogspot.com/2013/03/number-of-ayahs-in-each-juz.html
// https://quran411.com/juz-breakdown
const chartData = [
  { "Name": "Juz 1", "Verses": 148, "Chapters": 2 },
  { "Name": "Juz 2", "Verses": 111, "Chapters": 1 },
  { "Name": "Juz 3", "Verses": 126, "Chapters": 2 },
  { "Name": "Juz 4", "Verses": 131, "Chapters": 2 },
  { "Name": "Juz 5", "Verses": 124, "Chapters": 1 },
  { "Name": "Juz 6", "Verses": 110, "Chapters": 2 },
  { "Name": "Juz 7", "Verses": 149, "Chapters": 2 },
  { "Name": "Juz 8", "Verses": 142, "Chapters": 2 },
  { "Name": "Juz 9", "Verses": 159, "Chapters": 2 },
  { "Name": "Juz 10", "Verses": 127, "Chapters": 2 },
  { "Name": "Juz 11", "Verses": 151, "Chapters": 3 },
  { "Name": "Juz 12", "Verses": 170, "Chapters": 2 },
  { "Name": "Juz 13", "Verses": 154, "Chapters": 3 },
  { "Name": "Juz 14", "Verses": 227, "Chapters": 2 },
  { "Name": "Juz 15", "Verses": 185, "Chapters": 2 },
  { "Name": "Juz 16", "Verses": 269, "Chapters": 3 },
  { "Name": "Juz 17", "Verses": 190, "Chapters": 2 },
  { "Name": "Juz 18", "Verses": 202, "Chapters": 3 },
  { "Name": "Juz 19", "Verses": 339, "Chapters": 3 },
  { "Name": "Juz 20", "Verses": 171, "Chapters": 3 },
  { "Name": "Juz 21", "Verses": 178, "Chapters": 5 },
  { "Name": "Juz 22", "Verses": 169, "Chapters": 4 },
  { "Name": "Juz 23", "Verses": 357, "Chapters": 4 },
  { "Name": "Juz 24", "Verses": 175, "Chapters": 3 },
  { "Name": "Juz 25", "Verses": 246, "Chapters": 5 },
  { "Name": "Juz 26", "Verses": 195, "Chapters": 6 },
  { "Name": "Juz 27", "Verses": 399, "Chapters": 7 },
  { "Name": "Juz 28", "Verses": 137, "Chapters": 9 },
  { "Name": "Juz 29", "Verses": 431, "Chapters": 11 },
  { "Name": "Juz 30", "Verses": 564, "Chapters": 37 }
];

const chartConfig = {
  ayah: {
    label: "Ayah",
    color: "hsl(var(--chart-1))",
  },
  surah: {
    label: "Surah",
    color: "hsl(var(--chart-2))",
  }
} satisfies ChartConfig

export default function ChartJuz() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="Name" axisLine={false} />
        <YAxis yAxisId="ayah" orientation="left" />
        <YAxis yAxisId="surah" orientation="right" />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar yAxisId="ayah" dataKey="Verses" fill="var(--color-ayah)" radius={4} />
        <Bar yAxisId="surah" dataKey="Chapters" fill="var(--color-surah)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
