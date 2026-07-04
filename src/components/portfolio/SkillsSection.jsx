import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Monitor, Server, Database, Shield, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Angular", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "RxJS", level: 80 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Responsive UI Design", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-violet-500 to-purple-400",
    skills: [
      { name: "C#", level: 88 },
      { name: ".NET Core", level: 85 },
      { name: "ASP.NET Web API", level: 90 },
      { name: "REST API Development", level: 88 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "SQL Server", level: 85 },
      { name: "Query Optimization", level: 80 },
      { name: "Stored Procedures", level: 82 },
      { name: "Database Design", level: 83 },
    ],
  },
  {
    title: "Security & Architecture",
    icon: Shield,
    color: "from-amber-500 to-orange-400",
    skills: [
      { name: "JWT Authentication", level: 87 },
      { name: "Role-Based Authorization", level: 85 },
      { name: "Secure API Development", level: 84 },
      { name: "Scalable Architecture", level: 82 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    color: "from-rose-500 to-pink-400",
    skills: [
      { name: "Git", level: 88 },
      { name: "Postman", level: 85 },
      { name: "npm", level: 83 },
      { name: "API Integrations", level: 86 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(280,60%,55%)]"
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }) {
  const Icon = category.icon;
  return (
    <SectionReveal delay={index * 0.1}>
      <div className="glass rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {category.title}
          </h3>
        </div>
        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.2 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-sm text-primary mb-3">02 — Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            A comprehensive toolkit spanning the full development stack, from
            pixel-perfect frontends to robust backend architectures.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
