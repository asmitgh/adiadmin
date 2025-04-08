"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", students: 400, teachers: 40 },
  { name: "Feb", students: 450, teachers: 42 },
  { name: "Mar", students: 520, teachers: 45 },
  { name: "Apr", students: 590, teachers: 48 },
  { name: "May", students: 650, teachers: 52 },
  { name: "Jun", students: 700, teachers: 56 },
  { name: "Jul", students: 750, teachers: 58 },
  { name: "Aug", students: 820, teachers: 60 },
  { name: "Sep", students: 900, teachers: 62 },
  { name: "Oct", students: 950, teachers: 64 },
  { name: "Nov", students: 1100, teachers: 64 },
  { name: "Dec", students: 1248, teachers: 64 },
]

export function UserStatsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>Student and teacher growth over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <Chart className="h-[300px]">
          <ChartContainer data={data}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
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
                <Line type="monotone" dataKey="students" stroke="#adfa1d" strokeWidth={2} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="teachers" stroke="#f97316" strokeWidth={2} activeDot={{ r: 6 }} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="border bg-background p-2 shadow-sm"
                      fields={[
                        { key: "students", label: "Students", color: "#adfa1d" },
                        { key: "teachers", label: "Teachers", color: "#f97316" },
                      ]}
                    />
                  }
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Chart>
      </CardContent>
    </Card>
  )
}
