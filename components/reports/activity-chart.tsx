"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", logins: 120, sessions: 240, resources: 180 },
  { name: "Tue", logins: 150, sessions: 280, resources: 220 },
  { name: "Wed", logins: 180, sessions: 320, resources: 260 },
  { name: "Thu", logins: 160, sessions: 300, resources: 240 },
  { name: "Fri", logins: 140, sessions: 270, resources: 200 },
  { name: "Sat", logins: 80, sessions: 160, resources: 120 },
  { name: "Sun", logins: 70, sessions: 140, resources: 100 },
]

export function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Platform usage metrics for the past week</CardDescription>
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
                <Line type="monotone" dataKey="logins" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="sessions" stroke="#22c55e" strokeWidth={2} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="resources" stroke="#f97316" strokeWidth={2} activeDot={{ r: 6 }} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="border bg-background p-2 shadow-sm"
                      fields={[
                        { key: "logins", label: "Logins", color: "#4f46e5" },
                        { key: "sessions", label: "Sessions", color: "#22c55e" },
                        { key: "resources", label: "Resources", color: "#f97316" },
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
