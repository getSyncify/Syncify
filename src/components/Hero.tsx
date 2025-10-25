import logo from "@/assets/logo.png";
import { Waitlist } from "./Waitlist";
import { Chrome, Info, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-background mt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo with laser effect border */}
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse"></div>
          <div className="relative bg-background rounded-full p-6">
            <img
              src={logo}
              alt="AiDash"
              className="w-80 md:w-96 rounded-lg"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Manage all your chats in one dashboard
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A local dashboard to organize, search, and manage all your conversations
          across multiple platforms with AI-powered features.
        </p>

        {/* Chrome Extension Button */}
        <div className="relative inline-flex mb-8 group">
          <button
            disabled
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-80 cursor-not-allowed hover:scale-105"
          >
            <Chrome className="w-6 h-6" />
            Add to Chrome
            <Info className="w-4 h-4 opacity-70" />
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            Coming soon - Join waitlist for early access
          </div>
        </div>

        {/* Compatibility section */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <a title="Yar, Public domain, via Wikimedia Commons">
              <img width="40" alt="ChatGPT Search logo – black square background with rounded corners – Accurately based on the website's favicon.ico" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg/256px-ChatGPT_Search_logo_Black_Square_-_rounded_corners.svg.png?20241228174050" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a title="SalimBinYousuf0, CC0, via Wikimedia Commons">
              <img width="60" alt="xAI" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/XAI.png?20230713074949" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a title="DeepSeek, MIT <http://opensource.org/licenses/mit-license.php>, via Wikimedia Commons">
              <img width="50" alt="DeepSeek AI icon." src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DeepSeek-icon.svg/512px-DeepSeek-icon.svg.png?20250630230357" />
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Fully compatible with leading AI assistants.
        </p>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground mb-2 animate-pulse">
          Discover more
        </p>
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse opacity-50"></div>
          <div className="relative bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full p-3 shadow-lg">
            <ChevronDown className="w-6 h-6 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <Waitlist />
    </section>
  );
};