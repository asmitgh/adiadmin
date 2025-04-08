"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { AddModuleDialog } from "@/components/subjects/add-module-dialog"

interface Module {
  id: string
  name: string
  duration: string
  description: string
}

interface Subject {
  id: string
  name: string
  code: string
  department: string
  credits: number
  description: string
  modules: Module[]
}

interface SubjectDetailViewProps {
  subject: Subject
}

export function SubjectDetailView({ subject }: SubjectDetailViewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{subject.name}</CardTitle>
            <CardDescription className="mt-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{subject.code}</Badge>
                <span>•</span>
                <span>{subject.department}</span>
                <span>•</span>
                <span>{subject.credits} Credits</span>
              </div>
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Description</h3>
          <p className="text-sm text-muted-foreground">{subject.description}</p>
        </div>

        <Separator />

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Modules ({subject.modules.length})</h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsAddModuleOpen(true)}>
                <Plus className="h-4 w-4 mr-1" /> Add Module
              </Button>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>

          <CollapsibleContent className="mt-4 space-y-4">
            {subject.modules.map((module) => (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{module.name}</CardTitle>
                      <CardDescription>Duration: {module.duration}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

      <AddModuleDialog
        open={isAddModuleOpen}
        onOpenChange={setIsAddModuleOpen}
        subjectId={subject.id}
        subjectName={subject.name}
      />
    </Card>
  )
}
