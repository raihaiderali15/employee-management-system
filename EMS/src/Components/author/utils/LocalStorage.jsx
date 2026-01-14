const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Prepare report", taskDescription: "Prepare monthly sales report", date: "2026-01-05", category: "Reporting" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Client meeting", taskDescription: "Attend meeting with client", date: "2026-01-02", category: "Meeting" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Email follow-up", taskDescription: "Send follow-up emails", date: "2026-01-03", category: "Communication" }
    ]
  },
  {
    id: 2,
    firstName: "Ayesha",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Design banner", taskDescription: "Create banner for campaign", date: "2026-01-06", category: "Design" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Logo update", taskDescription: "Update company logo", date: "2026-01-03", category: "Design" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Poster draft", taskDescription: "Draft poster layout", date: "2026-01-01", category: "Design" }
    ]
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 0, failed: 1 },
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "API testing", taskDescription: "Test authentication APIs", date: "2026-01-05", category: "Development" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Bug fixing", taskDescription: "Fix reported bugs", date: "2026-01-06", category: "Development" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Code review", taskDescription: "Review teammate code", date: "2026-01-01", category: "Development" }
    ]
  },
  {
    id: 4,
    firstName: "Sara",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 0, completed: 2, failed: 0 },
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Content writing", taskDescription: "Write blog article", date: "2026-01-06", category: "Content" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Proofreading", taskDescription: "Proofread website content", date: "2026-01-03", category: "Content" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Editing", taskDescription: "Edit blog drafts", date: "2026-01-04", category: "Content" }
    ]
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 0, failed: 1 },
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Customer support", taskDescription: "Respond to customer emails", date: "2026-01-05", category: "Support" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Feedback issue", taskDescription: "Handle negative feedback", date: "2026-01-01", category: "Support" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Support report", taskDescription: "Prepare support report", date: "2026-01-03", category: "Support" }
    ]
  },
  {
    id: 6,
    firstName: "Hassan",
    email: "employee6@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Server monitoring", taskDescription: "Monitor server performance", date: "2026-01-06", category: "IT" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Network check", taskDescription: "Check network stability", date: "2026-01-07", category: "IT" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Backup", taskDescription: "Database backup", date: "2026-01-03", category: "IT" }
    ]
  }
];

const admin = [
  { id: 1, email: "admin@example.com", password: "123" }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
