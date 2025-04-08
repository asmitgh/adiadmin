"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Math", completed: 85, inProgress: 15 },
  { name: "Science", completed: 70, inProgress: 30 },
  { name: "History", completed: 60, inProgress: 40 },
  { name: "English", completed: 90, inProgress: 10 },
  { name: "Art", completed: 50, inProgress: 50 },
]

export function UserProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject Progress</CardTitle>
        <CardDescription>Completion rates across subjects</CardDescription>
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
                  tickFormatter={(value) => `${value}%`}
                />
                <Bar dataKey="completed" stackId="a" fill="#22c55e" radius={[0, 0, 0, 0]} />
                <Bar dataKey="inProgress" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="border bg-background p-2 shadow-sm"
                      fields={[
                        { key: "completed", label: "Completed", color: "#22c55e" },
                        { key: "inProgress", label: "In Progress", color: "#f59e0b" },
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
