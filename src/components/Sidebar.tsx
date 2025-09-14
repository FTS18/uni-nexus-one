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
  LogOut,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
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
  isCollapsed, 
  onToggleCollapse 
}: SidebarProps) => {
  return (
    <div className={cn(
      "bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="font-heading text-lg font-bold text-sidebar-foreground">
              PEC Portal
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
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
            >
              <Icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
              {!isCollapsed && <span>{item.label}</span>}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-sidebar-border space-y-2">
        <div className={cn("flex", isCollapsed ? "justify-center" : "justify-between items-center")}>
          {!isCollapsed && <div className="flex-1" />}
          <ThemeToggle />
        </div>
        <Button
          variant="ghost"
          className={cn(
            "w-full text-destructive hover:bg-destructive/10 font-body",
            isCollapsed ? "justify-center px-2" : "justify-start"
          )}
          onClick={onLogout}
        >
          <LogOut className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};