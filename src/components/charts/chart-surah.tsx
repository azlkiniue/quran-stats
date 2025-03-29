
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// https://qurananalysis.com/analysis/basic-statistics.php
const chartData = [
  {
    "Chapter": "1. The Opening",
    "Verses": 7,
    "Words": 74,
    "Chars": 314
  },
  {
    "Chapter": "2. The Cow",
    "Verses": 286,
    "Words": 12316,
    "Chars": 52639
  },
  {
    "Chapter": "3. The Family of Imraan",
    "Verses": 200,
    "Words": 7080,
    "Chars": 30276
  },
  {
    "Chapter": "4. The Women",
    "Verses": 176,
    "Words": 7347,
    "Chars": 31845
  },
  {
    "Chapter": "5. The Table",
    "Verses": 120,
    "Words": 5598,
    "Chars": 23932
  },
  {
    "Chapter": "6. The Cattle",
    "Verses": 165,
    "Words": 6226,
    "Chars": 26109
  },
  {
    "Chapter": "7. The Heights",
    "Verses": 206,
    "Words": 6796,
    "Chars": 28550
  },
  {
    "Chapter": "8. The Spoils of War",
    "Verses": 75,
    "Words": 2525,
    "Chars": 10834
  },
  {
    "Chapter": "9. The Repentance",
    "Verses": 129,
    "Words": 5169,
    "Chars": 22679
  },
  {
    "Chapter": "10. Jonas",
    "Verses": 109,
    "Words": 3588,
    "Chars": 14947
  },
  {
    "Chapter": "11. Hud",
    "Verses": 123,
    "Words": 3930,
    "Chars": 16168
  },
  {
    "Chapter": "12. Joseph",
    "Verses": 111,
    "Words": 3566,
    "Chars": 14512
  },
  {
    "Chapter": "13. The Thunder",
    "Verses": 43,
    "Words": 1701,
    "Chars": 7360
  },
  {
    "Chapter": "14. Abraham",
    "Verses": 52,
    "Words": 1649,
    "Chars": 7050
  },
  {
    "Chapter": "15. The Rock",
    "Verses": 99,
    "Words": 1389,
    "Chars": 5896
  },
  {
    "Chapter": "16. The Bee",
    "Verses": 128,
    "Words": 3757,
    "Chars": 15908
  },
  {
    "Chapter": "17. The Night Journey",
    "Verses": 111,
    "Words": 3223,
    "Chars": 13549
  },
  {
    "Chapter": "18. The Cave",
    "Verses": 110,
    "Words": 3350,
    "Chars": 13823
  },
  {
    "Chapter": "19. Mary",
    "Verses": 98,
    "Words": 2036,
    "Chars": 8188
  },
  {
    "Chapter": "20. Taa-Haa",
    "Verses": 135,
    "Words": 2830,
    "Chars": 11608
  },
  {
    "Chapter": "21. The Prophets",
    "Verses": 112,
    "Words": 2437,
    "Chars": 10109
  },
  {
    "Chapter": "22. The Pilgrimage",
    "Verses": 78,
    "Words": 2537,
    "Chars": 10938
  },
  {
    "Chapter": "23. The Believers",
    "Verses": 118,
    "Words": 2116,
    "Chars": 8871
  },
  {
    "Chapter": "24. The Light",
    "Verses": 64,
    "Words": 2611,
    "Chars": 11316
  },
  {
    "Chapter": "25. The Criterion",
    "Verses": 77,
    "Words": 1846,
    "Chars": 7811
  },
  {
    "Chapter": "26. The Poets",
    "Verses": 227,
    "Words": 2710,
    "Chars": 10938
  },
  {
    "Chapter": "27. The Ant",
    "Verses": 93,
    "Words": 2352,
    "Chars": 9712
  },
  {
    "Chapter": "28. The Stories",
    "Verses": 88,
    "Words": 2900,
    "Chars": 11817
  },
  {
    "Chapter": "29. The Spider",
    "Verses": 69,
    "Words": 1969,
    "Chars": 8353
  },
  {
    "Chapter": "30. The Romans",
    "Verses": 60,
    "Words": 1636,
    "Chars": 7003
  },
  {
    "Chapter": "31. Luqman",
    "Verses": 34,
    "Words": 1038,
    "Chars": 4415
  },
  {
    "Chapter": "32. The Prostration",
    "Verses": 30,
    "Words": 745,
    "Chars": 3153
  },
  {
    "Chapter": "33. The Clans",
    "Verses": 73,
    "Words": 2594,
    "Chars": 11343
  },
  {
    "Chapter": "34. Sheba",
    "Verses": 54,
    "Words": 1741,
    "Chars": 7287
  },
  {
    "Chapter": "35. The Originator",
    "Verses": 45,
    "Words": 1519,
    "Chars": 6492
  },
  {
    "Chapter": "36. Yaseen",
    "Verses": 83,
    "Words": 1498,
    "Chars": 6040
  },
  {
    "Chapter": "37. Those drawn up in Ranks",
    "Verses": 182,
    "Words": 1881,
    "Chars": 7896
  },
  {
    "Chapter": "38. The letter Saad",
    "Verses": 88,
    "Words": 1553,
    "Chars": 6600
  },
  {
    "Chapter": "39. The Groups",
    "Verses": 75,
    "Words": 2319,
    "Chars": 9831
  },
  {
    "Chapter": "40. The Forgiver",
    "Verses": 85,
    "Words": 2449,
    "Chars": 10388
  },
  {
    "Chapter": "41. Explained in detail",
    "Verses": 54,
    "Words": 1648,
    "Chars": 6929
  },
  {
    "Chapter": "42. Consultation",
    "Verses": 53,
    "Words": 1682,
    "Chars": 7227
  },
  {
    "Chapter": "43. Ornaments of gold",
    "Verses": 89,
    "Words": 1785,
    "Chars": 7486
  },
  {
    "Chapter": "44. The Smoke",
    "Verses": 59,
    "Words": 710,
    "Chars": 3023
  },
  {
    "Chapter": "45. Crouching",
    "Verses": 37,
    "Words": 999,
    "Chars": 4167
  },
  {
    "Chapter": "46. The Dunes",
    "Verses": 35,
    "Words": 1311,
    "Chars": 5561
  },
  {
    "Chapter": "47. Muhammad",
    "Verses": 38,
    "Words": 1099,
    "Chars": 4853
  },
  {
    "Chapter": "48. The Victory",
    "Verses": 29,
    "Words": 1169,
    "Chars": 5157
  },
  {
    "Chapter": "49. The Inner Apartments",
    "Verses": 18,
    "Words": 663,
    "Chars": 2889
  },
  {
    "Chapter": "50. The letter Qaaf",
    "Verses": 45,
    "Words": 762,
    "Chars": 3150
  },
  {
    "Chapter": "51. The Winnowing Winds",
    "Verses": 60,
    "Words": 753,
    "Chars": 3182
  },
  {
    "Chapter": "52. The Mount",
    "Verses": 49,
    "Words": 680,
    "Chars": 2852
  },
  {
    "Chapter": "53. The Star",
    "Verses": 62,
    "Words": 738,
    "Chars": 3072
  },
  {
    "Chapter": "54. The Moon",
    "Verses": 55,
    "Words": 723,
    "Chars": 3155
  },
  {
    "Chapter": "55. The Beneficent",
    "Verses": 78,
    "Words": 815,
    "Chars": 3278
  },
  {
    "Chapter": "56. The Inevitable",
    "Verses": 96,
    "Words": 849,
    "Chars": 3538
  },
  {
    "Chapter": "57. The Iron",
    "Verses": 29,
    "Words": 1188,
    "Chars": 5139
  },
  {
    "Chapter": "58. The Pleading Woman",
    "Verses": 22,
    "Words": 920,
    "Chars": 4111
  },
  {
    "Chapter": "59. The Exile",
    "Verses": 24,
    "Words": 897,
    "Chars": 3971
  },
  {
    "Chapter": "60. She that is to be examined",
    "Verses": 13,
    "Words": 715,
    "Chars": 3129
  },
  {
    "Chapter": "61. The Ranks",
    "Verses": 14,
    "Words": 425,
    "Chars": 1828
  },
  {
    "Chapter": "62. Friday",
    "Verses": 11,
    "Words": 341,
    "Chars": 1406
  },
  {
    "Chapter": "63. The Hypocrites",
    "Verses": 11,
    "Words": 367,
    "Chars": 1558
  },
  {
    "Chapter": "64. Mutual Disillusion",
    "Verses": 18,
    "Words": 503,
    "Chars": 2182
  },
  {
    "Chapter": "65. Divorce",
    "Verses": 12,
    "Words": 562,
    "Chars": 2511
  },
  {
    "Chapter": "66. The Prohibition",
    "Verses": 12,
    "Words": 478,
    "Chars": 2115
  },
  {
    "Chapter": "67. The Sovereignty",
    "Verses": 30,
    "Words": 659,
    "Chars": 2707
  },
  {
    "Chapter": "68. The Pen",
    "Verses": 52,
    "Words": 650,
    "Chars": 2760
  },
  {
    "Chapter": "69. The Reality",
    "Verses": 52,
    "Words": 575,
    "Chars": 2318
  },
  {
    "Chapter": "70. The Ascending Stairways",
    "Verses": 44,
    "Words": 448,
    "Chars": 1945
  },
  {
    "Chapter": "71. Noah",
    "Verses": 28,
    "Words": 430,
    "Chars": 1900
  },
  {
    "Chapter": "72. The Jinn",
    "Verses": 28,
    "Words": 573,
    "Chars": 2424
  },
  {
    "Chapter": "73. The Enshrouded One",
    "Verses": 20,
    "Words": 422,
    "Chars": 1750
  },
  {
    "Chapter": "74. The Cloaked One",
    "Verses": 56,
    "Words": 526,
    "Chars": 2274
  },
  {
    "Chapter": "75. The Resurrection",
    "Verses": 40,
    "Words": 353,
    "Chars": 1445
  },
  {
    "Chapter": "76. Man",
    "Verses": 31,
    "Words": 520,
    "Chars": 2252
  },
  {
    "Chapter": "77. The Emissaries",
    "Verses": 50,
    "Words": 402,
    "Chars": 1653
  },
  {
    "Chapter": "78. The Announcement",
    "Verses": 40,
    "Words": 374,
    "Chars": 1618
  },
  {
    "Chapter": "79. Those who drag forth",
    "Verses": 46,
    "Words": 418,
    "Chars": 1783
  },
  {
    "Chapter": "80. He frowned",
    "Verses": 42,
    "Words": 306,
    "Chars": 1329
  },
  {
    "Chapter": "81. The Overthrowing",
    "Verses": 29,
    "Words": 243,
    "Chars": 1005
  },
  {
    "Chapter": "82. The Cleaving",
    "Verses": 19,
    "Words": 171,
    "Chars": 730
  },
  {
    "Chapter": "83. Defrauding",
    "Verses": 36,
    "Words": 350,
    "Chars": 1520
  },
  {
    "Chapter": "84. The Splitting Open",
    "Verses": 25,
    "Words": 243,
    "Chars": 993
  },
  {
    "Chapter": "85. The Constellations",
    "Verses": 22,
    "Words": 211,
    "Chars": 995
  },
  {
    "Chapter": "86. The Morning Star",
    "Verses": 17,
    "Words": 132,
    "Chars": 523
  },
  {
    "Chapter": "87. The Most High",
    "Verses": 19,
    "Words": 144,
    "Chars": 638
  },
  {
    "Chapter": "88. The Overwhelming",
    "Verses": 26,
    "Words": 191,
    "Chars": 835
  },
  {
    "Chapter": "89. The Dawn",
    "Verses": 30,
    "Words": 293,
    "Chars": 1211
  },
  {
    "Chapter": "90. The City",
    "Verses": 20,
    "Words": 177,
    "Chars": 727
  },
  {
    "Chapter": "91. The Sun",
    "Verses": 15,
    "Words": 157,
    "Chars": 655
  },
  {
    "Chapter": "92. The Night",
    "Verses": 21,
    "Words": 172,
    "Chars": 703
  },
  {
    "Chapter": "93. The Morning Hours",
    "Verses": 11,
    "Words": 108,
    "Chars": 418
  },
  {
    "Chapter": "94. The Consolation",
    "Verses": 8,
    "Words": 62,
    "Chars": 265
  },
  {
    "Chapter": "95. The Fig",
    "Verses": 8,
    "Words": 69,
    "Chars": 280
  },
  {
    "Chapter": "96. The Clot",
    "Verses": 19,
    "Words": 134,
    "Chars": 557
  },
  {
    "Chapter": "97. The Power, Fate",
    "Verses": 5,
    "Words": 56,
    "Chars": 237
  },
  {
    "Chapter": "98. The Evidence",
    "Verses": 8,
    "Words": 169,
    "Chars": 822
  },
  {
    "Chapter": "99. The Earthquake",
    "Verses": 8,
    "Words": 75,
    "Chars": 319
  },
  {
    "Chapter": "100. The Chargers",
    "Verses": 11,
    "Words": 83,
    "Chars": 373
  },
  {
    "Chapter": "101. The Calamity",
    "Verses": 11,
    "Words": 86,
    "Chars": 343
  },
  {
    "Chapter": "102. Competition",
    "Verses": 8,
    "Words": 60,
    "Chars": 259
  },
  {
    "Chapter": "103. The Declining Day, Epoch",
    "Verses": 3,
    "Words": 29,
    "Chars": 132
  },
  {
    "Chapter": "104. The Traducer",
    "Verses": 9,
    "Words": 66,
    "Chars": 297
  },
  {
    "Chapter": "105. The Elephant",
    "Verses": 5,
    "Words": 46,
    "Chars": 203
  },
  {
    "Chapter": "106. Quraysh",
    "Verses": 4,
    "Words": 41,
    "Chars": 186
  },
  {
    "Chapter": "107. Almsgiving",
    "Verses": 7,
    "Words": 52,
    "Chars": 218
  },
  {
    "Chapter": "108. Abundance",
    "Verses": 3,
    "Words": 26,
    "Chars": 108
  },
  {
    "Chapter": "109. The Disbelievers",
    "Verses": 6,
    "Words": 48,
    "Chars": 191
  },
  {
    "Chapter": "110. Divine Support",
    "Verses": 3,
    "Words": 43,
    "Chars": 191
  },
  {
    "Chapter": "111. The Palm Fibre",
    "Verses": 5,
    "Words": 52,
    "Chars": 193
  },
  {
    "Chapter": "112. Sincerity",
    "Verses": 4,
    "Words": 24,
    "Chars": 93
  },
  {
    "Chapter": "113. The Dawn",
    "Verses": 5,
    "Words": 45,
    "Chars": 170
  },
  {
    "Chapter": "114. Mankind",
    "Verses": 6,
    "Words": 38,
    "Chars": 167
  }
];

const chartConfig = {
  ayah: {
    label: "Ayah",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export default function ChartSurah() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="Chapter" axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="Verses" fill="var(--color-ayah)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
