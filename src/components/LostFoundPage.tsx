import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, MapPin, Clock, User, Phone, Mail, Filter, AlertCircle } from "lucide-react";

interface LostFoundItem {
  id: number;
  title: string;
  description: string;
  type: "lost" | "found";
  category: string;
  location: string;
  date: string;
  contactName: string;
  contactInfo: string;
  imageUrl?: string;
  status: "active" | "resolved";
  tags: string[];
}

const categories = ["All", "Electronics", "Books", "Clothing", "Accessories", "Documents", "Sports", "Other"];

const lostFoundItems: LostFoundItem[] = [
  {
    id: 1,
    title: "iPhone 13 Pro - Space Gray",
    description: "Lost my iPhone 13 Pro in space gray color. Has a blue case with initials 'RK' on the back. Contains important work data.",
    type: "lost",
    category: "Electronics",
    location: "Library - 2nd Floor",
    date: "2024-01-15",
    contactName: "Rahul Kumar",
    contactInfo: "rahul.k@pec.edu.in",
    status: "active",
    tags: ["phone", "iphone", "blue case"]
  },
  {
    id: 2,
    title: "Found: Data Structures Textbook",
    description: "Found a Data Structures and Algorithms textbook by Cormen. Has handwritten notes and name 'Priya S.' on the first page.",
    type: "found",
    category: "Books",
    location: "CS Department - Room 301",
    date: "2024-01-14",
    contactName: "Alex M.",
    contactInfo: "+91-98765-43210",
    status: "active",
    tags: ["textbook", "cs", "notes"]
  },
  {
    id: 3,
    title: "Black North Face Jacket",
    description: "Lost my black North Face jacket during the sports meet. Size M, has a small tear on the left sleeve.",
    type: "lost",
    category: "Clothing",
    location: "Sports Complex",
    date: "2024-01-13",
    contactName: "Sarah P.",
    contactInfo: "sarah.p@pec.edu.in",
    status: "active",
    tags: ["jacket", "black", "sports"]
  },
  {
    id: 4,
    title: "Found: Silver Watch",
    description: "Found a silver Casio watch near the cafeteria. Digital display, black strap. Looks expensive.",
    type: "found",
    category: "Accessories",
    location: "Student Cafeteria",
    date: "2024-01-12",
    contactName: "Mike D.",
    contactInfo: "+91-87654-32109",
    status: "active",
    tags: ["watch", "silver", "casio"]
  },
  {
    id: 5,
    title: "Student ID Card - Lost",
    description: "Lost my student ID card somewhere between hostel and academic block. Name: Anita Sharma, Roll No: 21CSE045",
    type: "lost",
    category: "Documents",
    location: "Between Hostel & Academic Block",
    date: "2024-01-11",
    contactName: "Anita Sharma",
    contactInfo: "anita.s@pec.edu.in",
    status: "resolved",
    tags: ["id", "student card", "documents"]
  },
  {
    id: 6,
    title: "Found: Wireless Earbuds",
    description: "Found Apple AirPods Pro in a white case. Found in the computer lab during evening hours.",
    type: "found",
    category: "Electronics",
    location: "Computer Lab - Block C",
    date: "2024-01-10",
    contactName: "Dev K.",
    contactInfo: "dev.k@pec.edu.in",
    status: "active",
    tags: ["airpods", "white", "wireless"]
  }
];

