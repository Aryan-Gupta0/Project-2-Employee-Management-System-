const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskNumbers: { total: 3, active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Prepare monthly sales report for management review.",
        taskDate: "2026-02-10",
        category: "Sales"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend meeting with ABC Corp client.",
        taskDate: "2026-02-05",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM Data",
        taskDescription: "Update customer records in CRM system.",
        taskDate: "2026-02-07",
        category: "Data Entry"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "priya.verma@company.com",
    password: "priya@123",
    taskNumbers: { total: 4, active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI design for new product landing page.",
        taskDate: "2026-02-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix UI Bugs",
        taskDescription: "Resolve responsive design issues.",
        taskDate: "2026-02-11",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Redesign",
        taskDescription: "Redesign company logo as per new branding.",
        taskDate: "2026-02-01",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Testing",
        taskDescription: "Test new prototype with focus group.",
        taskDate: "2026-02-03",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "amit.kumar@company.com",
    password: "amit@123",
    taskNumbers: { total: 5, active: 1, newTask: 1, completed: 2, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Backend API Development",
        taskDescription: "Develop authentication API endpoints.",
        taskDate: "2026-02-13",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize queries for better performance.",
        taskDate: "2026-02-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported bugs from QA team.",
        taskDate: "2026-02-04",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from team members.",
        taskDate: "2026-02-02",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy to Production",
        taskDescription: "Deploy latest build to production server.",
        taskDate: "2026-02-06",
        category: "Deployment"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "neha.sharma@company.com",
    password: "neha@123",
    taskNumbers: { total: 3, active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog post for product launch.",
        taskDate: "2026-02-14",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO ranking.",
        taskDate: "2026-02-08",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Send promotional emails to clients.",
        taskDate: "2026-02-01",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohit",
    email: "rohit.singh@company.com",
    password: "rohit@123",
    taskNumbers: { total: 4, active: 2, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Perform scheduled server maintenance.",
        taskDate: "2026-02-10",
        category: "IT"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Network Setup",
        taskDescription: "Setup new office network infrastructure.",
        taskDate: "2026-02-12",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Conduct system security audit.",
        taskDate: "2026-02-03",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Backup Failure Fix",
        taskDescription: "Resolve backup system failure.",
        taskDate: "2026-02-06",
        category: "IT"
      }
    ]
  },

  {
    id: 6,
    firstName: "Sneha",
    email: "sneha.patel@company.com",
    password: "sneha@123",
    taskNumbers: { total: 3, active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Research competitor strategies.",
        taskDate: "2026-02-15",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Data Analysis",
        taskDescription: "Analyze customer feedback data.",
        taskDate: "2026-02-09",
        category: "Analysis"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Report Submission",
        taskDescription: "Submit quarterly performance report.",
        taskDate: "2026-02-02",
        category: "Reporting"
      }
    ]
  },

  {
    id: 7,
    firstName: "Karan",
    email: "karan.malhotra@company.com",
    password: "karan@123",
    taskNumbers: { total: 4, active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Mobile App Testing",
        taskDescription: "Test Android app for bugs.",
        taskDate: "2026-02-13",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API.",
        taskDate: "2026-02-11",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Improvement",
        taskDescription: "Enhance user dashboard UI.",
        taskDate: "2026-02-04",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Crash Fix",
        taskDescription: "Fix app crash on login.",
        taskDate: "2026-02-05",
        category: "Maintenance"
      }
    ]
  },

  {
    id: 8,
    firstName: "Anjali",
    email: "anjali.mehta@company.com",
    password: "anjali@123",
    taskNumbers: { total: 3, active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Support",
        taskDescription: "Handle customer support tickets.",
        taskDate: "2026-02-14",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Feedback Collection",
        taskDescription: "Collect user feedback surveys.",
        taskDate: "2026-02-07",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Escalation Handling",
        taskDescription: "Resolve escalated support cases.",
        taskDate: "2026-02-06",
        category: "Support"
      }
    ]
  }
];



const admin = [{
    "id": 100,
    "email": "admin@company.com",
    "password": "admin@123"
}]


export const SetLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const GetLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return{employees,admin};
    
}
