const projects = [
  {
    id: 1,
    slug: "cutout-background-remover",
    title: "CutOut — Client-Side AI Studio",
    subtitle: "Zero-Upload Neural Background Removal & ID Photo Suite",
    category: "AI Web Application • UI Design",
    year: "2025",
    role: "UI Designer & Frontend Engineer",
    client: "Open-Source Product",
    description:
      "A privacy-first, browser-native AI studio that removes image backgrounds locally using the RMBG-1.4 neural model via WebAssembly — zero server uploads, zero latency bottlenecks, and built-in 300 DPI print layout tools.",
    image: "/projects/cutout.jpg",
    github: "https://github.com/mrqwerty1233/background-remover",
    demo: "https://background-remover-kappa-hazel.vercel.app",
    overview:
      "CutOut reimagines how everyday users and print shops process portrait and product cutouts. Instead of sending sensitive photos to paid cloud APIs, CutOut executes the Hugging Face RMBG-1.4 segmentation model directly inside the browser via WebAssembly. The interface focuses on tactile drag-and-drop simplicity, real-time model telemetry, and immediate export to transparent PNG or print-ready 300 DPI ID sheets.",
    challenge:
      "Most online background removers lock high-resolution downloads behind paywalls and require uploading private photos to remote servers. In print and office supply environments, staff also waste time manually laying out 1×1 and 2×2 ID photos after removing backgrounds.",
    solution:
      "Designed a high-contrast darkroom workspace with a single-screen workflow: drop an image, watch real-time client-side neural inference progress, inspect edge alpha quality on a checkerboard canvas, and export either raw transparent cutouts or pre-arranged 300 DPI photo ID print sheets.",
    impact: [
      "100% client-side privacy — zero bytes uploaded to external servers",
      "300 DPI print-ready ID sheet generator built directly into the export flow",
      "Sub-second UI feedback with progressive WebAssembly model caching",
    ],
    features: [
      "In-browser RMBG-1.4 neural network execution powered by WebAssembly",
      "Interactive drag-and-drop stage with live model loading & inference telemetry",
      "High-precision alpha matte edge segmentation for hair and complex objects",
      "Built-in 300 DPI photo ID sheet composer for instant office/studio printing",
      "Zero account walls, watermarks, or server dependencies",
    ],
    tools: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3 UI Architecture", "RMBG-1.4 AI", "WebAssembly"],
  },

  {
    id: 2,
    slug: "payroll-tracking-system",
    title: "Payroll & Attendance Control Suite",
    subtitle: "Automated Pay Cycle Calculation, Approvals & Expense Ledger",
    category: "Financial Web System • Dashboard UI",
    year: "2025",
    role: "Product Designer & React Developer",
    client: "Business Operations Concept",
    description:
      "A structured financial operations web application that transforms daily attendance logs into accurate payroll summaries, routes pay cycles through multi-stage approvals, and tracks company salary expenses.",
    image: "/projects/payroll-tracking-app.jpg",
    github: "https://github.com/mrqwerty1233/payroll-tracking-web-app",
    demo: "https://payroll-tracking-web-app.vercel.app/",
    overview:
      "Designed for small-to-medium enterprises transitioning away from fragile spreadsheet payrolls, this system unifies employee profiles, attendance imports, holiday multipliers, allowances, and deductions into a single auditable interface. Management gets an immediate visual snapshot of pending approvals, estimated payout totals, and cycle coverage dates.",
    challenge:
      "Manual payroll computation across scattered spreadsheets frequently leads to formula errors, missed holiday adjustments, and unclear approval states between HR staff and business owners.",
    solution:
      "Created an information-dense yet scannable sidebar application with modular KPI cards, status-coded approval queues, and guided quick actions for importing attendance, managing holidays, and auditing company expenses.",
    impact: [
      "Unified 7 core payroll workflows into a single scannable workspace",
      "Clear visual separation between draft calculations, pending approvals, and finalized payouts",
      "Built-in Demo Portfolio Mode allowing instant stakeholder walkthroughs with realistic sample data",
    ],
    features: [
      "Executive pay-cycle overview with real-time payout estimates and approval counters",
      "Daily attendance log ingestion with automated regular & special holiday rate rules",
      "Granular allowances, deductions, and net-pay breakdown per employee",
      "Multi-step approval workflow with actionable alert banners for pending records",
      "Integrated company expense ledger synchronized with approved payroll runs",
    ],
    tools: ["React 19", "Vite", "Custom CSS Design System", "Framer Motion", "State Architecture"],
  },

  {
    id: 3,
    slug: "production-control-system",
    title: "Production & Job Order Control System",
    subtitle: "Multi-Branch Workflow Visibility & Turnaround Tracking",
    category: "Operations System • Enterprise UI",
    year: "2025",
    role: "Systems Designer & Frontend Developer",
    client: "Manufacturing & Retail Workflow",
    description:
      "An operational command center for tracking job orders from branch intake to central production, monitoring stage bottlenecks, measuring employee output, and managing physical storage locations.",
    image: "/projects/production-control.jpg",
    github: "https://github.com/mrqwerty1233/production-control-system",
    demo: "https://production-control-system.onrender.com",
    overview:
      "Built to bridge the visibility gap between retail mall branches and a central production facility, this system tracks every service job order across its lifecycle. Supervisors can pinpoint where items are stored, which production stage is slowing down turnaround times, and how workloads are distributed across technicians.",
    challenge:
      "When job orders move physically between store branches and a central production floor using paper slips or chat messages, items get misplaced, bottlenecks go unnoticed, and managers cannot accurately quote turnaround times.",
    solution:
      "Architected a structured workflow system centered around six operational pillars: Job Order Management, Stage-by-Stage Workflow Visibility, Employee Productivity Metrics, Store-to-Facility Transfer Tracking, Physical Storage Control, and Management Reporting.",
    impact: [
      "End-to-end traceability from mall branch intake to central production fulfillment",
      "Eliminates blind spots in physical item storage and technician task allocation",
      "Structured typographic hierarchy designed for rapid floor-level scanning",
    ],
    features: [
      "Centralized job order registry with live stage progression indicators",
      "Store-to-facility transfer manifest tracking items in transit",
      "Physical storage bin & location mapping to prevent misplaced customer orders",
      "Employee productivity and task completion turnaround analytics",
      "Executive reporting views for operational bottleneck identification",
    ],
    tools: ["React", "JavaScript", "CSS Grid Architecture", "Framer Motion", "Workflow Modeling"],
  },
]

export default projects