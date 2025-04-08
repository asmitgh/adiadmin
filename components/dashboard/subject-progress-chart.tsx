"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const subjectData = {
  All: [
    { name: "Math", completed: 85, inProgress: 15 },
    { name: "Science", completed: 70, inProgress: 30 },
    { name: "History", completed: 60, inProgress: 40 },
    { name: "English", completed: 90, inProgress: 10 },
    { name: "Art", completed: 50, inProgress: 50 },
    { name: "CS", completed: 80, inProgress: 20 },
  ],
  ECE: [
    { name: "Digital", completed: 75, inProgress: 25 },
    { name: "Signals", completed: 65, inProgress: 35 },
    { name: "Circuits", completed: 80, inProgress: 20 },
  ],
  CSE: [
    { name: "Algorithms", completed: 90, inProgress: 10 },
    { name: "Database", completed: 85, inProgress: 15 },
    { name: "Networks", completed: 70, inProgress: 30 },
  ],
  ME: [
    { name: "Thermodynamics", completed: 60, inProgress: 40 },
    { name: "Mechanics", completed: 75, inProgress: 25 },
    { name: "Materials", completed: 65, inProgress: 35 },
  ],
}

const yearData = {
  All: [1, 2, 3, 4],
  ECE: [1, 2, 3, 4],
  CSE: [1, 2, 3, 4],
  ME: [1, 2, 3, 4],
}

export function SubjectProgressChart() {
  const [department, setDepartment] = useState("All")
  const [year, setYear] = useState("All")
  const [showCompleted, setShowCompleted] = useState(true)
  const [showInProgress, setShowInProgress] = useState(true)

  const data = subjectData[department as keyof typeof subjectData] || subjectData["All"]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Subject Progress</CardTitle>
          <CardDescription>Completion rates across subjects</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Depts</SelectItem>
              <SelectItem value="ECE">ECE</SelectItem>
              <SelectItem value="CSE">CSE</SelectItem>
              <SelectItem value="ME">ME</SelectItem>
            </SelectContent>
          </Select>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Years</SelectItem>
              {yearData[department as keyof typeof yearData]?.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  Year {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-end gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-completed"
              checked={showCompleted}
              onCheckedChange={(checked) => setShowCompleted(checked as boolean)}
            />
            <Label htmlFor="show-completed" className="text-sm flex items-center gap-1">
              <span className="block h-3 w-3 rounded-full bg-green-500"></span> Completed
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-in-progress"
              checked={showInProgress}
              onCheckedChange={(checked) => setShowInProgress(checked as boolean)}
            />
            <Label htmlFor="show-in-progress" className="text-sm flex items-center gap-1">
              <span className="block h-3 w-3 rounded-full bg-amber-500"></span> In Progress
            </Label>
          </div>
        </div>
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
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                {showCompleted && (
                  <Bar
                    dataKey="completed"
                    stackId="a"
                    fill="#22c55e"
                    radius={[0, 0, 0, 0]}
                    animationDuration={1500}
                    label={{
                      position: "top",
                      fill: "#22c55e",
                      fontSize: 10,
                      formatter: (value: number) => (value > 15 ? `${value}%` : ""),
                    }}
                  />
                )}
                {showInProgress && (
                  <Bar
                    dataKey="inProgress"
                    stackId="a"
                    fill="#f59e0b"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    label={{
                      position: "top",
                      fill: "#f59e0b",
                      fontSize: 10,
                      formatter: (value: number) => (value > 15 ? `${value}%` : ""),
                    }}
                  />
                )}
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
