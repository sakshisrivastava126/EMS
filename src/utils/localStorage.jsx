// localStorage.clear() // sometimes we might need to clear the localStorage

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare weekly report",
        taskDescription: "Compile and summarize the weekly sales data.",
        date: "2025-08-07",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client follow-up",
        taskDescription: "Call the client and discuss the project status.",
        date: "2025-08-05",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Team meeting notes",
        taskDescription: "Write and upload meeting summary notes.",
        date: "2025-08-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      total: 3,
      active: 1,
      completed: 2,
      failed: 0,
      newTask: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code module A",
        taskDescription: "Complete development of Module A",
        date: "2025-08-04",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix login bug",
        taskDescription: "Resolve login authentication issue",
        date: "2025-08-06",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write unit tests",
        taskDescription: "Cover Module B with unit tests",
        date: "2025-08-07",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "API documentation",
        taskDescription: "Document all endpoints in Postman",
        date: "2025-08-08",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      total: 4,
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update employee records",
        taskDescription: "Ensure all employee records are up-to-date.",
        date: "2025-08-03",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Schedule interviews",
        taskDescription: "Schedule interviews for backend developer position.",
        date: "2025-08-06",
        category: "Recruitment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Policy review",
        taskDescription: "Review the updated leave policy.",
        date: "2025-08-05",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      total: 3,
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design new logo",
        taskDescription: "Create and present new logo options.",
        date: "2025-08-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Social media banners",
        taskDescription: "Design banners for the upcoming campaign.",
        date: "2025-08-07",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Presentation deck",
        taskDescription: "Design slides for investor pitch.",
        date: "2025-08-04",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Feedback revisions",
        taskDescription: "Incorporate feedback from the last design review.",
        date: "2025-08-03",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      total: 4,
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 5,
    firstName: "Anika",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Market research",
        taskDescription: "Analyze competitors' latest offerings.",
        date: "2025-08-05",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare survey",
        taskDescription: "Design a user feedback survey.",
        date: "2025-08-07",
        category: "User Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Data analysis",
        taskDescription: "Analyze collected data from surveys.",
        date: "2025-08-08",
        category: "Data",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Write report",
        taskDescription: "Create a summary report of findings.",
        date: "2025-08-09",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      total: 4,
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 2
    }
  }
];

const admin = [
  {
    id: 101,
    firstName: 'Sakshi',
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
