import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CircleCheck,
  Cpu,
  Gauge,
  Layers,
  Radar,
  Sparkles,
  Workflow,
} from "lucide-react";
import heroCore from "@/assets/hero-core.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northsignal — Autonomous Operations Platform" },
      {
        name: "description",
        content:
          "Northsignal builds autonomous agents that resolve tickets, watch your fleet, and keep operations running without human handoffs.",
      },
      { property: "og:title", content: "Northsignal — Autonomous Operations Platform" },
      {
        property: "og:description",
        content:
          "Autonomous agents that resolve tickets, watch your fleet, and keep operations running without human handoffs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Platform", "Agents", "Edge", "Pricing"];

const capabilities = [
  {
    icon: Workflow,
    label: "Resolution",
    title: "Tier-1 Resolver",
    body: "Handles access requests, credential resets and VPN faults end to end, then writes the audit trail back to your ticketing system.",
  },
  {
    icon: Radar,
    label: "Observability",
    title: "Fleet Watch",
    body: "Streams telemetry from thousands of edge devices and surfaces the three things that actually need a human this hour.",
  },
  {
    icon: Layers,
    label: "Knowledge",
    title: "Policy Index",
    body: "Grounds every answer in your own runbooks and policy documents, with citations attached to each response.",
  },
  {
    icon: Cpu,
    label: "Runtime",
    title: "On-Prem Inference",
    body: "Runs quantized models inside your perimeter when data cannot leave, with the same orchestration layer.",
  },
];

const bullets = [
  "Retrieval grounded in your own runbooks",
  "Directory and identity actions, fully logged",
  "Slack, Teams, web and email in one thread",
  "Escalation rules you can read in plain English",
];

const metrics = [
  { value: "71%", label: "Tickets closed without a human" },
  { value: "4.2m", label: "Median time to resolution" },
  { value: "18k", label: "Edge nodes under watch" },
  { value: "99.98%", label: "Orchestrator uptime" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1528px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
          <div className="flex min-w-0 items-center gap-8">
            <a href="/" className="flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)]">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight">
                  NORTHSIGNAL
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  Autonomous Ops
                </span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-background transition-transform duration-200 hover:-translate-y-0.5 sm:px-7 sm:py-3"
          >
            Book a demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="starfield pointer-events-none absolute inset-0 opacity-70" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative mx-auto max-w-[1528px] px-5 pb-24 pt-24 text-center lg:px-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Operations, on autopilot
            </span>
            <h1 className="mx-auto mt-8 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em]">
              Agents that finish <span className="text-gradient">the work</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.63] text-muted-foreground">
              Northsignal deploys autonomous operators across your service desk and edge
              fleet. They read the policy, take the action, and close the loop — without a
              handoff queue.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-10 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore the platform
              </a>
              <a
                href="#agents"
                className="inline-flex items-center gap-2 rounded-full border border-border px-10 py-4 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                See the agents
              </a>
            </div>
          </div>
        </section>

        {/* Featured showcase */}
        <section id="platform" className="mx-auto max-w-[1528px] px-5 pb-24 lg:px-10">
          <div className="surface-card overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
              <div className="p-8 lg:p-12">
                <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Featured showcase
                </span>
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                  Enterprise automation
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
                  Tier-1 Resolver
                </h2>
                <p className="mt-5 max-w-xl text-base leading-[1.63] text-muted-foreground">
                  A digital operator that lives where your team already works. It
                  troubleshoots connectivity, restores accounts, provisions software and
                  walks people through workflows — citing the policy it followed each time.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-3.5 text-sm leading-snug"
                    >
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[320px] border-t border-border lg:border-l lg:border-t-0">
                <img
                  src={heroCore}
                  alt="Abstract visualization of an autonomous operations core"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="mx-auto max-w-[1528px] px-5 pb-24 lg:px-10">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-3xl border border-border bg-elevated p-7">
                <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-gradient">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="agents" className="mx-auto max-w-[1528px] px-5 pb-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
              The portfolio
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.03em]">
              Four operators, one runtime
            </h2>
          </div>
          <div className="mt-10 grid gap-2 md:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.title} className="surface-card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background">
                  <c.icon className="h-5 w-5 text-accent" />
                </span>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  {c.label}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.63] text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mx-auto max-w-[1528px] px-5 pb-24 lg:px-10">
          <div className="relative overflow-hidden rounded-[24px] border border-border bg-elevated px-8 py-16 text-center lg:px-16">
            <div
              className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-2/3 rounded-full opacity-30 blur-[100px]"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="relative">
              <Gauge className="mx-auto h-8 w-8 text-accent" />
              <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
                Put the queue on autopilot
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-[1.63] text-muted-foreground">
                Start with one workflow. Measure the deflection. Expand when the numbers
                say so.
              </p>
              <form
                className="mx-auto mt-9 flex max-w-md flex-col gap-2 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  aria-label="Work email"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request access
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1528px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8 lg:px-10">
          <p className="min-w-0 truncate text-xs text-muted-foreground">
            © {new Date().getFullYear()} Northsignal Systems
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
