"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Math", average: 82, highest: 98, lowest: 65 },
  { name: "Science", average: 78, highest: 95, lowest: 60 },
  { name: "History", average: 74, highest: 90, lowest: 55 },
  { name: "English", average: 85, highest: 97, lowest: 70 },
  { name: "Art", average: 88, highest: 100, lowest: 75 },
  { name: "CS", average: 80, highest: 96, lowest: 62 },
]

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance by Subject</CardTitle>
        <CardDescription>Average, highest, and lowest scores across subjects</CardDescription>
      </CardHeader>
      <CardContent>
        <Chart className="h-[300px]">
          <ChartContainer data={data}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="average" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="highest" fill="#22c55e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lowest" fill="#f97316" radius={[4, 4, 0, 0]} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="border bg-background p-2 shadow-sm"
                      fields={[
                        { key: "average", label: "Average", color: "#4f46e5" },
                        { key: "highest", label: "Highest", color: "#22c55e" },
                        { key: "lowest", label: "Lowest", color: "#f97316" },
                      ]}
                    />
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Chart>
      </CardContent>
    </Card>
  )
}
