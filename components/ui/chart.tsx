"use client"

import * as React from "react"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div className={className} ref={ref} {...props} />
})
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { data: any[] }>(
  ({ className, data, children, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipContentProps {
  className?: string
  fields: { key: string; label: string; color: string }[]
  [key: string]: any
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, fields, ...props }, ref) => {
    const payload = Array.isArray(props.payload) ? props.payload[0]?.payload : props.payload

    if (!payload) {
      return null
    }

    return (
      <div className={className} ref={ref}>
        {fields.map((field) => (
          <div key={field.key} className="flex items-center gap-2">
            <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: field.color }} />
            <span>
              {field.label}: {payload[field.key]}
            </span>
          </div>
        ))}
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={className} ref={ref} {...props} />
  },
)
ChartTooltip.displayName = "ChartTooltip"

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent }
