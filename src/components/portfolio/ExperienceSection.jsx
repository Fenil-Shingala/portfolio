import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Briefcase, Calendar } from "lucide-react";

const responsibilities = [
  "Building full-stack web applications using Angular and ASP.NET Web API",
  "Developing reusable Angular components and shared libraries",
  "Creating secure and scalable REST APIs with .NET Core",
  "Integrating SQL Server databases with optimized queries",
  "Implementing JWT authentication and role-based authorization",
  "Collaborating with cross-functional teams on project delivery",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-sm text-primary mb-3">04 â€” Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Work Experience
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="relative sm:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 hidden sm:flex">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
                >
                  <Briefcase className="w-5 h-5 text-primary" />
                </motion.div>
              </div>

              <div className="glass rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      .NET / Angular Developer
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      ProLance IT
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      April 2023 to Present
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

