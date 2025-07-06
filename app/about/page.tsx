import { Box, Card, CardContent, CardHeader, Chip } from "@mui/material";
import { Button } from "@mui/material";
import { Mail, Map, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Responsive Design",
  ];

  const experience = [
    {
      title: "Jr. Software Developer",
      company: "Unthinkable Solutions LLP",
      period: "2025 - Present",
      description:
        "Developed responsive websites and web applications for various clients.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundSize: "cover",
              overflow: "hidden",
              backgroundImage: "url('/developer.webp')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
        </Box>

        <div className="space-y-8">
          {/* My Story */}
          <Card>
            <CardHeader title="My Story" />
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I&apos;m a passionate frontend developer with over 6 months of
                experience creating beautiful, functional, and user-friendly web
                applications. My journey started during my computer science
                studies when I built my first website and was fascinated by the
                ability to create interactive experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in React ecosystem, modern JavaScript, and creating
                accessible, performant user interfaces. When I&apos;m not
                coding, I enjoy exploring new technologies and contributing to
                open-source projects.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader title="Experience" />
            <CardContent>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400">
                          {job.company}
                        </p>
                      </div>
                      <Chip label={job.period} variant="outlined" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader title="Education" />
            <CardContent>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    Chandigarh Group of Colleges, Landran
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focused on software engineering, web technologies, and user
                    interface design.
                  </p>
                </div>
                <Chip
                  color="secondary"
                  variant="outlined"
                  label="2021 - 2025"
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader title="Skills" />
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="secondary"
                    variant="outlined"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader title="Contact Info" />
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>aayushmalhotra003@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Map className="h-4 w-4 text-gray-500" />
                    <span>Gurugram Harayana , India</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <LinkedIn className="h-4 w-4 text-gray-500" />
                    <Link
                      href="https://linkedin.com"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn Profile
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GitHub className="h-4 w-4 text-gray-500" />
                    <Link
                      href="https://github.com/Ayush-Malhotra"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button>
                  <Link href="mailto:aayushmalhotra003@gmail.com">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
