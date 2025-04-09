"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReflectionsPage() {
  return (
    <main>
      <Header />

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Reflections</h1>

          <div className="prose max-w-none">
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Course Reflections
              </h2>
              <p className="mb-6">
                Throughout this technical writing course, I've developed
                valuable skills and insights that have significantly enhanced my
                ability to create clear, user-focused documentation. The
                projects I completed—particularly the Fast Fix repair guide and
                the Device Page—provided practical experience in different
                aspects of technical communication.
              </p>

              <div className="border rounded-lg p-6 mb-8 bg-gray-50">
                <h3 className="text-xl font-medium mb-3">Key Learnings</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Audience Awareness:</strong> I learned to identify
                    and address the specific needs, knowledge levels, and
                    expectations of different user groups.
                  </li>
                  <li>
                    <strong>Information Architecture:</strong> The importance of
                    organizing content logically and hierarchically to enhance
                    usability and comprehension.
                  </li>
                  <li>
                    <strong>Technical Accuracy:</strong> Developing research
                    skills to ensure all technical information is accurate,
                    current, and reliable.
                  </li>
                  <li>
                    <strong>Visual Communication:</strong> Using images,
                    diagrams, and formatting effectively to complement and
                    enhance written instructions.
                  </li>
                  <li>
                    <strong>SEO Principles:</strong> Implementing search engine
                    optimization techniques to improve content discoverability
                    while maintaining quality.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8">
                Project Insights
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">
                  Fast Fix Repair Guide
                </h3>
                <p className="mb-4">
                  Creating the Coleman Mini Bike throttle repair guide taught me
                  how to break down complex mechanical processes into clear,
                  sequential steps. I discovered that effective technical
                  writing requires not just explaining what to do, but also why
                  certain steps are necessary and what users should expect at
                  each stage.
                </p>
                <p>
                  The challenge of writing for users with varying levels of
                  mechanical expertise pushed me to find the right balance
                  between technical precision and accessibility. I learned to
                  anticipate questions and potential points of confusion,
                  addressing them proactively in the guide.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">
                  Device Page Development
                </h3>
                <p className="mb-4">
                  The Ryobi Joiner device page project highlighted the
                  importance of comprehensive research and information
                  synthesis. Gathering technical specifications, identifying
                  common issues, and creating troubleshooting guidance required
                  consulting multiple sources and verifying information
                  accuracy.
                </p>
                <p>
                  This project also deepened my understanding of content
                  organization and SEO principles. I learned to structure
                  information in a way that serves both human readers and search
                  engine algorithms, making the content both useful and
                  discoverable.
                </p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8">
                Skills Development
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h3 className="text-xl font-medium mb-3">
                    Before the Course
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Basic writing skills with limited technical focus</li>
                    <li>Minimal experience with documentation structure</li>
                    <li>
                      Limited awareness of audience needs in technical contexts
                    </li>
                    <li>No experience with SEO principles</li>
                    <li>Basic understanding of visual communication</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h3 className="text-xl font-medium mb-3">After the Course</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Ability to create clear, concise technical instructions
                    </li>
                    <li>
                      Proficiency in organizing content for optimal usability
                    </li>
                    <li>Strong awareness of audience needs and expectations</li>
                    <li>
                      Understanding of SEO best practices and implementation
                    </li>
                    <li>
                      Enhanced skills in visual communication and document
                      design
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8">
                Future Applications
              </h2>
              <p className="mb-4">
                The technical writing skills I've developed through these
                projects have broad applications across various professional
                contexts. In software development, these skills will help me
                create clear documentation and user guides. In project
                management, they'll enable me to communicate complex processes
                and requirements effectively.
              </p>
              <p className="mb-4">
                I plan to further develop my technical writing abilities by
                exploring more advanced topics such as API documentation, user
                experience writing, and content strategy. The foundation built
                through this course provides a solid platform for this continued
                growth.
              </p>
              <p>
                Overall, this course has transformed my approach to technical
                communication, equipping me with practical skills and
                theoretical knowledge that will serve me well in my academic and
                professional endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
