import catVision from "@/assets/cat-vision.jpg";
import catBi from "@/assets/cat-bi.jpg";
import catDatabase from "@/assets/cat-database.jpg";
import catAutomation from "@/assets/cat-automation.jpg";

export const CATEGORIES = [
  "All",
  "AI Vision & Construction",
  "BI Dashboards",
  "Database & Migration",
  "Enterprise Automation",
  "Logistics",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type AppItem = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  tags: string[];
  thumbnail: string;
  /** Demo reel source. Swap per-application when the final renders are ready. */
  demoUrl: string;
  architectureUrl: string;
};

const DEMO_REEL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const thumb: Record<Exclude<Category, "All">, string> = {
  "AI Vision & Construction": catVision,
  "BI Dashboards": catBi,
  "Database & Migration": catDatabase,
  "Enterprise Automation": catAutomation,
  Logistics: catAutomation,
};

function make(
  name: string,
  category: Exclude<Category, "All">,
  description: string,
  tags: string[],
): AppItem {
  const id = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return {
    id,
    name,
    category,
    description,
    tags,
    thumbnail: thumb[category],
    demoUrl: DEMO_REEL,
    architectureUrl: `#architecture-${id}`,
  };
}

export const APPLICATIONS: AppItem[] = [
  // AI Vision & Construction
  make(
    "L1 Automation Agent",
    "AI Vision & Construction",
    "Autonomous level-1 agent that triages site requests, validates evidence from field imagery and closes routine tickets with a full audit trail.",
    ["Computer Vision", "LLM Agents", "Python", "Azure"],
  ),
  make(
    "AI Phase Dashboard",
    "AI Vision & Construction",
    "Tracks construction phase progress from site photos and drone captures, comparing actual build state against the planned schedule.",
    ["YOLO", "React", "FastAPI", "PostgreSQL"],
  ),
  make(
    "BuildSmart Estimator",
    "AI Vision & Construction",
    "Generates material and cost estimates directly from drawings and BOQ documents, with variance tracking across revisions.",
    ["Document AI", "OCR", "Power BI", ".NET"],
  ),
  make(
    "Final Quality Inspection Dashboard",
    "AI Vision & Construction",
    "Automated end-of-line visual inspection that flags defects, records pass/fail evidence and routes exceptions to a reviewer.",
    ["Deep Learning", "OpenCV", "Edge AI", "React"],
  ),
  make(
    "Food Inspection Dashboard",
    "AI Vision & Construction",
    "Vision-based food safety and quality checks across production lines with real-time contamination and grading alerts.",
    ["Computer Vision", "IoT", "Streamlit", "Azure ML"],
  ),
  make(
    "HomeScope 360",
    "AI Vision & Construction",
    "360-degree property capture and AI condition assessment that produces shareable inspection reports for every unit.",
    ["360 Imaging", "Segmentation", "React", "S3"],
  ),

  // BI Dashboards
  make(
    "Insight AI",
    "BI Dashboards",
    "Conversational analytics layer that turns plain-language questions into governed queries and explained visualisations.",
    ["LLM", "RAG", "Power BI", "SQL"],
  ),
  make(
    "Application Analysis Report",
    "BI Dashboards",
    "Portfolio-level view of application health, usage and cost, highlighting rationalisation and modernisation candidates.",
    ["Power BI", "DAX", "Azure Synapse"],
  ),
  make(
    "E-Grow Analysis Dashboard",
    "BI Dashboards",
    "Growth analytics for commerce operations covering acquisition, retention and margin performance by channel.",
    ["Power BI", "ETL", "Snowflake"],
  ),
  make(
    "Energy Consumption Analysis Dashboard",
    "BI Dashboards",
    "Monitors site-level energy usage, anomalies and carbon intensity with forecast-driven savings recommendations.",
    ["IoT", "Time Series", "Power BI", "Python"],
  ),
  make(
    "HR Analytics Dashboard",
    "BI Dashboards",
    "Workforce insight across hiring funnel, attrition risk, diversity and capacity planning for people leaders.",
    ["Power BI", "SQL Server", "Predictive Models"],
  ),
  make(
    "HVA Score Analysis Dashboard",
    "BI Dashboards",
    "Scores high-value accounts and activity signals so revenue teams can prioritise the right pipeline every week.",
    ["Scoring Models", "Power BI", "Databricks"],
  ),
  make(
    "Google Analytics Dashboard",
    "BI Dashboards",
    "Unifies GA4 traffic, campaign and conversion data into an executive-ready view with automated weekly commentary.",
    ["GA4", "BigQuery", "Looker Studio"],
  ),

  // Database & Migration
  make(
    "PostgreSQL to SQL Server Migration",
    "Database & Migration",
    "Accelerator that maps schemas, converts procedures and validates row-level parity for PostgreSQL to SQL Server moves.",
    ["PostgreSQL", "SQL Server", "SSIS", "Automation"],
  ),
  make(
    "Qlik to Power BI Migration",
    "Database & Migration",
    "Converts Qlik apps, expressions and data models into governed Power BI datasets with side-by-side validation.",
    ["Qlik", "Power BI", "DAX", "Migration Toolkit"],
  ),

  // Enterprise Automation
  make(
    "ForceAuth Enterprise",
    "Enterprise Automation",
    "Centralised authentication and access governance with policy-driven provisioning and complete access audit history.",
    ["OAuth 2.0", "SSO", "RBAC", ".NET"],
  ),
  make(
    "Packaging Optimisation Platform",
    "Enterprise Automation",
    "Optimises carton selection and pack configuration to cut material spend and shipped air across fulfilment centres.",
    ["Optimisation", "Python", "React", "Azure"],
  ),
  make(
    "Invoice Flow",
    "Enterprise Automation",
    "Touchless invoice capture, three-way matching and exception handling that plugs into your existing ERP.",
    ["Document AI", "OCR", "Workflow", "ERP"],
  ),
  make(
    "VTAB MeetScribe AI",
    "Enterprise Automation",
    "Records, transcribes and summarises meetings into decisions and owned action items pushed to your task tools.",
    ["Speech to Text", "LLM", "React", "Node.js"],
  ),
];
