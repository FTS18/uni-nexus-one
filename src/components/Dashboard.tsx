import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, BookOpen, Bell, TrendingUp } from "lucide-react";

interface DashboardProps {
  userEmail: string;
  onTabChange: (tab: string) => void;
}

export const Dashboard = ({ userEmail, onTabChange }: DashboardProps) => {
  const userName = userEmail.split('@')[0].replace('.', ' ').split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const quickStats = [
    { label: "Attendance", value: "87%", icon: TrendingUp, trend: "up" },
    { label: "Upcoming Events", value: "5", icon: Calendar, trend: "neutral" },
    { label: "Active Clubs", value: "3", icon: Users, trend: "up" },
    { label: "Study Materials", value: "24", icon: BookOpen, trend: "up" }
  ];

  const recentAnnouncements = [
    {
      title: "Mid-Semester Exam Schedule Released",
      date: "2 hours ago",
      urgent: true
    },
    {
      title: "Library Hours Extended During Exams",
      date: "1 day ago",
      urgent: false
    },
    {
      title: "Tech Fest 2024 Registration Open",
      date: "3 days ago",
      urgent: false
    }
  ];

  const upcomingClasses = [
    { subject: "Data Structures", time: "09:00 AM", room: "CS-101" },
    { subject: "Database Systems", time: "11:00 AM", room: "CS-201" },
    { subject: "Computer Networks", time: "02:00 PM", room: "CS-301" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold">Welcome back, {userName}!</h1>
        <p className="font-body text-muted-foreground">
          Here's what's happening in your academic life today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-portal-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-heading text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="p-2 bg-portal-surface rounded-lg">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card className="border-portal-border">
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription className="font-body">
              Your schedule for today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-portal-surface rounded-lg">
                <div>
                  <p className="font-body font-medium">{class_.subject}</p>
                  <p className="font-body text-sm text-muted-foreground">{class_.room}</p>
                </div>
                <Badge variant="outline" className="font-body">
                  {class_.time}
                </Badge>
              </div>
            ))}
            <Button 
              variant="outline" 
              className="w-full font-body"
              onClick={() => onTabChange('timetable')}
            >
              View Full Timetable
            </Button>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card className="border-portal-border">
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Announcements
            </CardTitle>
            <CardDescription className="font-body">
              Latest updates from college administration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAnnouncements.map((announcement, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg border-l-4 ${
                  announcement.urgent 
                    ? 'bg-accent/10 border-l-accent' 
                    : 'bg-portal-surface border-l-portal-border'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-body font-medium">{announcement.title}</p>
                    <p className="font-body text-sm text-muted-foreground">{announcement.date}</p>
                  </div>
                  {announcement.urgent && (
                    <Badge className="bg-accent text-accent-foreground font-body text-xs">
                      Urgent
                    </Badge>
                  )}
                </div>
              </div>
            ))}
            <Button 
              variant="outline" 
              className="w-full font-body"
              onClick={() => onTabChange('announcements')}
            >
              View All Announcements
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-portal-border">
        <CardHeader>
          <CardTitle className="font-heading">Quick Actions</CardTitle>
          <CardDescription className="font-body">
            Frequently used features for quick access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 font-body"
              onClick={() => onTabChange('attendance')}
            >
              <TrendingUp className="h-5 w-5" />
              Check Attendance
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 font-body"
              onClick={() => onTabChange('materials')}
            >
              <BookOpen className="h-5 w-5" />
              Study Materials
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 font-body"
              onClick={() => onTabChange('events')}
            >
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 font-body"
              onClick={() => onTabChange('clubs')}
            >
              <Users className="h-5 w-5" />
              Join Clubs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};