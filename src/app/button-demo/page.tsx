"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 p-8 min-h-screen transition-colors">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Button States Demo
          </h1>
          <div className="space-x-4">
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              onClick={() => setTheme("light")}
              disabled={theme === "light"}
            >
              Light Theme
            </button>
            <button
              className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50"
              onClick={() => setTheme("dark")}
              disabled={theme === "dark"}
            >
              Dark Theme
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Default State */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Default
              </h2>
              <Button size="lg" className="px-8 py-3 text-base">
                Generate
              </Button>
            </div>

            {/* Hover State */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Hover
              </h2>
              <Button 
                size="lg" 
                className="px-8 py-3 text-base bg-primary/90 hover:bg-primary/80 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Generate
              </Button>
            </div>

            {/* Disabled State */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Disabled
              </h2>
              <Button size="lg" className="px-8 py-3 text-base" disabled>
                Generate
              </Button>
            </div>
          </div>

          {/* Theme Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
              {theme === "light" ? "Theme" : "Dark"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Theme Default */}
              <div className="text-center">
                <Button size="lg" className="px-8 py-3 text-base">
                  Generate
                </Button>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Default</p>
              </div>

              {/* Theme Hover */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="px-8 py-3 text-base bg-primary/90 hover:bg-primary/80 dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                  Generate
                </Button>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Hover</p>
              </div>

              {/* Theme Disabled */}
              <div className="text-center">
                <Button size="lg" className="px-8 py-3 text-base" disabled>
                  Generate
                </Button>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Disabled</p>
              </div>
            </div>
          </div>

          {/* Button/Primary Section */}
          <div className="mt-16">
            <h3 className="text-lg font-medium mb-6 text-gray-800 dark:text-gray-200">
              Button/Primary
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button size="lg" className="px-8 py-3 text-base">
                  Generate
                </Button>
                <span className="text-sm text-gray-600 dark:text-gray-400">Default state</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  size="lg" 
                  className="px-8 py-3 text-base bg-primary/90 hover:bg-primary/80 dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                  Generate
                </Button>
                <span className="text-sm text-gray-600 dark:text-gray-400">Hover state</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button size="lg" className="px-8 py-3 text-base" disabled>
                  Generate
                </Button>
                <span className="text-sm text-gray-600 dark:text-gray-400">Disabled state</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
