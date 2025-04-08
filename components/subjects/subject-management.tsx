"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubjectList } from "@/components/subjects/subject-list"
import { ModuleList } from "@/components/subjects/module-list"
import { AddSubjectDialog } from "@/components/subjects/add-subject-dialog"
import { AddModuleDialog } from "@/components/subjects/add-module-dialog"

export function SubjectManagement() {
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false)
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder="Search subjects..." className="h-9 w-full sm:w-[300px]" />
          <Button variant="outline" size="sm" className="h-9">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-9 gap-1" onClick={() => setIsAddSubjectOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Add Subject</span>
          </Button>
          <Button size="sm" className="h-9 gap-1" onClick={() => setIsAddModuleOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Add Module</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="subjects" className="w-full">
        <TabsList>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
        </TabsList>
        <TabsContent value="subjects">
          <SubjectList />
        </TabsContent>
        <TabsContent value="modules">
          <ModuleList />
        </TabsContent>
      </Tabs>

      <AddSubjectDialog open={isAddSubjectOpen} onOpenChange={setIsAddSubjectOpen} />
      <AddModuleDialog open={isAddModuleOpen} onOpenChange={setIsAddModuleOpen} />
    </div>
  )
}
