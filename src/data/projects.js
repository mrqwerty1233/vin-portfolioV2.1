// ─────────────────────────────────────────────────────────────────────────────
// 📁  Project images
//   - Drop your screenshot files into: /public/projects/
//   - Recommended size: 1200×675px (16:9), JPG or WebP
//   - Then update the `image` field below to e.g. "/projects/production-control.jpg"
//   - Stock photos from Unsplash are used as placeholders until you add real ones
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    slug: "production-control-system",
    title: "Production Control System",
    description:
      "An internal dashboard for tracking production workflow stages, order progress, and turnaround time — built to give management real-time operational visibility.",

    // ✏️  Replace with your actual screenshot once available:
    // image: "/projects/production-control.jpg",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",

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
    id: 2,
    slug: "payroll-tracking-system",
    title: "Payroll Tracking System",
    description:
      "A web-based system that converts daily attendance data into payroll summaries, supports approval workflows, and keeps expense records organized.",

    // ✏️  Replace with your actual screenshot once available:
    // image: "/projects/payroll-tracking.jpg",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",

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
  // ➕  Add more projects here by copying the block above.
  //     Uncomment the CRM project below when it is ready:
  // ─────────────────────────────────────────────────────────────────────────

  /*
  {
    id: 3,
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
