import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Calendar, BarChart3 } from "lucide-react";

interface AttendanceRecord {
  subject: string;
  subjectCode: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
  lastAttended: string;
  status: "good" | "warning" | "critical";
  professor: string;
}

interface DailyAttendance {
  date: string;
  subjects: {
    [key: string]: "present" | "absent" | "cancelled";
  };
}

const attendanceData: AttendanceRecord[] = [
  {
    subject: "Data Structures and Algorithms",
    subjectCode: "CS301",
    totalClasses: 45,
    attendedClasses: 42,
    percentage: 93.3,
    lastAttended: "2024-01-15",
    status: "good",
    professor: "Dr. Sharma"
  },
  {
    subject: "Database Management Systems",
    subjectCode: "CS302",
    totalClasses: 40,
    attendedClasses: 35,
    percentage: 87.5,
    lastAttended: "2024-01-14",
    status: "good",
    professor: "Dr. Singh"
  },
  {
    subject: "Computer Networks",
    subjectCode: "CS303",
    totalClasses: 38,
    attendedClasses: 30,
    percentage: 78.9,
    lastAttended: "2024-01-13",
    status: "warning",
    professor: "Prof. Gupta"
  },
  {
    subject: "Software Engineering",
    subjectCode: "CS304",
    totalClasses: 42,
    attendedClasses: 31,
    percentage: 73.8,
    lastAttended: "2024-01-12",
    status: "warning",
    professor: "Prof. Kumar"
  },
  {
    subject: "Operating Systems",
    subjectCode: "CS305",
    totalClasses: 44,
    attendedClasses: 28,
    percentage: 63.6,
    lastAttended: "2024-01-10",
    status: "critical",
    professor: "Dr. Patel"
  },
  {
    subject: "Mathematics - III",
    subjectCode: "MA301",
    totalClasses: 36,
    attendedClasses: 21,
    percentage: 58.3,
    lastAttended: "2024-01-09",
    status: "critical",
    professor: "Prof. Verma"
  }
];

const dailyAttendance: DailyAttendance[] = [
  {
    date: "2024-01-15",
    subjects: {
      "CS301": "present",
      "CS302": "present",
      "CS303": "absent",
      "CS304": "present",
      "CS305": "present"
    }
  },
  {
    date: "2024-01-14",
    subjects: {
      "CS301": "present",
      "CS302": "present",
      "CS303": "present",
      "CS304": "absent",
      "CS305": "absent"
    }
  },
  // Add more daily records...
];

