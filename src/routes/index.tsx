import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Shield,
} from "lucide-react";
import { EnterprisePortfolio } from "@/components/solutions/EnterprisePortfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VTab Square — Enterprise Intelligence" },
      {
        name: "description",
        content:
          "VTab Square builds practical AI solutions and enterprise applications to automate and optimize your business operations.",
      },
      { property: "og:title", content: "VTab Square — Enterprise Intelligence" },
      {
        property: "og:description",
        content:
          "VTab Square builds practical AI solutions and enterprise applications to automate and optimize your business operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Home", "Accelerators", "IoT & Edge AI", "Solutions", "More"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1528px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
          <div className="flex min-w-0 items-center gap-8">
            <a href="/" className="flex flex-col">
              <div className="logo-name">
                <span className="logo-vtab">VTAB</span> <span className="logo-square">SQUARE</span>
              </div>
              <div className="logo-tagline">
                ENTERPRISE INTELLIGENCE
              </div>
            </a>

          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-background transition-transform duration-200 hover:-translate-y-0.5 sm:px-7 sm:py-3"
          >
            CONTACT FOR DEMO
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <EnterprisePortfolio />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1528px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8 lg:px-10">
          <p className="min-w-0 truncate text-xs text-muted-foreground">
            © {new Date().getFullYear()} VTab Square. All rights reserved. Building Practical AI for the Enterprise.
          </p>
          <div className="flex shrink-0 gap-6 text-xs text-muted-foreground">
            <a href="#platform" className="transition-colors hover:text-foreground">
              Platform
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
