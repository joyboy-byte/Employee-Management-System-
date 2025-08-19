

const employees = [
  {
    id: 1,
    firstName: "Kilometres",
    email: "kilometres@gmail.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Update onboarding document",
        description: "Revise and update the onboarding document for new hires.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-11",
        category: "HR"
      },
      {
        title: "Fix login bug",
        description: "Resolve the bug causing login errors on Safari.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-10",
        category: "Development"
      },
      {
        title: "Client follow-up email",
        description: "Send follow-up email to client after demo presentation.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-08",
        category: "Support"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "jane.smith@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Design dashboard UI",
        description: "Create modern layout for admin dashboard.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-11",
        category: "Design"
      },
      {
        title: "Weekly report",
        description: "Compile and submit weekly progress report.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-07",
        category: "Admin"
      },
      {
        title: "Test mobile responsiveness",
        description: "Ensure site works well on small screens.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-07-09",
        category: "QA"
      },
      {
        title: "Update Figma assets",
        description: "Sync latest icons and components.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-10",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    firstName: "Raj",
    email: "ben@gmail.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Refactor user model",
        description: "Improve user schema in the backend for scalability.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-11",
        category: "Development"
      },
      {
        title: "Optimize database",
        description: "Run performance audit on PostgreSQL instance.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-10",
        category: "DevOps"
      },
      {
        title: "Reset staging environment",
        description: "Clean and redeploy staging branch.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-09",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "emma.brown@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare team presentation",
        description: "Make slides for Q3 progress report.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-11",
        category: "Admin"
      },
      {
        title: "Create welcome kits",
        description: "Design and print welcome materials for new employees.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-06",
        category: "HR"
      },
      {
        title: "Schedule team interviews",
        description: "Coordinate interview times with shortlisted candidates.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-07-11",
        category: "HR"
      },
      {
        title: "Budget review meeting",
        description: "Review expense reports for the month.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-07",
        category: "Finance"
      },
      {
        title: "Fix broken footer links",
        description: "Correct routing errors in footer navigation.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-05",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "oliver.wilson@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Implement dark mode",
        description: "Add toggle and styling for dark mode.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-11",
        category: "Development"
      },
      {
        title: "Analyze user feedback",
        description: "Compile recent feedback and highlight pain points.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-08",
        category: "Support"
      },
      {
        title: "Fix performance issues",
        description: "Address lag in dashboard loading.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-09",
        category: "Development"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}

    

}