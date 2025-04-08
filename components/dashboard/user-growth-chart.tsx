"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const yearData = [
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

const quarterData = [
  { name: "Week 1", students: 900, teachers: 62 },
  { name: "Week 2", students: 950, teachers: 62 },
  { name: "Week 3", students: 1000, teachers: 63 },
  { name: "Week 4", students: 1050, teachers: 63 },
  { name: "Week 5", students: 1100, teachers: 64 },
  { name: "Week 6", students: 1150, teachers: 64 },
  { name: "Week 7", students: 1180, teachers: 64 },
  { name: "Week 8", students: 1200, teachers: 64 },
  { name: "Week 9", students: 1220, teachers: 64 },
  { name: "Week 10", students: 1230, teachers: 64 },
  { name: "Week 11", students: 1240, teachers: 64 },
  { name: "Week 12", students: 1248, teachers: 64 },
]

const monthData = [
  { name: "Day 1", students: 1200, teachers: 64 },
  { name: "Day 5", students: 1210, teachers: 64 },
  { name: "Day 10", students: 1220, teachers: 64 },
  { name: "Day 15", students: 1230, teachers: 64 },
  { name: "Day 20", students: 1240, teachers: 64 },
  { name: "Day 25", students: 1245, teachers: 64 },
  { name: "Day 30", students: 1248, teachers: 64 },
]

export function UserGrowthChart() {
  const [timeRange, setTimeRange] = useState("year")
  const [date, setDate] = useState<Date>()

  const data = timeRange === "year" ? yearData : timeRange === "quarter" ? quarterData : monthData

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>User Growth</CardTitle>
          <CardDescription>Student and teacher growth over time</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">Year</SelectItem>
              <SelectItem value="quarter">Quarter</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
                <defs>
                  <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="teacherGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <Tooltip
                  content={
                    <ChartTooltipContent
                      className="border bg-background p-2 shadow-sm"
                      fields={[
                        { key: "students", label: "Students", color: "#3b82f6" },
                        { key: "teachers", label: "Teachers", color: "#10b981" },
                      ]}
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#studentGradient)"
                />
                <Line type="monotone" dataKey="teachers" stroke="#10b981" strokeWidth={2} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Chart>
      </CardContent>
    </Card>
  )
}
