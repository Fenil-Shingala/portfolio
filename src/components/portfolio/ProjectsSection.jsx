import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ExternalLink, ShoppingCart, BarChart3, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Application",
    description:
      "Full-stack application built with Angular and ASP.NET Web API featuring product listing, authentication system, and complete order management workflow.",
    tech: ["Angular", "ASP.NET Web API", "SQL Server", "JWT Auth", "REST API"],
    icon: ShoppingCart,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Accounting & Sales System",
    description:
      "Comprehensive business management platform with invoicing, expense tracking, tax calculations, and powerful reporting tools for financial insights.",
    tech: [
      "Angular",
      ".NET Core",
      "SQL Server",
      "Stored Procedures",
      "Reports",
    ],
    icon: BarChart3,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    title: "Freelance Web Applications",
    description:
      "Custom Angular and .NET Web API solutions built for different clients, delivering tailored web experiences and scalable backend systems.",
    tech: ["Angular", ".NET Web API", "TypeScript", "RxJS", "Responsive UI"],
    icon: Globe,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <SectionReveal delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass rounded-2xl overflow-hidden h-full group"
      >
        {/* Top gradient bar */}
        <div
          className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,hsl(var(--card))_70%)] opacity-40" />
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              className={`w-16 h-16 ${project.iconColor} opacity-80 relative z-10`}
            />
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="font-mono text-xs bg-accent text-accent-foreground border-0 rounded-lg"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-sm text-primary mb-3">03 — Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            A selection of projects that showcase my expertise in building
            full-stack applications with modern technologies.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
