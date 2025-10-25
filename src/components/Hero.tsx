import logo from "@/assets/logo.png";
import { Waitlist } from "./Waitlist";
import { Chrome, Info, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-background mt-16 py-8">
      <div className="w-full max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto text-center">
        {/* Logo - Much smaller for small screens */}
        <div className="relative inline-block mb-6 md:mb-8 lg:mb-12">
          <div className="absolute -inset-1 sm:-inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse"></div>
          <div className="relative bg-background rounded-full p-2 sm:p-4 md:p-6">
            <img
              src={logo}
              alt="AiDash"
              className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 2xl:w-96 rounded-lg mx-auto"
            />
          </div>
        </div>

        {/* Typography - Much more conservative */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-foreground leading-tight">
          Manage all your chats in one dashboard
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 lg:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto leading-relaxed">
          A local dashboard to organize, search, and manage all your conversations
          across multiple platforms with AI-powered features.
        </p>

        {/* Button - Smaller for small screens */}
        <div className="relative inline-flex mb-4 md:mb-6 lg:mb-8 group">
          <button
            disabled
            className="inline-flex items-center gap-1 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 cursor-not-allowed hover:scale-105"
          >
            <Chrome className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            Add to Chrome
            <Info className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 opacity-70" />
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            Coming soon - Join waitlist
          </div>
        </div>

        {/* Compatibility icons - Much smaller */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8">
          <div className="flex items-center gap-1 sm:gap-2">
            <a title="chatgpt" className="flex items-center">
              <img
                alt="ChatGPT"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg/256px-ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg.png?20241228174050"
              />
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <a title="grok, xai" className="flex items-center">
              <img
                alt="xAI"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/XAI.png?20230713074949"
              />
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <a title="DeepSeek" className="flex items-center">
              <img
                alt="DeepSeek AI icon."
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DeepSeek-icon.svg/512px-DeepSeek-icon.svg.png?20250630230357"
              />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-2 md:mt-3 lg:mt-4">
          Fully compatible with leading AI assistants.
        </p>
      </div>

      {/* Scroll indicator - Smaller */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
        <p className="text-xs sm:text-sm text-muted-foreground mb-1 animate-pulse">
          Discover more
        </p>
        <div className="relative">
          <div className="absolute -inset-1 sm:-inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse opacity-50"></div>
          <div className="relative bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full p-1 sm:p-2 md:p-3 shadow-lg">
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <Waitlist />
    </section>
  );
};