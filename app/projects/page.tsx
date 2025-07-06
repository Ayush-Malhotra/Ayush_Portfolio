import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Image from "next/image";
import Link from "next/link";
import { GitHub } from "@mui/icons-material";
import shopsmart from "../../public/shopmart.png";
import adminDB from "../../public/admin-db.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Our e-commerce platform is a modern, user-friendly web application designed to offer a seamless shopping experience. ",
      longDescription:
        " It features a wide range of products, including laptops, earphones, smartwatches, mobile phones, shirts, and shoes, catering to both tech enthusiasts and fashion-conscious users.",
      tech: ["React", "TypeScript", "Tailwind CSS", "ANT Design", "Fake Api"],
      image: shopsmart,
      github: "https://github.com/Ayush-Malhotra/ShopSmart",
      demo: "https://shop-smart-lake.vercel.app/",
      date: "2025",
      status: "Completed",
    },
    {
      title: "E-commerce Admin",
      description:
        "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights. Built with modern React patterns and responsive design.",
      longDescription:
        "This project features a complete e-commerce management system with advanced analytics, real-time notifications, and intuitive user interface. It includes features like product management, order tracking, customer analytics, and sales reporting.",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "Prisma",
      ],
      image: adminDB,
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2025",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#607c3c]">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here&apos;s a collection of projects I&apos;ve worked on, ranging
            from web applications to mobile-responsive sites. Each project
            represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <CalendarTodayIcon />
                      <span className="text-sm text-gray-500">
                        {project.date}
                      </span>
                    </div>
                    <Chip
                      label={project.status}
                      color={
                        project.status === "Completed" ? "default" : "secondary"
                      }
                    />
                  </div>

                  <CardHeader
                    sx={{ p: 0, mb: 2 }}
                    title={
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                    }
                    subheader={
                      <Typography variant="body1" color="text.secondary">
                        {project.description}
                      </Typography>
                    }
                  />
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {project.longDescription}
                    </Typography>

                    {/* Tech Stack Badges */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.tech.map((tech) => (
                        <Chip key={tech} label={tech} variant="outlined" />
                      ))}
                    </Box>

                    <div className="flex space-x-4 mt-4 gap-2">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          ":hover": {
                            backgroundColor: "#607c3c",
                          },
                        }}
                      >
                        <Link
                          href={project.github}
                          className="flex items-center space-x-2 text-[#FFFFFF]"
                        >
                          <GitHub />
                          <span>Code</span>
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "green",
                            ":hover": {
                              backgroundColor: "#607c3c",
                            },
                          }}
                        >
                          <Link
                            href={project.demo}
                            className="flex items-center space-x-2 text-[#FFFFFF]"
                          >
                            <span>Live Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Button>
            <Link href="mailto:john@example.com">Let&apos;s Talk</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
