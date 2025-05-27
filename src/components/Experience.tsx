
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  CreditCard,
  Smartphone,
  Code,
  Award,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "HeapStash Global",
      location: "Lahore (Remote)",
      period: "Nov 2023 - Mar 2025",
      documentLink: "#", // Placeholder for document link
      description: [
        {
          title: "Neo One – Fintech Application",
          details: [
            "Developed a full-featured fintech application using Flutter, focusing on secure and seamless financial operations.",
            "Integrated IBAN generation and virtual/physical card issuance using Weavr and Satchel APIs.",
            "Implemented cryptocurrency wallet support for BTC and ETH via Striga APIs.",
            "Linked bank accounts and provided open banking features using Plaid.",
            "Ensured secure transaction flows, KYC compliance, and consistent UX across Android, iOS, and web.",
          ],
        },
        {
          title: "Neo Pass – Travel & Booking Platform",
          details: [
            "Built a responsive Flutter web and mobile app for flight bookings and multi-currency payments.",
            "Integrated crypto payments alongside bank transfers and card payments.",
            "Delivered a pixel-perfect UI based on Figma designs.",
            "Ensured responsive design across mobile and desktop screens.",
            "Collaborated using Jira for task management and Slack for communication.",
          ],
        },
      ],
    },
    {
      title: "Flutter Mobile App Developer",
      company: "Khas Tech",
      location: "Islamabad",
      period: "Jun 2022 - Nov 2023",
      documentLink: "#", // Placeholder for document link
      description: [
        {
          title: "AI-Powered Editing & Utility Apps",
          details: [
            "Published various AI-based image processing apps including Enhancer, Remover, and Sketcher.",
            "Created ICR (Intelligent Character Recognition) apps for document scanning and text extraction.",
            "Developed step counter (pedometer) and tracking apps for fitness and location-based services.",
            "Integrated in-app purchases and ad monetization using AdMob, AppLovin, and Meta Audience Network.",
            "Handled full deployment cycle and compliance for both Google Play Store and Apple App Store.",
            "Focused on performance, seamless UI/UX, and AI integration for an improved user experience.",
          ],
        },
      ],
    },
  ];

  const education = [
    {
      degree: "BS in Computer Science",
      institution: "BIIT (Barani Institute of Information Technology)",
      location: "Rawalpindi, Pakistan",
      period: "Oct 2018 - Jun 2022",
      description:
        "Graduated with a Bachelor of Science degree in Computer Science, gaining solid foundations in programming, algorithms, data structures, and software development.",
    },
  ];

  const certifications = [
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      issuer: "Udemy",
      period: "Apr 2025",
      description: "Completed a comprehensive bootcamp covering backend development with Node.js, Express, MongoDB, RESTful APIs, and advanced server-side concepts.",
      link: "https://www.udemy.com/certificate/UC-a0023ed1-5728-4812-89e8-1657c6e2c4c1/"
    },
    {
      title: "Flutter Bloc Flutter BLoC - From Zero to Hero Complete Course",
      issuer: "Udemy",
      period: "May 2024",
      description: "Mastered state management in Flutter using BLoC pattern with hands-on projects and best practices from scratch to advanced",
      link: "https://www.udemy.com/certificate/UC-3cce47c1-9f06-4b31-bcfd-e70630c0a93a/"
    },
  ];

  return (
    <section id="experience" className="py-12 bg-slate-900 text-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my
            expertise and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-3 text-blue-500" />
              Work Experience
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-700">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {index === 0 ? (
                      <CreditCard className="w-5 h-5 text-white" />
                    ) : index === 1 ? (
                      <Smartphone className="w-5 h-5 text-white" />
                    ) : (
                      <Code className="w-5 h-5 text-white" />
                    )}
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-blue-300">
                          {exp.title}
                        </h4>
                        <h5 className="text-base font-medium mb-2">
                          {exp.company}
                        </h5>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4 bg-blue-600/20 border-blue-500 text-blue-300 hover:bg-blue-600/30"
                        onClick={() => window.open(exp.documentLink, '_blank')}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Documents
                      </Button>
                    </div>

                    <div className="flex flex-wrap text-sm text-slate-400 mb-3">
                      <div className="flex items-center mr-4 mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-slate-300">
                      {exp.description.map((section, i) => (
                        <div key={i}>
                          <strong className="text-white">{section.title}</strong>
                          <ul className="list-disc list-inside mt-1 ml-4">
                            {section.details.map((point, j) => (
                              <li
                                key={j}
                                className="hover:text-white transition-colors duration-200"
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education and Certifications */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-500" />
                Education
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-700">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
                      <h4 className="text-lg font-semibold text-blue-300">
                        {edu.degree}
                      </h4>
                      <h5 className="text-base font-medium mb-2">
                        {edu.institution}
                      </h5>

                      <div className="flex flex-wrap text-sm text-slate-400 mb-3">
                        <div className="flex items-center mr-4 mb-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-blue-500" />
                Certifications
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-700">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-blue-300">
                            {cert.title}
                          </h4>
                          <h5 className="text-base font-medium mb-2">
                            {cert.issuer}
                          </h5>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-4 bg-green-600/20 border-green-500 text-green-300 hover:bg-green-600/30"
                          onClick={() => window.open(cert.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>

                      <div className="text-sm text-slate-400 mb-3 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{cert.period}</span>
                      </div>

                      <p className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
