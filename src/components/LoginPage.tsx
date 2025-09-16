import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GraduationCap, Lock, Mail, User, X } from "lucide-react";

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && name && rollNumber) {
      onLogin(email);
    }
  };

  const handleGuestLogin = () => {
    onLogin("guest@pec.edu.in");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-accent-foreground" />
          </div>
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">PEC Student Portal</h1>
            <p className="font-body text-muted-foreground mt-2">
              Your gateway to campus life at Punjab Engineering College
            </p>
          </div>
        </div>

        {/* Login/Signup Form */}
        <Card className="border-portal-border relative">
          <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 text-muted-foreground z-10"
              onClick={handleGuestLogin}
              aria-label="Close"
          >
              <X className="h-4 w-4" />
          </Button>
          <CardHeader className="space-y-1">
            <CardTitle className="font-heading text-xl">Welcome Back</CardTitle>
            <CardDescription className="font-body">
              Sign in to access your student dashboar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="font-body">Sign In</TabsTrigger>
                <TabsTrigger value="signup" className="font-body">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@pec.edu.in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 font-body"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-body">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 font-body"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full font-body bg-accent text-accent-foreground hover:bg-accent/90">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="font-body">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 font-body"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roll-number" className="font-body">Roll Number</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="roll-number"
                        type="text"
                        placeholder="e.g. 21CSE123"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        className="pl-10 font-body"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="font-body">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your.email@pec.edu.in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 font-body"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="font-body">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 font-body"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full font-body bg-accent text-accent-foreground hover:bg-accent/90">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-4 text-center text-sm">
                <Button variant="link" onClick={handleGuestLogin} className="font-body text-muted-foreground">
                    or continue as a guest
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

