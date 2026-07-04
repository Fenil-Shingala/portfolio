import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          {"<FS />"} — {new Date().getFullYear()}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Designed & built with{" "}
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by Fenil
          Shingala
        </p>
      </div>
    </footer>
  );
}
