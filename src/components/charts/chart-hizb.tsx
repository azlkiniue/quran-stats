
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Source: https://en.wikipedia.org/wiki/Juz%27#Maqra%CA%BC
// Each Hizb is half of a Juz; the Quran has 60 Hizb (6236 ayahs total).
const chartData = [
  {"Name": "Hizb 1", "Verses": 81, "Range": "1:1-2:74"},
  {"Name": "Hizb 2", "Verses": 67, "Range": "2:75-2:141"},
  {"Name": "Hizb 3", "Verses": 61, "Range": "2:142-2:202"},
  {"Name": "Hizb 4", "Verses": 50, "Range": "2:203-2:252"},
  {"Name": "Hizb 5", "Verses": 48, "Range": "2:253-3:14"},
  {"Name": "Hizb 6", "Verses": 78, "Range": "3:15-3:92"},
  {"Name": "Hizb 7", "Verses": 78, "Range": "3:93-3:170"},
  {"Name": "Hizb 8", "Verses": 53, "Range": "3:171-4:23"},
  {"Name": "Hizb 9", "Verses": 64, "Range": "4:24-4:87"},
  {"Name": "Hizb 10", "Verses": 60, "Range": "4:88-4:147"},
  {"Name": "Hizb 11", "Verses": 55, "Range": "4:148-5:26"},
  {"Name": "Hizb 12", "Verses": 55, "Range": "5:27-5:81"},
  {"Name": "Hizb 13", "Verses": 74, "Range": "5:82-6:35"},
  {"Name": "Hizb 14", "Verses": 75, "Range": "6:36-6:110"},
  {"Name": "Hizb 15", "Verses": 55, "Range": "6:111-6:165"},
  {"Name": "Hizb 16", "Verses": 87, "Range": "7:1-7:87"},
  {"Name": "Hizb 17", "Verses": 83, "Range": "7:88-7:170"},
  {"Name": "Hizb 18", "Verses": 76, "Range": "7:171-8:40"},
  {"Name": "Hizb 19", "Verses": 68, "Range": "8:41-9:33"},
  {"Name": "Hizb 20", "Verses": 59, "Range": "9:34-9:92"},
  {"Name": "Hizb 21", "Verses": 62, "Range": "9:93-10:25"},
  {"Name": "Hizb 22", "Verses": 89, "Range": "10:26-11:5"},
  {"Name": "Hizb 23", "Verses": 78, "Range": "11:6-11:83"},
  {"Name": "Hizb 24", "Verses": 92, "Range": "11:84-12:52"},
  {"Name": "Hizb 25", "Verses": 77, "Range": "12:53-13:18"},
  {"Name": "Hizb 26", "Verses": 77, "Range": "13:19-14:52"},
  {"Name": "Hizb 27", "Verses": 149, "Range": "15:1-16:50"},
  {"Name": "Hizb 28", "Verses": 78, "Range": "16:51-16:128"},
  {"Name": "Hizb 29", "Verses": 98, "Range": "17:1-17:98"},
  {"Name": "Hizb 30", "Verses": 87, "Range": "17:99-18:74"},
  {"Name": "Hizb 31", "Verses": 134, "Range": "18:75-19:98"},
  {"Name": "Hizb 32", "Verses": 135, "Range": "20:1-20:135"},
  {"Name": "Hizb 33", "Verses": 112, "Range": "21:1-21:112"},
  {"Name": "Hizb 34", "Verses": 78, "Range": "22:1-22:78"},
  {"Name": "Hizb 35", "Verses": 138, "Range": "23:1-24:20"},
  {"Name": "Hizb 36", "Verses": 64, "Range": "24:21-25:20"},
  {"Name": "Hizb 37", "Verses": 167, "Range": "25:21-26:110"},
  {"Name": "Hizb 38", "Verses": 172, "Range": "26:111-27:55"},
  {"Name": "Hizb 39", "Verses": 88, "Range": "27:56-28:50"},
  {"Name": "Hizb 40", "Verses": 83, "Range": "28:51-29:45"},
  {"Name": "Hizb 41", "Verses": 105, "Range": "29:46-31:21"},
  {"Name": "Hizb 42", "Verses": 73, "Range": "31:22-33:30"},
  {"Name": "Hizb 43", "Verses": 66, "Range": "33:31-34:23"},
  {"Name": "Hizb 44", "Verses": 103, "Range": "34:24-36:27"},
  {"Name": "Hizb 45", "Verses": 200, "Range": "36:28-37:144"},
  {"Name": "Hizb 46", "Verses": 157, "Range": "37:145-39:31"},
  {"Name": "Hizb 47", "Verses": 84, "Range": "39:32-40:40"},
  {"Name": "Hizb 48", "Verses": 91, "Range": "40:41-41:46"},
  {"Name": "Hizb 49", "Verses": 84, "Range": "41:47-43:23"},
  {"Name": "Hizb 50", "Verses": 162, "Range": "43:24-45:37"},
  {"Name": "Hizb 51", "Verses": 90, "Range": "46:1-48:17"},
  {"Name": "Hizb 52", "Verses": 105, "Range": "48:18-51:30"},
  {"Name": "Hizb 53", "Verses": 196, "Range": "51:31-54:55"},
  {"Name": "Hizb 54", "Verses": 203, "Range": "55:1-57:29"},
  {"Name": "Hizb 55", "Verses": 73, "Range": "58:1-61:14"},
  {"Name": "Hizb 56", "Verses": 64, "Range": "62:1-66:12"},
  {"Name": "Hizb 57", "Verses": 206, "Range": "67:1-71:28"},
  {"Name": "Hizb 58", "Verses": 225, "Range": "72:1-77:50"},
  {"Name": "Hizb 59", "Verses": 276, "Range": "78:1-86:17"},
  {"Name": "Hizb 60", "Verses": 288, "Range": "87:1-114:6"}
];

const chartConfig = {
  ayah: {
    label: "Ayah",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export default function ChartHizb() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="Name" axisLine={false} />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={(value, payload) => {
                const range = payload?.[0]?.payload?.Range
                return range ? `${value} (${range})` : value
              }}
            />
          }
        />
        <Bar dataKey="Verses" fill="var(--color-ayah)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
