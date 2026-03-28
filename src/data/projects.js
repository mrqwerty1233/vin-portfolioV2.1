// ─────────────────────────────────────────────────────────────────────────────
// 📁  Project images
//   - Drop your screenshot files into: /public/projects/
//   - Recommended size: 1200×675px (16:9), JPG or WebP
//   - Then update the `image` field below to e.g. "/projects/cutout.jpg"
//   - The cutout-bg placeholder below uses your actual app screenshot color scheme
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    slug: "cutout-background-remover",
    title: "CutOut — AI Background Remover",
    description:
      "A browser-based AI tool that removes image backgrounds instantly using the RMBG-1.4 neural network — no uploads to a server, no accounts, completely private and free.",

    // ✏️  Save your screenshot as /public/projects/cutout.jpg for best results.
    //     The image below is a dark placeholder that matches your app's aesthetic.
    // image: "/projects/cutout.jpg",
    image: "/projects/cutout.JPG",

    github: "https://github.com/mrqwerty1233/background-remover",
    demo: "https://background-remover-kappa-hazel.vercel.app",

    overview:
      "CutOut is a fully client-side AI background removal tool built with vanilla JavaScript and the RMBG-1.4 segmentation model from Hugging Face. The model runs entirely in the browser using WebAssembly — no image data ever leaves the user's device. It supports drag-and-drop uploads, live processing status, and exports clean transparent PNGs or print-ready 300 DPI photo IDs.",

    features: [
      "Client-side AI using RMBG-1.4 — runs fully in the browser",
      "Drag-and-drop image upload with live processing status",
      "Exports transparent PNG with clean edge segmentation",
      "Print-ready 300 DPI photo ID export",
      "Zero server uploads — completely private by design",
    ],

    tools: ["HTML", "CSS", "JavaScript", "RMBG-1.4", "WebAssembly"],
  },

  {
    id: 2,
    slug: "production-control-system",
    title: "Production Control System",
    description:
      "An internal dashboard for tracking production workflow stages, order progress, and turnaround time — built to give management real-time operational visibility.",

    // image: "/projects/production-control.jpg",
    image: "/projects/production-control.jpg",

    github: "https://github.com/mrqwerty1233/production-control-system",
    demo: "https://production-control-system.onrender.com",

    overview:
      "This project is a frontend dashboard concept designed for businesses that need to monitor production flow, track order status by stage, and measure turnaround time. The goal is to reduce delays, improve visibility, and give management a clearer picture of daily operations without relying on manual tracking.",

    features: [
      "Order tracking dashboard with stage indicators",
      "Workflow progress monitoring per order",
      "Turnaround time display and status updates",
      "Clean, readable production status overview",
    ],

    tools: ["React", "JavaScript", "CSS", "Framer Motion"],
  },

  {
    id: 3,
    slug: "payroll-tracking-system",
    title: "Payroll Tracking System",
    description:
      "A web-based system that converts daily attendance data into payroll summaries, supports approval workflows, and keeps expense records organized.",

    // image: "/projects/payroll-tracking.jpg",
    image: "/projects/payroll-tracking-app.jpg",

    github: "https://github.com/mrqwerty1233/payroll-tracking-web-app",
    demo: "https://payroll-tracking-web-app.vercel.app/",

    overview:
      "This payroll tracking system is built to reduce the manual effort involved in calculating employee pay. It takes attendance inputs and applies payroll rules to generate summaries, routes them through an approval process, and keeps a clear record of adjustments and expenses — all in one organized interface.",

    features: [
      "Daily attendance input and tracking",
      "Automated payroll calculation from attendance data",
      "Approval workflow for payroll review",
      "Expense adjustment and record management",
    ],

    tools: ["React", "Framer Motion", "CSS", "Vite"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ➕  Uncomment the CRM project below when it is ready:
  // ─────────────────────────────────────────────────────────────────────────

  /*
  {
    id: 4,
    slug: "crm-system-website",
    title: "CRM System Website",
    description:
      "A customer relationship management tool for organizing customer records, tracking service interactions, and supporting better business decisions.",
    image: "/projects/crm-system.jpg",
    github: "https://github.com/mrqwerty1233/crm-system-website",
    demo: "https://your-demo-link.com/crm-system-website",
    overview:
      "This CRM concept focuses on customer data organization, service history, and engagement tracking. It is designed for small businesses that need a clearer view of their customer workflows without complex enterprise software.",
    features: [
      "Customer record management and search",
      "Service interaction history tracking",
      "Service request organization by status",
      "Business overview dashboard",
    ],
    tools: ["React", "JavaScript", "CSS", "System Design"],
  },
  */
]

export default projects