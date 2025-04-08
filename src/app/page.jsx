"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Fast Fix – Coleman Mini Bike Throttle Repair",
      description:
        "Step-by-step guide for repairing the throttle on a Coleman CT200U-AB Mini Bike.",
      image:
        "https://ucarecdn.com/cc4f0a53-fe56-4dc2-8a4a-f1f5aeabfa22/-/format/auto/",
      tags: ["Repair Guide", "Technical Writing", "Visual Instructions"],
      details:
        "This project demonstrates my ability to create clear, concise technical instructions for a mechanical repair process. The guide was designed to help users with varying levels of mechanical experience successfully troubleshoot and fix common throttle issues on the Coleman CT200U-AB Mini Bike.",
    },
    {
      id: 2,
      title: "SEO – Ryobi Joiner JM82K (2011) Device Page",
      description:
        "Comprehensive device page with SEO optimization for the Ryobi Joiner JM82K.",
      image:
        "https://ucarecdn.com/dbeec014-9029-41e3-adfb-2cc825a05497/-/format/auto/",
      tags: ["SEO", "Technical Documentation", "Content Organization"],
      details:
        "This project highlights my skills in creating informative and search-engine-optimized device pages. I created a comprehensive device page for the Ryobi Joiner JM82K (2011) to serve as a resource for users seeking information and repair guidance. The page was published on iFixit and includes sections covering the device's background, identification, common issues, and technical specifications.",
    },
  ];

  return (
    <main>
      <Header />

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Technical Writing Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              A showcase of projects demonstrating my skills in technical
              documentation, SEO optimization, and user-focused content
              creation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-700 mb-4">{project.details}</p>
                  <Link
                    href={project.id === 1 ? "/fastfix" : "/devicepage"}
                    className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
