"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPageContent } from "@/data/pageContents";

export default function ReflectionsPage() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get static content instead of fetching from API
    const result = getPageContent("4");

    if (result.error) {
      setError(result.message || "Failed to load content");
    } else {
      setContent(result.content);
    }
  }, []);

  return (
    <main>
      <Header />

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Reflections</h1>

          {!content && !error && (
            <div className="py-16 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              <p className="mt-4">Loading content...</p>
            </div>
          )}

          {error && (
            <div className="py-16 text-center text-red-600">
              <p>{error}</p>
            </div>
          )}

          {content && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
