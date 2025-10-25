import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Workflow, Shield, Tag, FolderTree, FileText, FolderOpen, Search, Network, X } from "lucide-react";
import analyticsChart from "@/assets/analytics-chart.png";
import dashboardStats from "@/assets/dashboard-stats.png";
import foldersView from "@/assets/folders-view.png";
import { useState } from "react";
const features = [
  {
    icon: Sparkles,
    title: "AI Summarization",
    description: "Automatically summarize long conversations to get key insights instantly.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Tag,
    title: "AI Tagging",
    description: "Smart tagging system that categorizes your chats automatically.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Workflow,
    title: "Define workflows and Automations",
    description: "Easy workflow editor.",
    color: "from-gray-500 to-gray-500",
  },
  {
    icon: Shield,
    title: "Data Shield",
    description: "A powerful data privacy shield to keep your data safe from ai platforms leaks.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: FolderTree,
    title: "Smart Organization",
    description: "Intelligent organization of all your sessions in one place.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Notion Exports",
    description: "Easy export your notes and chats to Notion.",
    color: "from-gray-500 to-slate-600",
  },
  {
    icon: FolderOpen,
    title: "Folders Creation",
    description: "Create custom folders to organize your chats your way.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Powerful search to find any session or message instantly.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Network,
    title: "Multi-Platform Support",
    description: "Connect all your messaging platforms in one unified dashboard.",
    color: "from-teal-500 to-blue-500",
  },

];

const screenshots = [
  {
    id: 1,
    title: "Real-time Analytics",
    description: "Track your chat patterns and activity with detailed analytics",
    image: analyticsChart,
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    title: "Dashboard Overview",
    description: "Get a comprehensive view of all your conversations in one place",
    image: dashboardStats,
    color: "from-green-500 to-blue-500",
  },
  {
    id: 3,
    title: "Smart Organization",
    description: "Intelligent folder system to organize your chats efficiently",
    image: foldersView,
    color: "from-purple-500 to-pink-500",
  },
];

export const Features = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleMouseEnter = (imageSrc: string) => {
    setHoveredImage(imageSrc);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const openFullscreen = (imageSrc: string) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      {/* Gradient Separator */}
      <div className="h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 w-full"></div>

      <section id="features" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Everything You Need to <span className="text-primary">Master Your Chats</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered browser extension to organize, search, and analyze all your sessions across multiple platforms (Chatgpt, Grok, Deepseek).
            </p>
          </div>

          {/* Always Visible Screenshots Section with Hover Fullscreen */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">See It In Action</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hover over any screenshot to view it in fullscreen detail
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {screenshots.map((screenshot) => (
                <div
                  key={screenshot.id}
                  className="bg-card border-2 border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 group cursor-pointer"

                >
                  {/* Screenshot Header */}
                  <div className="p-6 text-center border-b border-border/50">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${screenshot.color} flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {screenshot.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{screenshot.description}</p>
                  </div>

                  {/* Screenshot Content */}
                  <div className="p-6" onMouseEnter={() => openFullscreen(screenshot.image)}
                  >
                    <div className="relative bg-gradient-to-br from-card to-card/90 border-2 border-primary/20 rounded-xl p-2 shadow-lg">
                      <div className="relative rounded-lg overflow-hidden bg-background">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full h-auto rounded-lg shadow-inner transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hover Fullscreen Overlay */}
          {hoveredImage && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center p-8 cursor-pointer"
              onClick={handleMouseLeave}
            >
              <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center">
                <div className="absolute top-6 right-6 z-50">
                  <div className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                    <X className="w-6 h-6" />
                  </div>
                </div>
                <img
                  src={hoveredImage}
                  alt="Fullscreen preview"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                  <p className="text-sm font-medium">Click anywhere or move mouse away to close</p>
                </div>
              </div>
            </div>
          )}

          {/* Click Fullscreen Modal */}
          {fullscreenImage && (
            <div
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeFullscreen}
            >
              <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <button
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors duration-200 backdrop-blur-sm border border-white/20"
                  onClick={closeFullscreen}
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={fullscreenImage}
                  alt="Fullscreen view"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <p className="text-sm font-medium">Click anywhere to close</p>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 hover:bg-card hover:shadow-xl hover:border-border transition-all duration-300 group hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Local Dashboard CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-card to-card/80 border border-border/50 rounded-2xl shadow-xl max-w-4xl mx-auto group hover:shadow-2xl transition-all duration-300">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">Local & Secure</span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-3">
              Your Data Never Leaves Your Computer
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete privacy and control. No servers, no cloud storage, no data sharing.
              Everything runs 100% locally on your machine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};