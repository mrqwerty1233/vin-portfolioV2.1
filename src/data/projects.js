const projects = [
  {
    id: 1,
    slug: "cutout-background-remover",
    title: "CutOut — AI Background Remover",
    description:
      "A browser-based AI tool that removes image backgrounds instantly using the RMBG-1.4 neural network — no uploads to a server, no accounts, completely private and free.",
    image: "/projects/cutout.jpg",
    github: "https://github.com/mrqwerty1233/background-remover",
    demo: "https://background-remover-kappa-hazel.vercel.app",
    overview:
      "CutOut is a fully client-side AI background removal tool built with vanilla JavaScript and the RMBG-1.4 segmentation model from Hugging Face. The model runs entirely in the browser using WebAssembly — no image data ever leaves the user's device. It supports drag-and-drop uploads, live processing status, and exports clean transparent PNGs.",
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
    image: "/projects/payroll-tracking-app.jpg",
    github: "https://github.com/mrqwerty1233/payroll-tracking-web-app",
    demo: "https://payroll-tracking-web-app.vercel.app/",
    overview:
      "This payroll tracking system is built to reduce the manual effort involved in calculating employee pay. It takes attendance inputs and applies payroll rules to generate summaries, routes them through an approval process, and keeps a clear record of adjustments and expenses.",
    features: [
      "Daily attendance input and tracking",
      "Automated payroll calculation from attendance data",
      "Approval workflow for payroll review",
      "Expense adjustment and record management",
    ],
    tools: ["React", "Framer Motion", "CSS", "Vite"],
  },
]

export default projects