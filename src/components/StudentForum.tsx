import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search, MessageCircle, ThumbsUp, Clock, User, Hash, Filter, TrendingUp } from "lucide-react";

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  authorId: string;
  category: string;
  timestamp: string;
  likes: number;
  replies: number;
  tags: string[];
  isPopular?: boolean;
}

interface Reply {
  id: number;
  postId: number;
  content: string;
  author: string;
  timestamp: string;
  likes: number;
}

const categories = ["All", "Academic", "Campus Life", "Events", "Technical", "General", "Help"];

const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Best Study Spots on Campus?",
    content: "Hey everyone! I'm looking for quiet places to study on campus. The library gets too crowded during exam season. Any hidden gems you'd recommend?",
    author: "Sarah K.",
    authorId: "sarah.k",
    category: "Campus Life",
    timestamp: "2 hours ago",
    likes: 24,
    replies: 8,
    tags: ["study", "campus", "quiet"],
    isPopular: true
  },
  {
    id: 2,
    title: "Data Structures Assignment Help",
    content: "Struggling with implementing binary search trees in C++. Can someone explain the deletion algorithm? Professor's explanation was too fast.",
    author: "Rahul M.",
    authorId: "rahul.m",
    category: "Academic",
    timestamp: "4 hours ago",
    likes: 12,
    replies: 15,
    tags: ["coding", "help", "datastructures"]
  },
  {
    id: 3,
    title: "Tech Fest 2024 - Call for Volunteers",
    content: "We need enthusiastic volunteers for this year's tech fest! Great opportunity to network and gain experience. Multiple departments available.",
    author: "Events Team",
    authorId: "events.official",
    category: "Events",
    timestamp: "1 day ago",
    likes: 45,
    replies: 23,
    tags: ["techfest", "volunteer", "opportunity"],
    isPopular: true
  },
  {
    id: 4,
    title: "Mess Food Quality Discussion",
    content: "Can we discuss the recent changes in mess menu? Some improvements but still room for better variety in vegetarian options.",
    author: "Priya S.",
    authorId: "priya.s",
    category: "Campus Life",
    timestamp: "2 days ago",
    likes: 18,
    replies: 31,
    tags: ["mess", "food", "feedback"]
  },
  {
    id: 5,
    title: "Internship Opportunities - Summer 2024",
    content: "Sharing some great internship opportunities I found. Google, Microsoft, and local startups are hiring. Let's help each other!",
    author: "Alex P.",
    authorId: "alex.p",
    category: "Academic",
    timestamp: "3 days ago",
    likes: 67,
    replies: 19,
    tags: ["internship", "career", "opportunities"],
    isPopular: true
  }
];

const replies: Reply[] = [
  {
    id: 1,
    postId: 1,
    content: "The 3rd floor of the CS building has some quiet corners. Also, try the garden area behind the library!",
    author: "Mike D.",
    timestamp: "1 hour ago",
    likes: 8
  },
  {
    id: 2,
    postId: 1,
    content: "Rooftop of the main building is peaceful, but check if it's accessible.",
    author: "Nina K.",
    timestamp: "45 minutes ago",
    likes: 5
  }
];

export const StudentForum = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showNewPostDialog, setShowNewPostDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "General",
    tags: ""
  });

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPosts = forumPosts.filter(post => post.isPopular).slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Campus Life": return "bg-green-100 text-green-800 border-green-200";
      case "Events": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Technical": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Help": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleCreatePost = () => {
    // Here you would normally save to database
    console.log("Creating post:", newPost);
    setShowNewPostDialog(false);
    setNewPost({ title: "", content: "", category: "General", tags: "" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-bold">Student Forum</h1>
          <p className="font-body text-muted-foreground">
            Connect, discuss, and share ideas with your fellow students.
          </p>
        </div>
        <Dialog open={showNewPostDialog} onOpenChange={setShowNewPostDialog}>
          <DialogTrigger asChild>
            <Button className="font-body bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading">Create New Post</DialogTitle>
              <DialogDescription className="font-body">
                Share your thoughts, ask questions, or start a discussion.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="font-body">Title</Label>
                <Input
                  id="title"
                  placeholder="What's your post about?"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="font-body"
                />
              </div>
              <div>
                <Label htmlFor="category" className="font-body">Category</Label>
                <select 
                  id="category"
                  value={newPost.category}
                  onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  className="w-full p-2 border border-input rounded-md font-body"
                >
                  {categories.filter(cat => cat !== "All").map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="content" className="font-body">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Share your thoughts..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="min-h-32 font-body"
                />
              </div>
              <div>
                <Label htmlFor="tags" className="font-body">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="study, help, coding"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                  className="font-body"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleCreatePost} className="font-body bg-accent text-accent-foreground hover:bg-accent/90">
                  Create Post
                </Button>
                <Button variant="outline" onClick={() => setShowNewPostDialog(false)} className="font-body">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filter */}
          <Card className="border-portal-border">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search posts, tags, or content..."
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

          {/* Posts */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-portal-border hover:border-accent/50 transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`font-body text-xs ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </Badge>
                        {post.isPopular && (
                          <Badge className="bg-accent text-accent-foreground font-body text-xs">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="font-heading text-lg hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="font-body">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span className="font-body">{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-body text-sm line-clamp-2">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="font-body text-xs">
                        <Hash className="h-2 w-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-portal-border">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="font-body text-xs">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="font-body text-xs">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {post.replies} replies
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="font-body">
                      View Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-2">No posts found</h3>
              <p className="font-body text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Posts */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {popularPosts.map((post) => (
                <div key={post.id} className="p-3 bg-portal-surface rounded-lg hover:bg-portal-hover transition-colors cursor-pointer">
                  <h4 className="font-body font-medium text-sm line-clamp-2 mb-1">{post.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-body">{post.likes} likes</span>
                    <span className="font-body">{post.replies} replies</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Forum Stats */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Forum Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-body text-sm">Total Posts</span>
                <span className="font-body font-medium">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm">Active Users</span>
                <span className="font-body font-medium">342</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm">Today's Posts</span>
                <span className="font-body font-medium">23</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-portal-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full font-body justify-start">
                <Plus className="h-3 w-3 mr-2" />
                Ask a Question
              </Button>
              <Button variant="outline" size="sm" className="w-full font-body justify-start">
                <MessageCircle className="h-3 w-3 mr-2" />
                Join Discussion
              </Button>
              <Button variant="outline" size="sm" className="w-full font-body justify-start">
                <TrendingUp className="h-3 w-3 mr-2" />
                View Popular
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};