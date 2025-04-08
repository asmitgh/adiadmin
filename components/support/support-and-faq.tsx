"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  Mail,
  MessageSquare,
  Phone,
  FileText,
  HelpCircle,
  Users,
  BookOpen,
  BarChart3,
  CreditCard,
} from "lucide-react"

export function SupportAndFaq() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for help..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>Search</Button>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList>
          <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I add a new student to the system?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To add a new student, navigate to the Users section from the sidebar, select the Students tab, and
                      click on the "Add User" button. Fill in the required information in the form and click "Create
                      User".
                    </p>
                    <p className="text-muted-foreground mt-2">
                      You can also import multiple students at once using the "Batch Import" feature, which allows you
                      to upload a CSV file with student information.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I assign a teacher to a subject?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To assign a teacher to a subject, go to the Groups section, select the "Teacher Assignments" tab,
                      and click on "Assign Teacher". From there, you can select the teacher, subject, and group for the
                      assignment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I upgrade my subscription plan?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To upgrade your subscription, navigate to the Subscription section from the sidebar. Under the
                      "Current Plan" tab, you'll see available plans. Click on the "Upgrade" button for the plan you
                      want to switch to and follow the payment instructions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How can I generate reports for student performance?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To generate performance reports, go to the Reports section from the sidebar. You can select
                      various filters such as department, subject, and time period to customize your reports. Once
                      configured, click on "Generate Report" to create and download the report.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I reset a student's password?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To reset a student's password, go to the Users section, find the student in the list, click on the
                      three dots menu at the end of their row, and select "Reset password". You can either set a new
                      password manually or send a password reset link to their email.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How do I create a new department?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To create a new department, navigate to the Departments section from the sidebar and click on the
                      "Add Department" button. Fill in the required information such as department name, code, and head
                      of department, then click "Create Department".
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support Team</CardTitle>
                <CardDescription>Get in touch with our support team for assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Support request subject" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Describe your issue in detail" className="min-h-[120px]" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Request</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support Channels</CardTitle>
                <CardDescription>Other ways to get help and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@eduadmin.com</p>
                    <p className="text-sm text-muted-foreground">Response time: 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available for Gold and Platinum subscribers</p>
                    <p className="text-sm text-muted-foreground">Response time: Under 5 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="documentation">
          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Browse our comprehensive documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Getting Started
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Learn the basics of using the EduAdmin platform</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      User Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Learn how to manage students, teachers, and administrators
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Subject Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Learn how to create and manage subjects and modules</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      Troubleshooting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Common issues and how to resolve them</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Reports & Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Learn how to generate and interpret reports</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Subscription Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Learn how to manage your subscription and billing</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
