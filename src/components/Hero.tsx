import logo from "@/assets/logo.png";
import { Waitlist } from "./Waitlist";
import { Chrome, Info, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 bg-background mt-12 sm:mt-16">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Logo with laser effect border - Ultra responsive sizing */}
        <div className="relative inline-block mb-6 sm:mb-8 md:mb-12">
          <div className="absolute -inset-1 sm:-inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse"></div>
          <div className="relative bg-background rounded-full p-2 sm:p-4 md:p-6">
            <img
              src={logo}
              alt="AiDash"
              className="w-48 xs:w-56 sm:w-60 md:w-80 lg:w-96 rounded-lg max-w-full"
            />
          </div>
        </div>

        {/* Ultra responsive typography */}
        <h1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-foreground leading-tight px-2">
          Manage all your chats in one dashboard
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-3">
          A local dashboard to organize, search, and manage all your conversations
          across multiple platforms with AI-powered features.
        </p>

        {/* Chrome Extension Button - Ultra responsive sizing */}
        <div className="relative inline-flex mb-4 sm:mb-6 md:mb-8 group">
          <button
            disabled
            className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 cursor-not-allowed hover:scale-105 scale-90 sm:scale-100"
          >
            <Chrome className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="whitespace-nowrap">Add to Chrome</span>
            <Info className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 opacity-70" />
          </button>

          {/* Tooltip - Hide on very small screens */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 hidden xs:block">
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            Coming soon - Join waitlist
          </div>
        </div>

        {/* Compatibility section - Ultra responsive spacing */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 px-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <a title="chatgpt" className="flex items-center">
              <img
                alt="ChatGPT"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg/256px-ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg.png?20241228174050"
              />
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <a title="grok, xai" className="flex items-center">
              <img
                alt="xAI"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/XAI.png?20230713074949"
              />
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <a title="DeepSeek" className="flex items-center">
              <img
                alt="DeepSeek AI icon."
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DeepSeek-icon.svg/512px-DeepSeek-icon.svg.png?20250630230357"
              />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 md:mt-4">
          Fully compatible with leading AI assistants.
        </p>
      </div>

      {/* Animated Scroll Indicator - Ultra responsive positioning */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5 sm:gap-1 md:gap-2">
        <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1 md:mb-2 animate-pulse hidden xs:block">
          Discover more
        </p>
        <div className="relative">
          <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse opacity-50"></div>
          <div className="relative bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg">
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <Waitlist />
    </section>
  );
};