import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Calendar as CalendarIcon } from "lucide-react";

const timeSlots = [
  "09:00 - 09:50",
  "10:00 - 10:50", 
  "11:00 - 11:50",
  "12:00 - 12:50",
  "01:00 - 01:50", // Lunch break
  "02:00 - 02:50",
  "03:00 - 03:50",
  "04:00 - 04:50"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const timetableData = {
  "Monday": {
    "09:00 - 09:50": { subject: "Data Structures", room: "CS-101", faculty: "Dr. Sharma", type: "theory" },
    "10:00 - 10:50": { subject: "Computer Networks", room: "CS-201", faculty: "Prof. Gupta", type: "theory" },
    "11:00 - 11:50": { subject: "Database Systems", room: "CS-301", faculty: "Dr. Singh", type: "theory" },
    "12:00 - 12:50": { subject: "Software Engineering", room: "CS-102", faculty: "Prof. Kumar", type: "theory" },
    "01:00 - 01:50": { subject: "Lunch Break", room: "", faculty: "", type: "break" },
    "02:00 - 02:50": { subject: "DS Lab", room: "CS-Lab1", faculty: "Dr. Sharma", type: "lab" },
    "03:00 - 03:50": { subject: "DS Lab", room: "CS-Lab1", faculty: "Dr. Sharma", type: "lab" },
    "04:00 - 04:50": { subject: "Free Period", room: "", faculty: "", type: "free" }
  },
  "Tuesday": {
    "09:00 - 09:50": { subject: "Computer Networks", room: "CS-201", faculty: "Prof. Gupta", type: "theory" },
    "10:00 - 10:50": { subject: "Operating Systems", room: "CS-202", faculty: "Dr. Patel", type: "theory" },
    "11:00 - 11:50": { subject: "Database Systems", room: "CS-301", faculty: "Dr. Singh", type: "theory" },
    "12:00 - 12:50": { subject: "Mathematics", room: "MA-101", faculty: "Prof. Verma", type: "theory" },
    "01:00 - 01:50": { subject: "Lunch Break", room: "", faculty: "", type: "break" },
    "02:00 - 02:50": { subject: "CN Lab", room: "CS-Lab2", faculty: "Prof. Gupta", type: "lab" },
    "03:00 - 03:50": { subject: "CN Lab", room: "CS-Lab2", faculty: "Prof. Gupta", type: "lab" },
    "04:00 - 04:50": { subject: "Library", room: "Library", faculty: "", type: "free" }
  },
  "Wednesday": {
    "09:00 - 09:50": { subject: "Software Engineering", room: "CS-102", faculty: "Prof. Kumar", type: "theory" },
    "10:00 - 10:50": { subject: "Data Structures", room: "CS-101", faculty: "Dr. Sharma", type: "theory" },
    "11:00 - 11:50": { subject: "Operating Systems", room: "CS-202", faculty: "Dr. Patel", type: "theory" },
    "12:00 - 12:50": { subject: "Mathematics", room: "MA-101", faculty: "Prof. Verma", type: "theory" },
    "01:00 - 01:50": { subject: "Lunch Break", room: "", faculty: "", type: "break" },
    "02:00 - 02:50": { subject: "DBMS Lab", room: "CS-Lab3", faculty: "Dr. Singh", type: "lab" },
    "03:00 - 03:50": { subject: "DBMS Lab", room: "CS-Lab3", faculty: "Dr. Singh", type: "lab" },
    "04:00 - 04:50": { subject: "Free Period", room: "", faculty: "", type: "free" }
  },
  "Thursday": {
    "09:00 - 09:50": { subject: "Database Systems", room: "CS-301", faculty: "Dr. Singh", type: "theory" },
    "10:00 - 10:50": { subject: "Software Engineering", room: "CS-102", faculty: "Prof. Kumar", type: "theory" },
    "11:00 - 11:50": { subject: "Computer Networks", room: "CS-201", faculty: "Prof. Gupta", type: "theory" },
    "12:00 - 12:50": { subject: "Operating Systems", room: "CS-202", faculty: "Dr. Patel", type: "theory" },
    "01:00 - 01:50": { subject: "Lunch Break", room: "", faculty: "", type: "break" },
    "02:00 - 02:50": { subject: "Project Work", room: "CS-104", faculty: "Prof. Kumar", type: "project" },
    "03:00 - 03:50": { subject: "Project Work", room: "CS-104", faculty: "Prof. Kumar", type: "project" },
    "04:00 - 04:50": { subject: "Seminar", room: "Seminar Hall", faculty: "Various", type: "seminar" }
  },
  "Friday": {
    "09:00 - 09:50": { subject: "Mathematics", room: "MA-101", faculty: "Prof. Verma", type: "theory" },
    "10:00 - 10:50": { subject: "Data Structures", room: "CS-101", faculty: "Dr. Sharma", type: "theory" },
    "11:00 - 11:50": { subject: "Software Engineering", room: "CS-102", faculty: "Prof. Kumar", type: "theory" },
    "12:00 - 12:50": { subject: "Operating Systems", room: "CS-202", faculty: "Dr. Patel", type: "theory" },
    "01:00 - 01:50": { subject: "Lunch Break", room: "", faculty: "", type: "break" },
    "02:00 - 02:50": { subject: "Free Period", room: "", faculty: "", type: "free" },
    "03:00 - 03:50": { subject: "Extra Curricular", room: "Various", faculty: "", type: "activity" },
    "04:00 - 04:50": { subject: "Free Period", room: "", faculty: "", type: "free" }
  }
};

const getClassTypeColor = (type: string) => {
  switch (type) {
    case "theory": return "bg-primary/10 text-primary border-primary/20";
    case "lab": return "bg-accent/10 text-accent-foreground border-accent/20";
    case "project": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800";
    case "seminar": return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800";
    case "activity": return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800";
    case "break": return "bg-accent text-accent-foreground border-accent";
    case "free": return "bg-muted text-muted-foreground border-muted";
    default: return "bg-secondary text-secondary-foreground border-secondary";
  }
};

export const TimetablePage = () => {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const isCurrentTimeSlot = (timeSlot: string) => {
    const [startTime] = timeSlot.split(' - ');
    const slotTime = startTime.replace(':', '');
    const currentTimeFormatted = currentTime.replace(':', '');
    return parseInt(currentTimeFormatted) >= parseInt(slotTime) && 
           parseInt(currentTimeFormatted) < parseInt(slotTime) + 50;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold">Class Timetable</h1>
        <p className="font-body text-muted-foreground">
          Your weekly class schedule - Computer Science Engineering, 3rd Year
        </p>
      </div>

      {/* Current Day Highlight */}
      <Card className="border-accent bg-accent/5">
        <CardHeader className="pb-3">
          <CardTitle className="font-heading flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Today - {currentDay}
          </CardTitle>
          <CardDescription className="font-body">
            Current time: {new Date().toLocaleTimeString('en-US', { 
              hour12: true, 
              hour: 'numeric', 
              minute: '2-digit' 
            })}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Timetable */}
      <Card className="border-portal-border">
        <CardHeader>
          <CardTitle className="font-heading">Weekly Schedule</CardTitle>
          <CardDescription className="font-body">
            Click on any class for more details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-portal-border p-3 bg-portal-surface font-heading text-left min-w-32">
                    Time
                  </th>
                  {days.map(day => (
                    <th 
                      key={day} 
                      className={`border border-portal-border p-3 font-heading text-left min-w-48 ${
                        day === currentDay ? 'bg-accent/20' : 'bg-portal-surface'
                      }`}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(timeSlot => (
                  <tr key={timeSlot}>
                    <td className={`border border-portal-border p-3 font-body font-medium ${
                      isCurrentTimeSlot(timeSlot) && days.includes(currentDay) ? 'bg-accent/10' : 'bg-portal-surface'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {timeSlot}
                      </div>
                    </td>
                    {days.map(day => {
                      const classData = timetableData[day]?.[timeSlot];
                      const isCurrentSlot = day === currentDay && isCurrentTimeSlot(timeSlot);
                      
                      return (
                        <td 
                          key={`${day}-${timeSlot}`} 
                          className={`border border-portal-border p-3 ${
                            isCurrentSlot ? 'bg-accent/10' : ''
                          }`}
                        >
                          {classData ? (
                            <div className="space-y-2">
                              <div className={`p-3 rounded-lg border ${getClassTypeColor(classData.type)}`}>
                                <h4 className="font-body font-semibold text-sm">
                                  {classData.subject}
                                </h4>
                                {classData.room && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <MapPin className="h-3 w-3" />
                                    <span className="font-body text-xs">{classData.room}</span>
                                  </div>
                                )}
                                {classData.faculty && (
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span className="font-body text-xs">{classData.faculty}</span>
                                  </div>
                                )}
                              </div>
                              {isCurrentSlot && classData.type !== 'break' && classData.type !== 'free' && (
                                <Badge className="bg-accent text-accent-foreground font-body text-xs">
                                  Current Class
                                </Badge>
                              )}
                            </div>
                          ) : (
                            <div className="text-center text-muted-foreground font-body text-sm">
                              No class
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="border-portal-border">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-2 rounded-lg border ${getClassTypeColor('theory')} text-center`}>
              <span className="font-body text-sm font-medium">Theory Class</span>
            </div>
            <div className={`p-2 rounded-lg border ${getClassTypeColor('lab')} text-center`}>
              <span className="font-body text-sm font-medium">Laboratory</span>
            </div>
            <div className={`p-2 rounded-lg border ${getClassTypeColor('project')} text-center`}>
              <span className="font-body text-sm font-medium">Project Work</span>
            </div>
            <div className={`p-2 rounded-lg border ${getClassTypeColor('break')} text-center`}>
              <span className="font-body text-sm font-medium">Break Time</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};