import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Users, Search, Calendar, Award } from "lucide-react";
import { useState } from "react";

const clubs = [
  {
    id: 1,
    name: "Computer Science Society",
    description: "Promoting coding culture and organizing hackathons, workshops, and tech talks for CS students.",
    category: "Technical",
    members: 245,
    established: "2015",
    website: "https://css.pec.edu.in",
    events: 12,
    featured: true
  },
  {
    id: 2,
    name: "Robotics Club",
    description: "Building autonomous robots and participating in national level competitions like Robocon.",
    category: "Technical",
    members: 89,
    established: "2018",
    website: "https://robotics.pec.edu.in",
    events: 8,
    featured: true
  },
  {
    id: 3,
    name: "Literary Society",
    description: "Fostering creativity through poetry, debates, creative writing, and literary events.",
    category: "Cultural",
    members: 156,
    established: "2010",
    website: "https://literature.pec.edu.in",
    events: 15,
    featured: false
  },
  {
    id: 4,
    name: "Photography Club",
    description: "Capturing campus life and organizing photography workshops, exhibitions, and photo walks.",
    category: "Creative",
    members: 134,
    established: "2016",
    website: "https://photography.pec.edu.in",
    events: 10,
    featured: false
  },
  {
    id: 5,
    name: "Entrepreneurship Cell",
    description: "Supporting student startups with mentorship, funding opportunities, and business plan competitions.",
    category: "Business",
    members: 178,
    established: "2017",
    website: "https://ecell.pec.edu.in",
    events: 6,
    featured: true
  },
  {
    id: 6,
    name: "Music Society",
    description: "Promoting musical talent through concerts, open mic nights, and music production workshops.",
    category: "Cultural",
    members: 203,
    established: "2012",
    website: "https://music.pec.edu.in",
    events: 20,
    featured: false
  },
  {
    id: 7,
    name: "Drama Club",
    description: "Staging theatrical performances, street plays, and organizing drama workshops.",
    category: "Cultural",
    members: 98,
    established: "2014",
    website: "https://drama.pec.edu.in",
    events: 9,
    featured: false
  },
  {
    id: 8,
    name: "Environmental Club",
    description: "Promoting sustainability through tree plantation drives, awareness campaigns, and green initiatives.",
    category: "Social",
    members: 167,
    established: "2011",
    website: "https://environment.pec.edu.in",
    events: 14,
    featured: false
  }
];

const categories = ["All", "Technical", "Cultural", "Creative", "Business", "Social"];

export const ClubsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredClubs = clubs.filter(club => club.featured);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold">Student Clubs</h1>
        <p className="font-body text-muted-foreground">
          Discover and join clubs that match your interests and passion.
        </p>
      </div>

      {/* Featured Clubs */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl font-semibold">Featured Clubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredClubs.map((club) => (
            <Card key={club.id} className="border-portal-border bg-accent/5">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-heading text-lg">{club.name}</CardTitle>
                    <Badge variant="outline" className="mt-1 font-body">
                      {club.category}
                    </Badge>
                  </div>
                  <Badge className="bg-accent text-accent-foreground font-body">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-body text-sm text-muted-foreground line-clamp-2">
                  {club.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span className="font-body">{club.members} members</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="font-body">{club.events} events</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full font-body bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => window.open(club.website, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Join Club
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clubs..."
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
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* All Clubs */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl font-semibold">
          All Clubs {filteredClubs.length !== clubs.length && `(${filteredClubs.length} results)`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredClubs.map((club) => (
            <Card key={club.id} className="border-portal-border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-heading text-lg">{club.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="font-body">
                        {club.category}
                      </Badge>
                      <span className="font-body text-xs text-muted-foreground">
                        Est. {club.established}
                      </span>
                    </div>
                  </div>
                  {club.featured && (
                    <Badge className="bg-accent text-accent-foreground font-body">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-sm text-muted-foreground">
                  {club.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span className="font-body">{club.members} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="font-body">{club.events} events</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="font-body"
                    onClick={() => window.open(club.website, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {filteredClubs.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-heading text-lg font-semibold mb-2">No clubs found</h3>
          <p className="font-body text-muted-foreground">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}
    </div>
  );
};