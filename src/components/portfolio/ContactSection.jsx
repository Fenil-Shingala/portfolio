import React, { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Mail, Phone, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fenilshingala464@gmail.com",
    href: "mailto:fenilshingala464@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9484801114",
    href: "tel:+919484801114",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fenilshingala",
    href: "https://www.linkedin.com/in/fenil-shingala-a94b17270/",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSent(true);
    toast.success("Message sent successfully!");
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-sm text-primary mb-3">05 â€” Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    item.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-5 rounded-xl glass hover:bg-accent/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-background/50 border-border/50 rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-background/50 border-border/50 rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="bg-background/50 border-border/50 rounded-xl min-h-[140px] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sent}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                {sent ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
