"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FastFixPage() {
  return (
    <main>
      <Header />

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">
            Fast Fix - Coleman Mini Bike Throttle Repair
          </h1>

          <div className="prose max-w-none">
            <div>
              <div className="my-8">
                <img
                  src="https://ucarecdn.com/cc4f0a53-fe56-4dc2-8a4a-f1f5aeabfa22/-/format/auto/"
                  alt="Coleman Mini Bike"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
                <div className="text-center mt-2">
                  <a
                    href="https://www.ifixit.com/Guide/How+to+repair+Coleman+CT200U-AB+Mini+Bike+Throttle/182907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    View the full guide on iFixit
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>
                <p className="mb-4">
                  The Fast Fix Project was designed to give students the
                  opportunity to develop a clear, step-by-step repair guide for
                  a real-world object or device. The primary purpose of the
                  project was to combine technical communication with hands-on
                  problem-solving, allowing us to translate a mechanical repair
                  process into a resource that others can understand and use. By
                  following models like iFixit, the goal was to make technical
                  information more accessible to individuals with varying levels
                  of mechanical experience.
                </p>
                <p className="mb-4">
                  Our team chose to focus on the Coleman CT200U-AB Mini Bike's
                  throttle system, a common source of mechanical issues for mini
                  bike users. The project aimed to address throttle-related
                  problems—particularly unresponsive acceleration caused by
                  issues like frayed cables—and create a practical guide for
                  identifying, repairing, and preventing these problems.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Scope of the Guide
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Diagnosing throttle problems through symptoms and inspection
                  </li>
                  <li>Safely disassembling the throttle system</li>
                  <li>
                    Replacing or repairing damaged components such as the
                    throttle cable
                  </li>
                  <li>
                    Reassembling the system with proper lubrication and
                    adjustments
                  </li>
                  <li>
                    Providing visual documentation and written instructions to
                    guide users step by step
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Skills and Collaboration
                </h2>
                <p className="mb-4">
                  This project not only served to teach technical repair skills,
                  but also emphasized clear written communication, audience
                  awareness, and the ability to document processes in a
                  user-centered format. Additionally, it underscored the
                  importance of collaboration—even when faced with resource
                  limitations. Our group had to divide roles based on access and
                  strengths, leading one member to perform the hands-on work and
                  the other to focus on drafting and refining the written guide.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Impact</h2>
                <p>
                  Ultimately, the Fast Fix Project reflects the broader goal of
                  making knowledge more shareable. It promotes a sustainable,
                  repair-based mindset by encouraging people to fix instead of
                  replace. The outcome is a repair guide that doesn't just solve
                  a problem—it empowers others to do the same. By bridging
                  technical skill with instructional writing, this project
                  stands as a model for how communication and engineering can
                  come together to make information practical and accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
