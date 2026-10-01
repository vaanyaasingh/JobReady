import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

// Load other pages on demand so the landing page doesn't download the whole app
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ProfileSetup = lazy(() => import("./pages/ProfileSetup"));
const Profile = lazy(() => import("./pages/Profile"));
const Assessment = lazy(() => import("./pages/Assessment"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Learning = lazy(() => import("./pages/Learning"));
const Resume = lazy(() => import("./pages/Resume"));
const AITutor = lazy(() => import("./pages/AITutor"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/tutor" element={<AITutor />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
