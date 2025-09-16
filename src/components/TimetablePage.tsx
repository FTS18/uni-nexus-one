import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, ArrowLeft, BookOpen, Utensils } from "lucide-react";
import { allTimetables, courses } from "@/data/timetable-data";
import { Button } from "@/components/ui/button";

interface ClassSchedule {
  startTime: string;
  endTime: string;
  courseCode: string;
  classType: string;
  group?: string;
  location?: string | null;
}

export const TimetablePage = () => {
  const [selectedTimetable, setSelectedTimetable] = useState<any>(null);

  const timeSlots = useMemo(() => {
    const allSlots = new Set<string>();
    // Define a standard 8 AM to 5 PM range
    for (let i = 8; i < 17; i++) {
        allSlots.add(`${String(i).padStart(2, '0')}:00`);
    }
    return Array.from(allSlots).sort();
  }, []);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const getCourseColor = (courseCode: string) => {
    // Subject-wise color clubbing
    const physicsCourses = ["PY2301", "PY2302","ES2304","ES2305"];
    const compRelatedCourses = ["ES2301", "ES2302", "ES2303" , "ES2306", "ES2307", "GS2301"];
    const chemCourses = ["CH2301", "CH2302"];
    const mathCourses = ["MA2301"];
    
    if (physicsCourses.includes(courseCode)) {
      return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800";
    }
    if (compRelatedCourses.includes(courseCode)) {
      return "bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/50 dark:text-violet-300 dark:border-violet-800";
    }
    if (chemCourses.includes(courseCode)) {
      return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800";
    }
    if (mathCourses.includes(courseCode)) {
      return "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/50 dark:text-sky-300 dark:border-sky-800";
    }
    // Dark yellow for others
    return "bg-yellow-200 text-yellow-900 border-yellow-300 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800";
  };

  const findClassForSlot = (day: string, startTime: string): ClassSchedule[] => {
    const scheduleDay = selectedTimetable?.schedule?.[day] as ClassSchedule[] | undefined;
    if (!scheduleDay) return [];
    
    const currentHour = parseInt(startTime.split(':')[0]);

    return scheduleDay.filter(classInfo => {
        const startHour = parseInt(classInfo.startTime.split(':')[0]);
        const endHour = parseInt(classInfo.endTime.split(':')[0]);
        return currentHour >= startHour && currentHour < endHour;
    });
  };

  const getRowSpan = (classInfo: ClassSchedule) => {
    const start = parseInt(classInfo.startTime.split(':')[0], 10);
    const end = parseInt(classInfo.endTime.split(':')[0], 10);
    return end - start;
  };

  if (!selectedTimetable) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="font-heading text-3xl font-bold">Select Your Branch</h1>
          <p className="font-body text-muted-foreground">
            Please choose your branch to view the 1st semester timetable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allTimetables.map((timetable) => (
            <Card
              key={timetable.branchCode}
              className="border-portal-border hover:border-accent hover:bg-accent/10 transition-all cursor-pointer"
              onClick={() => setSelectedTimetable(timetable)}
            >
              <CardHeader>
                <CardTitle className="font-heading text-lg">{timetable.branch}</CardTitle>
                <CardDescription className="font-body text-xs">{timetable.branchCode}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
  const { branch, session, semester, notes } = selectedTimetable;
  
  const renderedSlots: { [key: string]: Set<string> } = {};
  days.forEach(day => renderedSlots[day] = new Set());


  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => setSelectedTimetable(null)}>
            <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="space-y-2">
            <h1 className="font-heading text-3xl font-bold">{branch} - Timetable</h1>
            <p className="font-body text-muted-foreground">
                Session {session} - Semester {semester}
            </p>
        </div>
      </div>

      <Card className="border-portal-border">
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1200px] table-fixed">
              <thead>
                <tr>
                  <th className="border border-portal-border p-2 bg-portal-surface font-heading text-left w-28">
                    Time
                  </th>
                  {days.map(day => (
                    <th key={day} className="border border-portal-border p-2 font-heading text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((timeSlot) => {
                    if (timeSlot === "12:00") {
                        return (
                            <tr key="lunch">
                                <td className="border border-portal-border p-2 font-body font-medium text-center">12:00 - 13:00</td>
                                <td colSpan={5} className="border border-portal-border p-2 font-body font-semibold text-center bg-yellow-400/80 text-yellow-900">
                                    <div className="flex items-center justify-center gap-2">
                                        <Utensils className="h-4 w-4"/>
                                        <span>Lunch Break</span>
                                    </div>
                                </td>
                            </tr>
                        );
                    }
                   return (
                    <tr key={timeSlot}>
                      <td className="border border-portal-border p-2 font-body font-medium text-center">
                        {`${timeSlot} - ${String(parseInt(timeSlot.split(':')[0], 10) + 1).padStart(2, '0')}:00`}
                      </td>
                      {days.map(day => {
                        const classesInSlot = findClassForSlot(day, timeSlot);
                        
                        if(classesInSlot.length > 0 && renderedSlots[day].has(classesInSlot[0].startTime)) {
                            return null;
                        }
                        
                        if (classesInSlot.length === 0) {
                            return <td key={`${day}-${timeSlot}`} className="border border-portal-border p-1"></td>;
                        }

                        const firstClass = classesInSlot[0];
                        renderedSlots[day].add(firstClass.startTime);
                        const rowSpan = getRowSpan(firstClass);

                        return (
                            <td 
                                key={`${day}-${timeSlot}`} 
                                className="border border-portal-border p-1 align-top"
                                rowSpan={rowSpan > 0 ? rowSpan : 1}
                            >
                                <div className="flex flex-col gap-1 h-full">
                                {classesInSlot.map((classData, index) => {
                                    const courseInfo = courses[classData.courseCode as keyof typeof courses];
                                    return (
                                        <div key={index} className={`p-2 rounded-lg border h-full flex flex-col justify-between text-xs ${getCourseColor(classData.courseCode)}`}>
                                            <div>
                                                <h4 className="font-body font-semibold">
                                                    {courseInfo?.courseName || classData.courseCode}
                                                </h4>
                                                <p className="opacity-80">{classData.courseCode}</p>
                                            </div>
                                            <div className="mt-1 space-y-0.5">
                                                {classData.location && <div className="flex items-center gap-1"><MapPin className="h-3 w-3" /><span>{classData.location}</span></div>}
                                                {classData.group && <div className="flex items-center gap-1"><Users className="h-3 w-3" /><span>{classData.group}</span></div>}
                                                <div className="flex items-center gap-1 font-semibold"><BookOpen className="h-3 w-3" /><span>{classData.classType}</span></div>
                                            </div>
                                        </div>
                                    );
                                })}
                                </div>
                            </td>
                        );
                      })}
                    </tr>
                   )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-portal-border">
          <CardHeader>
              <CardTitle className="font-heading text-lg">Notes</CardTitle>
          </CardHeader>
          <CardContent>
              <ul className="list-disc pl-5 space-y-1 font-body text-sm text-muted-foreground">
                  {notes.map((note: string, index: number) => (
                      <li key={index}>{note}</li>
                  ))}
              </ul>
          </CardContent>
      </Card>
    </div>
  );
};

