import React from "react";
import SectionReveal from "./SectionReveal";
import { Code2, Shield, Layers, Zap, GitBranch } from "lucide-react";

const strengths = [
  { icon: Code2, label: "Clean & maintainable code" },
  { icon: Zap, label: "Performance optimization" },
  { icon: Layers, label: "Reusable component architecture" },
  { icon: Shield, label: "Secure backend development" },
  { icon: GitBranch, label: "API integration & system design" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-sm text-primary mb-3">01 — About</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About Me
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a{" "}
                <span className="text-foreground font-semibold">
                  Full Stack Developer
                </span>{" "}
                with{" "}
                <span className="text-foreground font-semibold">
                  2+ years of experience
                </span>{" "}
                building scalable web applications using{" "}
                <span className="text-primary font-semibold">Angular</span> and{" "}
                <span className="text-primary font-semibold">
                  ASP.NET Web API
                </span>
                .
              </p>
              <p>
                I specialize in designing modern UI systems, building secure
                REST APIs, implementing robust authentication systems, and
                optimizing database performance with SQL Server. My passion lies
                in creating applications that are not just functional, but also
                elegant and performant.
              </p>
              <p>
                I believe great software is built on clean architecture,
                thoughtful design patterns, and a deep understanding of both
                frontend and backend technologies. Every line of code I write is
                crafted with scalability and maintainability in mind.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
                Core Strengths
              </p>
              {strengths.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-accent/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
