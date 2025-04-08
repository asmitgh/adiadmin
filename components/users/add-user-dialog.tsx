"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const roles = [
  { label: "Student", value: "student" },
  { label: "Teacher", value: "teacher" },
  { label: "Administrator", value: "admin" },
]

const departments = [
  { label: "Computer Science Engineering", value: "cse" },
  { label: "Electronics & Communication", value: "ece" },
  { label: "Mechanical Engineering", value: "me" },
  { label: "Civil Engineering", value: "ce" },
  { label: "Electrical Engineering", value: "ee" },
  { label: "Information Technology", value: "it" },
]

const baseFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  role: z.string({
    required_error: "Please select a role.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
})

const teacherFormSchema = baseFormSchema.extend({
  department: z.string({
    required_error: "Please select a department.",
  }),
  joiningDate: z.date({
    required_error: "Please select a joining date.",
  }),
  designation: z.string({
    required_error: "Please select a designation.",
  }),
})

const studentFormSchema = baseFormSchema.extend({
  admissionSession: z.string().min(2, {
    message: "Please enter a valid admission session.",
  }),
  fatherName: z.string().min(2, {
    message: "Father's name must be at least 2 characters.",
  }),
  motherName: z.string().min(2, {
    message: "Mother's name must be at least 2 characters.",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  dateOfBirth: z.date({
    required_error: "Please select a date of birth.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  religion: z.string().optional(),
  pincode: z.string().min(5, {
    message: "Please enter a valid pincode.",
  }),
  caste: z.string().optional(),
  fatherPhone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  motherPhone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  fatherEmail: z.string().email().optional(),
  motherEmail: z.string().email().optional(),
})

interface AddUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddUserDialog({ open, onOpenChange }: AddUserDialogProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const baseForm = useForm<z.infer<typeof baseFormSchema>>({
    resolver: zodResolver(baseFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const teacherForm = useForm<z.infer<typeof teacherFormSchema>>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      joiningDate: new Date(),
      designation: "",
    },
  })

  const studentForm = useForm<z.infer<typeof studentFormSchema>>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      admissionSession: "",
      fatherName: "",
      motherName: "",
      address: "",
      fatherPhone: "",
      motherPhone: "",
      dateOfBirth: new Date(),
    },
  })

  function onSubmit(values: any) {
    console.log(values)
    onOpenChange(false)
    baseForm.reset()
    teacherForm.reset()
    studentForm.reset()
    setSelectedRole(null)
  }

  const handleRoleChange = (value: string) => {
    setSelectedRole(value)
    baseForm.setValue("role", value)
    teacherForm.setValue("role", value)
    studentForm.setValue("role", value)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>Create a new user account with the required information.</DialogDescription>
        </DialogHeader>

        {!selectedRole ? (
          <div className="space-y-4">
            <Label>Select User Role</Label>
            <div className="grid grid-cols-3 gap-4">
              {roles.map((role) => (
                <Button
                  key={role.value}
                  variant="outline"
                  className={cn(
                    "h-24 flex flex-col items-center justify-center text-center",
                    role.value === "student" && "border-blue-500 bg-blue-50 dark:bg-blue-950",
                    role.value === "teacher" && "border-green-500 bg-green-50 dark:bg-green-950",
                    role.value === "admin" && "border-purple-500 bg-purple-50 dark:bg-purple-950",
                  )}
                  onClick={() => handleRoleChange(role.value)}
                >
                  <span className="text-lg font-medium">{role.label}</span>
                  <span className="text-xs text-muted-foreground">Add new {role.label.toLowerCase()}</span>
                </Button>
              ))}
            </div>
          </div>
        ) : selectedRole === "student" ? (
          <form onSubmit={studentForm.handleSubmit(onSubmit)} className="space-y-4">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="personal">Personal Details</TabsTrigger>
                <TabsTrigger value="parents">Parent Details</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" {...studentForm.register("name")} />
                  {studentForm.formState.errors.name && (
                    <p className="text-sm text-red-500">{studentForm.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john.doe@example.com" {...studentForm.register("email")} />
                    {studentForm.formState.errors.email && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" {...studentForm.register("phone")} />
                    {studentForm.formState.errors.phone && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="admissionSession">Admission Session</Label>
                    <Input
                      id="admissionSession"
                      placeholder="2023-2024"
                      {...studentForm.register("admissionSession")}
                    />
                    {studentForm.formState.errors.admissionSession && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.admissionSession.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Controller
                      control={studentForm.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      )}
                    />
                    {studentForm.formState.errors.dateOfBirth && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.dateOfBirth.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Controller
                    control={studentForm.control}
                    name="gender"
                    render={({ field }) => (
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="font-normal">
                            Male
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="font-normal">
                            Female
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other" className="font-normal">
                            Other
                          </Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                  {studentForm.formState.errors.gender && (
                    <p className="text-sm text-red-500">{studentForm.formState.errors.gender.message}</p>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="personal" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Textarea id="address" placeholder="Enter full address" {...studentForm.register("address")} />
                  {studentForm.formState.errors.address && (
                    <p className="text-sm text-red-500">{studentForm.formState.errors.address.message}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" placeholder="123456" {...studentForm.register("pincode")} />
                    {studentForm.formState.errors.pincode && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.pincode.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="religion">Religion</Label>
                    <Input id="religion" placeholder="Optional" {...studentForm.register("religion")} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caste">Caste</Label>
                  <Input id="caste" placeholder="Optional" {...studentForm.register("caste")} />
                </div>
              </TabsContent>
              <TabsContent value="parents" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Father's Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Father's Name</Label>
                    <Input id="fatherName" placeholder="John Doe Sr." {...studentForm.register("fatherName")} />
                    {studentForm.formState.errors.fatherName && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.fatherName.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fatherPhone">Father's Phone</Label>
                      <Input
                        id="fatherPhone"
                        placeholder="+1 (555) 123-4567"
                        {...studentForm.register("fatherPhone")}
                      />
                      {studentForm.formState.errors.fatherPhone && (
                        <p className="text-sm text-red-500">{studentForm.formState.errors.fatherPhone.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherEmail">Father's Email</Label>
                      <Input
                        id="fatherEmail"
                        placeholder="father@example.com"
                        {...studentForm.register("fatherEmail")}
                      />
                      {studentForm.formState.errors.fatherEmail && (
                        <p className="text-sm text-red-500">{studentForm.formState.errors.fatherEmail.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Mother's Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Mother's Name</Label>
                    <Input id="motherName" placeholder="Jane Doe" {...studentForm.register("motherName")} />
                    {studentForm.formState.errors.motherName && (
                      <p className="text-sm text-red-500">{studentForm.formState.errors.motherName.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="motherPhone">Mother's Phone</Label>
                      <Input
                        id="motherPhone"
                        placeholder="+1 (555) 123-4567"
                        {...studentForm.register("motherPhone")}
                      />
                      {studentForm.formState.errors.motherPhone && (
                        <p className="text-sm text-red-500">{studentForm.formState.errors.motherPhone.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherEmail">Mother's Email</Label>
                      <Input
                        id="motherEmail"
                        placeholder="mother@example.com"
                        {...studentForm.register("motherEmail")}
                      />
                      {studentForm.formState.errors.motherEmail && (
                        <p className="text-sm text-red-500">{studentForm.formState.errors.motherEmail.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedRole(null)}>
                Back
              </Button>
              <Button type="submit">Create Student</Button>
            </DialogFooter>
          </form>
        ) : selectedRole === "teacher" ? (
          <form onSubmit={teacherForm.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Dr. Jane Smith" {...teacherForm.register("name")} />
                {teacherForm.formState.errors.name && (
                  <p className="text-sm text-red-500">{teacherForm.formState.errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Controller
                  control={teacherForm.control}
                  name="department"
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn("w-full justify-between", !field.value && "text-muted-foreground")}
                        >
                          {field.value
                            ? departments.find((dept) => dept.value === field.value)?.label
                            : "Select department"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search department..." />
                          <CommandList>
                            <CommandEmpty>No department found.</CommandEmpty>
                            <CommandGroup>
                              {departments.map((dept) => (
                                <CommandItem
                                  value={dept.label}
                                  key={dept.value}
                                  onSelect={() => {
                                    field.onChange(dept.value)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      dept.value === field.value ? "opacity-100" : "opacity-0",
                                    )}
                                  />
                                  {dept.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {teacherForm.formState.errors.department && (
                  <p className="text-sm text-red-500">{teacherForm.formState.errors.department.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Controller
                control={teacherForm.control}
                name="designation"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="designation">
                      <SelectValue placeholder="Select designation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="HOD">HOD</SelectItem>
                      <SelectItem value="Department Coordinator">Department Coordinator</SelectItem>
                      <SelectItem value="Professor">Professor</SelectItem>
                      <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
                      <SelectItem value="Lab Assistant">Lab Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {teacherForm.formState.errors.designation && (
                <p className="text-sm text-red-500">{teacherForm.formState.errors.designation.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="jane.smith@example.com" {...teacherForm.register("email")} />
                {teacherForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{teacherForm.formState.errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" {...teacherForm.register("phone")} />
                {teacherForm.formState.errors.phone && (
                  <p className="text-sm text-red-500">{teacherForm.formState.errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="joiningDate">Joining Date</Label>
              <Controller
                control={teacherForm.control}
                name="joiningDate"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {teacherForm.formState.errors.joiningDate && (
                <p className="text-sm text-red-500">{teacherForm.formState.errors.joiningDate.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Upload CV/Resume</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Drag and drop your CV/Resume here</p>
                <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX up to 5MB</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Browse Files
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedRole(null)}>
                Back
              </Button>
              <Button type="submit">Create Teacher</Button>
            </DialogFooter>
          </form>
        ) : (
          <form onSubmit={baseForm.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Admin User" {...baseForm.register("name")} />
              {baseForm.formState.errors.name && (
                <p className="text-sm text-red-500">{baseForm.formState.errors.name.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="admin@example.com" {...baseForm.register("email")} />
                {baseForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{baseForm.formState.errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" {...baseForm.register("phone")} />
                {baseForm.formState.errors.phone && (
                  <p className="text-sm text-red-500">{baseForm.formState.errors.phone.message}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedRole(null)}>
                Back
              </Button>
              <Button type="submit">Create Administrator</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
