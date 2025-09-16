import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  CalendarDays, 
  BarChart3, 
  Megaphone, 
  Map, 
  Search, 
  MessageSquare, 
  UserCheck,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  isCollapsed: boolean;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "clubs", label: "Clubs", icon: Users },
  { id: "timetable", label: "Timetable", icon: Calendar },
  { id: "materials", label: "Study Materials", icon: BookOpen },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "attendance", label: "Attendance", icon: BarChart3 },
  { id: "announcements", label: "Announcements", icon: Megaphone },
  { id: "map", label: "Campus Map", icon: Map },
  { id: "lost-found", label: "Lost & Found", icon: Search },
  { id: "forum", label: "Student Forum", icon: MessageSquare },
  { id: "directory", label: "Faculty Directory", icon: UserCheck },
];

export const Sidebar = ({ 
  activeTab, 
  onTabChange, 
  onLogout, 
  isCollapsed 
}: SidebarProps) => {
  return (
    <div className={cn(
      "bg-sidebar border-r border-sidebar-border flex flex-col h-full",
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-center h-16 shrink-0">
          <h2 className={cn(
            "font-heading text-lg font-bold text-sidebar-foreground whitespace-nowrap transition-opacity duration-200",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}>
            PEC Portal
          </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent font-body",
                isActive && "bg-accent text-accent-foreground hover:bg-accent/90",
                isCollapsed && "justify-center px-2"
              )}
              onClick={() => onTabChange(item.id)}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={cn("h-4 w-4 shrink-0", !isCollapsed && "mr-3")} />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-sidebar-border mt-auto space-y-2 shrink-0">
        <Button
          variant="ghost"
          className={cn(
            "w-full text-destructive hover:bg-destructive/10 font-body",
            isCollapsed ? "justify-center px-2" : "justify-start"
          )}
          onClick={onLogout}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className={cn("h-4 w-4 shrink-0", !isCollapsed && "mr-3")} />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};