export const LostFoundPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("all");
  const [showNewItemDialog, setShowNewItemDialog] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    type: "lost" as "lost" | "found",
    category: "Other",
    location: "",
    contactName: "",
    contactInfo: "",
    tags: ""
  });

  const filteredItems = lostFoundItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesTab = activeTab === "all" || 
                      (activeTab === "lost" && item.type === "lost") ||
                      (activeTab === "found" && item.type === "found") ||
                      (activeTab === "resolved" && item.status === "resolved");
    return matchesSearch && matchesCategory && matchesTab;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Electronics": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Books": return "bg-green-100 text-green-800 border-green-200";
      case "Clothing": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Accessories": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Documents": return "bg-red-100 text-red-800 border-red-200";
      case "Sports": return "bg-teal-100 text-teal-800 border-teal-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleCreateItem = () => {
    // Here you would normally save to database
    console.log("Creating item:", newItem);
    setShowNewItemDialog(false);
    setNewItem({
      title: "",
      description: "",
      type: "lost",
      category: "Other",
      location: "",
      contactName: "",
      contactInfo: "",
      tags: ""
    });
  };

  const lostCount = lostFoundItems.filter(item => item.type === "lost" && item.status === "active").length;
  const foundCount = lostFoundItems.filter(item => item.type === "found" && item.status === "active").length;
  const resolvedCount = lostFoundItems.filter(item => item.status === "resolved").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-bold">Lost & Found Portal</h1>
          <p className="font-body text-muted-foreground">
            Help your fellow students by reporting lost or found items on campus.
          </p>
        </div>
        <Dialog open={showNewItemDialog} onOpenChange={setShowNewItemDialog}>
          <DialogTrigger asChild>
            <Button className="font-body bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Report Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading">Report Lost or Found Item</DialogTitle>
              <DialogDescription className="font-body">
                Help others by reporting items you've lost or found on campus.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="font-body">Type</Label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="lost"
                      checked={newItem.type === "lost"}
                      onChange={(e) => setNewItem({ ...newItem, type: e.target.value as "lost" | "found" })}
                      className="text-accent"
                    />
                    <span className="font-body">Lost Item</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="found"
                      checked={newItem.type === "found"}
                      onChange={(e) => setNewItem({ ...newItem, type: e.target.value as "lost" | "found" })}
                      className="text-accent"
                    />
                    <span className="font-body">Found Item</span>
                  </label>
                </div>
              </div>
              <div>
                <Label htmlFor="title" className="font-body">Title</Label>
                <Input
                  id="title"
                  placeholder="Brief description of the item"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="font-body"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category" className="font-body">Category</Label>
                  <select 
                    id="category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    className="w-full p-2 border border-input rounded-md font-body"
                  >
                    {categories.filter(cat => cat !== "All").map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="location" className="font-body">Location</Label>
                  <Input
                    id="location"
                    placeholder="Where was it lost/found?"
                    value={newItem.location}
                    onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                    className="font-body"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description" className="font-body">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Detailed description to help identify the item"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="min-h-24 font-body"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName" className="font-body">Your Name</Label>
                  <Input
                    id="contactName"
                    placeholder="Full name"
                    value={newItem.contactName}
                    onChange={(e) => setNewItem({ ...newItem, contactName: e.target.value })}
                    className="font-body"
                  />
                </div>
                <div>
                  <Label htmlFor="contactInfo" className="font-body">Contact Info</Label>
                  <Input
                    id="contactInfo"
                    placeholder="Email or phone number"
                    value={newItem.contactInfo}
                    onChange={(e) => setNewItem({ ...newItem, contactInfo: e.target.value })}
                    className="font-body"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="tags" className="font-body">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="color, brand, size"
                  value={newItem.tags}
                  onChange={(e) => setNewItem({ ...newItem, tags: e.target.value })}
                  className="font-body"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleCreateItem} className="font-body bg-accent text-accent-foreground hover:bg-accent/90">
                  Submit Report
                </Button>
                <Button variant="outline" onClick={() => setShowNewItemDialog(false)} className="font-body">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-portal-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Lost Items</p>
                <p className="font-heading text-2xl font-bold text-red-600">{lostCount}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-portal-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Found Items</p>
                <p className="font-heading text-2xl font-bold text-green-600">{foundCount}</p>
              </div>
              <Search className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-portal-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">Resolved</p>
                <p className="font-heading text-2xl font-bold text-blue-600">{resolvedCount}</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">✓</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="border-portal-border">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items, descriptions, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-body"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`font-body ${
                    selectedCategory === category 
                      ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                      : ""
                  }`}
                >
                  <Filter className="h-3 w-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" className="font-body">All Items</TabsTrigger>
          <TabsTrigger value="lost" className="font-body">Lost ({lostCount})</TabsTrigger>
          <TabsTrigger value="found" className="font-body">Found ({foundCount})</TabsTrigger>
          <TabsTrigger value="resolved" className="font-body">Resolved ({resolvedCount})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className={`border-portal-border ${
              item.status === "resolved" ? "opacity-60" : ""
            }`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`font-body text-xs ${
                        item.type === "lost" ? "bg-red-100 text-red-800 border-red-200" : "bg-green-100 text-green-800 border-green-200"
                      }`}>
                        {item.type === "lost" ? "Lost" : "Found"}
                      </Badge>
                      <Badge className={`font-body text-xs ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </Badge>
                      {item.status === "resolved" && (
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-body text-xs">
                          Resolved
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span className="font-body">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="font-body">{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-body text-sm">{item.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="font-body text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-portal-border">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span className="font-body">{item.contactName}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="font-body">
                      <Mail className="h-3 w-3 mr-1" />
                      Contact
                    </Button>
                    {item.status === "active" && (
                      <Button variant="outline" size="sm" className="font-body">
                        Mark as Resolved
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-heading text-lg font-semibold mb-2">No items found</h3>
          <p className="font-body text-muted-foreground">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}
    </div>
  );
};