export const AttendancePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredSubjects = attendanceData.filter(subject => {
    const matchesSearch = subject.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.subjectCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.professor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || subject.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const overallAttendance = Math.round(
    attendanceData.reduce((acc, subject) => acc + subject.percentage, 0) / attendanceData.length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-green-100 text-green-800 border-green-200";
      case "warning": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "critical": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good": return <CheckCircle className="h-4 w-4" />;
      case "warning": return <AlertTriangle className="h-4 w-4" />;
      case "critical": return <TrendingDown className="h-4 w-4" />;
      default: return <BarChart3 className="h-4 w-4" />;
    }
  };

  const goodCount = attendanceData.filter(s => s.status === "good").length;
  const warningCount = attendanceData.filter(s => s.status === "warning").length;
  const criticalCount = attendanceData.filter(s => s.status === "critical").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold">Attendance Tracker</h1>
        <p className="font-body text-muted-foreground">
          Monitor your class attendance and maintain the required percentage for all subjects.
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-portal-border bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Overall Attendance</p>
                <p className="font-heading text-2xl font-bold">{overallAttendance}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-portal-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Good Standing</p>
                <p className="font-heading text-2xl font-bold text-green-600">{goodCount}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-portal-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Need Attention</p>
                <p className="font-heading text-2xl font-bold text-yellow-600">{warningCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-portal-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Critical</p>
                <p className="font-heading text-2xl font-bold text-red-600">{criticalCount}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="border-portal-border">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search subjects or professors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-body"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { key: "all", label: "All Subjects" },
                { key: "good", label: "Good (≥80%)" },
                { key: "warning", label: "Warning (70-79%)" },
                { key: "critical", label: "Critical (<70%)" }
              ].map((filter) => (
                <Button
                  key={filter.key}
                  variant={selectedFilter === filter.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`font-body ${
                    selectedFilter === filter.key 
                      ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                      : ""
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview" className="font-body">Overview</TabsTrigger>
          <TabsTrigger value="detailed" className="font-body">Detailed View</TabsTrigger>
          <TabsTrigger value="daily" className="font-body">Daily Records</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSubjects.map((subject) => (
              <Card key={subject.subjectCode} className="border-portal-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-heading text-lg">{subject.subject}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="font-body text-xs">
                          {subject.subjectCode}
                        </Badge>
                        <Badge className={`font-body text-xs ${getStatusColor(subject.status)}`}>
                          {getStatusIcon(subject.status)}
                          <span className="ml-1 capitalize">{subject.status}</span>
                        </Badge>
                      </div>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        {subject.professor}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-2xl font-bold">{subject.percentage}%</p>
                      <p className="font-body text-xs text-muted-foreground">
                        {subject.attendedClasses}/{subject.totalClasses}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-body">Progress</span>
                      <span className="font-body font-medium">{subject.percentage}%</span>
                    </div>
                    <Progress 
                      value={subject.percentage} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="font-body">Last: {new Date(subject.lastAttended).toLocaleDateString()}</span>
                    </div>
                    <span className="font-body">
                      {subject.totalClasses - subject.attendedClasses} missed
                    </span>
                  </div>

                  {subject.percentage < 75 && (
                    <div className="p-2 bg-accent/10 border border-accent/20 rounded text-sm">
                      <p className="font-body text-accent-foreground">
                        <strong>Action needed:</strong> Attend next {
                          Math.ceil((0.75 * (subject.totalClasses + 5) - subject.attendedClasses))
                        } classes to reach 75%
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          {/* Detailed Table */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading">Detailed Attendance Report</CardTitle>
              <CardDescription className="font-body">
                Complete breakdown of attendance for all subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-portal-border">
                      <th className="text-left p-3 font-heading">Subject</th>
                      <th className="text-left p-3 font-heading">Code</th>
                      <th className="text-left p-3 font-heading">Professor</th>
                      <th className="text-center p-3 font-heading">Attended</th>
                      <th className="text-center p-3 font-heading">Total</th>
                      <th className="text-center p-3 font-heading">Percentage</th>
                      <th className="text-center p-3 font-heading">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubjects.map((subject) => (
                      <tr key={subject.subjectCode} className="border-b border-portal-border hover:bg-portal-hover">
                        <td className="p-3">
                          <div>
                            <p className="font-body font-medium">{subject.subject}</p>
                            <p className="font-body text-xs text-muted-foreground">
                              Last: {new Date(subject.lastAttended).toLocaleDateString()}
                            </p>
                          </div>
                        </td>
                        <td className="p-3">
                          <Badge variant="outline" className="font-body">
                            {subject.subjectCode}
                          </Badge>
                        </td>
                        <td className="p-3 font-body">{subject.professor}</td>
                        <td className="p-3 text-center font-body font-medium">{subject.attendedClasses}</td>
                        <td className="p-3 text-center font-body">{subject.totalClasses}</td>
                        <td className="p-3 text-center">
                          <span className={`font-body font-bold ${
                            subject.percentage >= 80 ? 'text-green-600' :
                            subject.percentage >= 70 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {subject.percentage}%
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <Badge className={`font-body text-xs ${getStatusColor(subject.status)}`}>
                            {getStatusIcon(subject.status)}
                            <span className="ml-1 capitalize">{subject.status}</span>
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily" className="space-y-4">
          {/* Daily Attendance Records */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading">Daily Attendance Records</CardTitle>
              <CardDescription className="font-body">
                Recent attendance history by date
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dailyAttendance.map((day) => (
                  <div key={day.date} className="p-4 border border-portal-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-heading font-semibold">
                        {new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h4>
                      <div className="flex gap-2">
                        <Badge className="bg-green-100 text-green-800 border-green-200 font-body text-xs">
                          {Object.values(day.subjects).filter(status => status === "present").length} Present
                        </Badge>
                        <Badge className="bg-red-100 text-red-800 border-red-200 font-body text-xs">
                          {Object.values(day.subjects).filter(status => status === "absent").length} Absent
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {Object.entries(day.subjects).map(([subjectCode, status]) => {
                        const subject = attendanceData.find(s => s.subjectCode === subjectCode);
                        return (
                          <div key={subjectCode} className="flex items-center justify-between p-2 bg-portal-surface rounded">
                            <span className="font-body text-sm">{subjectCode}</span>
                            <Badge className={`font-body text-xs ${
                              status === "present" ? "bg-green-100 text-green-800 border-green-200" :
                              status === "absent" ? "bg-red-100 text-red-800 border-red-200" :
                              "bg-gray-100 text-gray-800 border-gray-200"
                            }`}>
                              {status === "present" ? "P" : status === "absent" ? "A" : "C"}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {filteredSubjects.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-heading text-lg font-semibold mb-2">No subjects found</h3>
          <p className="font-body text-muted-foreground">
            Try adjusting your search terms or filter.
          </p>
        </div>
      )}
    </div>
  );
};