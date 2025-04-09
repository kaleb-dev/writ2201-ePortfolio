"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DevicePage() {
  return (
    <main>
      <Header />

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">
            Ryobi Joiner JM82K (2011) Device Page
          </h1>
          <div className="my-8">
            <img
              src="https://ucarecdn.com/dbeec014-9029-41e3-adfb-2cc825a05497/-/format/auto/"
              alt="Ryobi Joiner"
              className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
            />
            <div className="text-center mt-2">
              <a
                href="https://www.ifixit.com/Device/Ryobi_Joiner_JM82K_2011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View the device page on iFixit
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            This project involved creating a step-by-step repair guide for a
            device lacking proper documentation on iFixit. We selected the Ryobi
            Joiner JM82K (2011), a woodworking power tool with limited repair
            resources. Our goal was to produce a clear, accurate guide focused
            on a common battery-related issue.
          </p>

          <p className="mb-4">
            A key part of the project was using Search Engine Optimization (SEO)
            to make the guide easier to find online. SEO involves using keywords
            that match what users search for—like "Ryobi JM82K battery
            replacement." By including these phrases in the guide and summary,
            we improved its visibility and accessibility for users needing
            repair help.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">Device Selection</h3>
          <p className="mb-4">
            We chose the Ryobi Joiner from iFixit's list of unassigned devices
            due to its relevance and lack of existing repair content. Backup
            options were prepared in case of reassignment. Early research
            confirmed the device's repairability and the availability of
            reliable sources.
          </p>

          <h3 className="text-xl font-medium mb-2">Proposal Submission</h3>
          <p className="mb-4">
            We submitted a proposal to iFixit explaining the need for a battery
            replacement guide. The proposal included an overview of the device's
            issues and supporting sources such as manuals and user forums.
          </p>

          <h3 className="text-xl font-medium mb-2">Guide Development</h3>
          <p className="mb-4">After approval, we developed the guide by:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Writing a search-optimized summary to improve SEO</li>
            <li>Researching technical specifications</li>
            <li>Drafting clear, step-by-step repair instructions</li>
            <li>
              Revising based on peer feedback to ensure clarity and accuracy
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Skills Applied</h3>
          <p className="font-medium mb-1">Research:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Located trustworthy sources and identified common issues</li>
            <li>Used effective search tools to narrow results</li>
          </ul>

          <p className="font-medium mb-1">Writing:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Organized steps clearly with consistent formatting</li>
            <li>Used simple, instructional language</li>
            <li>Followed iFixit's structure and tone</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Conclusion</h3>
          <p>
            This project strengthened our skills in technical writing, research,
            and SEO. We contributed practical repair content for a widely used
            tool while learning how to present information that's accurate,
            accessible, and easy to find. The final guide helps support
            self-repair and contributes to a more sustainable approach to device
            maintenance.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
