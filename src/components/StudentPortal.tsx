import { useState } from "react";
import { LoginPage } from "./LoginPage";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { ClubsPage } from "./ClubsPage";
import { TimetablePage } from "./TimetablePage";
import { CampusMapPage } from "./CampusMapPage";
import { StudentForum } from "./StudentForum";
import { LostFoundPage } from "./LostFoundPage";
import { AttendancePage } from "./AttendancePage";
import { useToast } from "@/hooks/use-toast";

// Placeholder components for remaining pages
const StudyMaterials = () => (
  <div className="space-y-6">
    <h1 className="font-heading text-3xl font-bold">Study Materials</h1>
    <p className="font-body text-muted-foreground">
      Google Drive integration will be implemented here to fetch files from "pec students grp googlew drive folder".
    </p>
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
      <p className="font-body">📁 Ready for Google Drive API integration</p>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="space-y-6">
    <h1 className="font-heading text-3xl font-bold">Events & Fest</h1>
    <p className="font-body text-muted-foreground">
      Dynamic event listings and image gallery for college fest will be displayed here.
    </p>
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
      <p className="font-body">🎉 Event management system ready</p>
    </div>
  </div>
);

const AnnouncementsPage = () => (
  <div className="space-y-6">
    <h1 className="font-heading text-3xl font-bold">Announcements</h1>
    <p className="font-body text-muted-foreground">
      Central notice board for college announcements with yellow highlighting for urgent messages.
    </p>
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
      <p className="font-body">📢 Announcement system ready</p>
    </div>
  </div>
);

const FacultyDirectory = () => (
  <div className="space-y-6">
    <h1 className="font-heading text-3xl font-bold">Faculty Directory</h1>
    <p className="font-body text-muted-foreground">
      Searchable directory of professors and staff with contact information.
    </p>
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
      <p className="font-body">👥 Faculty directory ready</p>
    </div>
  </div>
);

export const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    toast({
      title: "Welcome to PEC Student Portal!",
      description: "You have successfully logged in.",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    setActiveTab("dashboard");
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard userEmail={userEmail} onTabChange={setActiveTab} />;
      case "clubs":
        return <ClubsPage />;
      case "timetable":
        return <TimetablePage />;
      case "materials":
        return <StudyMaterials />;
      case "events":
        return <EventsPage />;
      case "attendance":
        return <AttendancePage />;
      case "announcements":
        return <AnnouncementsPage />;
      case "map":
        return <CampusMapPage />;
      case "lost-found":
        return <LostFoundPage />;
      case "forum":
        return <StudentForum />;
      case "directory":
        return <FacultyDirectory />;
      default:
        return <Dashboard userEmail={userEmail} onTabChange={setActiveTab} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};