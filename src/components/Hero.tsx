import logo from "@/assets/logo.png";
import { Waitlist } from "./Waitlist";
import { Chrome, Info, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-background mt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo with laser effect border - Responsive sizing */}
        <div className="relative inline-block mb-8 md:mb-12">
          <div className="absolute -inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse"></div>
          <div className="relative bg-background rounded-full p-4 md:p-6">
            <img
              src={logo}
              alt="AiDash"
              className="w-60 md:w-80 lg:w-96 rounded-lg"
            />
          </div>
        </div>

        {/* Responsive typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
          Manage all your chats in one dashboard
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          A local dashboard to organize, search, and manage all your conversations
          across multiple platforms with AI-powered features.
        </p>

        {/* Chrome Extension Button - Responsive sizing */}
        <div className="relative inline-flex mb-6 md:mb-8 group">
          <button
            disabled
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 cursor-not-allowed hover:scale-105"
          >
            <Chrome className="w-5 h-5 md:w-6 md:h-6" />
            Add to Chrome
            <Info className="w-3 h-3 md:w-4 md:h-4 opacity-70" />
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            Coming soon - Join waitlist for early access
          </div>
        </div>

        {/* Compatibility section - Responsive spacing */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          <div className="flex items-center gap-2">
            <a title="chatgpt">
              <img width="32" alt="ChatGPT" className="w-8 md:w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg/256px-ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg.png?20241228174050" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a title="grok, xai">
              <img width="48" alt="xAI" className="w-12 md:w-14" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/XAI.png?20230713074949" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a title="DeepSeek">
              <img width="40" alt="DeepSeek AI icon." className="w-10 md:w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DeepSeek-icon.svg/512px-DeepSeek-icon.svg.png?20250630230357" />
            </a>
          </div>
        </div>

        <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">
          Fully compatible with leading AI assistants.
        </p>
      </div>

      {/* Animated Scroll Indicator - Responsive positioning */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2">
        <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2 animate-pulse">
          Discover more
        </p>
        <div className="relative">
          <div className="absolute -inset-2 md:-inset-4 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse opacity-50"></div>
          <div className="relative bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full p-2 md:p-3 shadow-lg">
            <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <Waitlist />
    </section>
  );
};