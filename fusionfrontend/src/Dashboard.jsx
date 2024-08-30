import { useState, useEffect } from "react";
import rameshPic from "./rameshPic.jpg";

const modules = [
  {
    name: "Academics",
    icon: "🎓",
    subsections: ["Courses", "Exams", "Timetable"],
    recent: true,
  },
  {
    name: "Programme and Curriculum",
    icon: "📚",
    subsections: ["Curriculum", "Courses", "Electives"],
    recent: false,
  },
  {
    name: "Mess Management",
    icon: "🍽️",
    subsections: ["Menu", "Feedback", "Payment"],
    recent: true,
  },
  {
    name: "Visitor's Hostel",
    icon: "🏨",
    subsections: ["Booking", "Feedback", "Facilities"],
    recent: false,
  },
  {
    name: "Healthcare Center",
    icon: "🏥",
    subsections: ["Appointments", "Doctors", "Facilities"],
    recent: true,
  },
  {
    name: "Scholarship Portal",
    icon: "💰",
    subsections: ["Applications", "Status", "Guidelines"],
    recent: false,
  },
  {
    name: "Complaint System",
    icon: "📝",
    subsections: ["Register Complaint", "Track Complaint", "Feedback"],
    recent: false,
  },
  {
    name: "Placement Cell",
    icon: "💼",
    subsections: ["Job Postings", "Internships", "Career Counseling"],
    recent: false,
  },
  {
    name: "Department",
    icon: "🏛️",
    subsections: ["Faculty", "Research", "Events"],
    recent: false,
  },
  {
    name: "Gymkhana",
    icon: "🏋️",
    subsections: ["Activities", "Clubs", "Events"],
    recent: false,
  },
  {
    name: "Hostel Management",
    icon: "🏠",
    subsections: ["Room Allocation", "Rules", "Maintenance"],
    recent: false,
  },
];

const notifications = [
  {
    id: 1,
    module: "Hostel Management Module",
    message: "Hostel room allocation forms are released - by RAMESH BABU",
    date: "2 days ago",
  },
  {
    id: 2,
    module: "Gymkhana Module",
    message:
      "A session by BitByte Club will be organised in CR101 - by RAMESH BABU",
    date: "1 week ago",
  },
  {
    id: 3,
    module: "Academics",
    message: "Mid-semester examination schedule has been released",
    date: "3 weeks ago",
  },
  {
    id: 4,
    module: "Placement Cell",
    message: "New job opportunity posted for final year students",
    date: "3 weeks ago",
  },
];

const announcements = [
  {
    id: 1,
    message:
      "New policy updates have been made in the hostel management system.",
    date: "1 day ago",
  },
  {
    id: 2,
    message: "Annual sports event registration is now open.",
    date: "5 days ago",
  },
  {
    id: 3,
    message: "Library will be closed for maintenance on the coming weekend.",
    date: "2 weeks ago",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationSearchQuery, setNotificationSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [designation, setDesignation] = useState("Student");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("notifications");
  // const [recentModules, setRecentModules] = useState([
  //   modules[0], // Academics
  //   modules[2], // Mess Management
  // ]);
  const [expandedModule, setExpandedModule] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const filteredNotifications = notifications.filter(
    (notification) =>
      notification.message
        .toLowerCase()
        .includes(notificationSearchQuery.toLowerCase()) ||
      notification.module
        .toLowerCase()
        .includes(notificationSearchQuery.toLowerCase())
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleModuleClick = (index) => {
    if (expandedModule === index) {
      setExpandedModule(null); // Collapse if already expanded
    } else {
      setExpandedModule(index); // Expand the clicked module
    }
  };

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } scrollbar-hide`}
    >
      {/* Sidebar */}
      <div
        className={`bg-white dark:bg-gray-700 fixed z-30 inset-y-0 left-0 w-64 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto custom-scrollbar`}
      >
        <div className="p-4">
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Fusion
          </h2>
        </div>
        <nav className="mt-8">
        {modules.map((module, index) => (
      <div key={index}>
        <div
          className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
            darkMode
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-700 hover:bg-gray-200"
          } transition-colors duration-500`}
          onClick={() => handleModuleClick(index)}
        >
          <div className="flex items-center">
            <span className="text-2xl mr-3">{module.icon}</span>
            {module.name}
          </div>
        </div>
        <div
          className={`pl-8 overflow-hidden transition-all duration-700 ease-in-out`}
          style={{
            height: expandedModule === index ? `${module.subsections.length * 40}px` : "0px",
            opacity: expandedModule === index ? 1 : 0,
          }}
        >
          {module.subsections.map((sub, subIndex) => (
            <a
              key={subIndex}
              href="/"
              className={`block px-9 py-2 ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={(e) => e.preventDefault()}
            >
              {sub}
            </a>
          ))}
        </div>
      </div>
    ))}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className={`bg-white dark:bg-gray-800 shadow-sm z-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                className={`lg mr-2 p-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
                onClick={toggleSidebar}
              >
                {sidebarOpen ? "✕" : "☰"}
              </button>
              <h1
                className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-2.5">
            <div className="flex items-center">
              <select className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition duration-150 ease-in-out text-gray-900 dark:text-gray-100">
                <option>Student</option>
                <option>Faculty</option>
                <option>Admin</option>
              </select>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setShowUserDetails(true)}
              onMouseLeave={() => setShowUserDetails(false)}
            >
              <img
                className="h-10 w-10 rounded-full object-cover cursor-pointer"
                src={rameshPic}
                alt="User avatar"
              />
              {showUserDetails && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 flex items-center flex-col">
                  <img
                    className="h-16 w-16 rounded-lg object-cover"
                    src={rameshPic}
                    alt="User avatar"
                  />
                  <div className="mt-2">
                    <h2
                      className={`text-xl font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      RAMESH BABU
                    </h2>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {designation}
                    </p>
                  </div>
                </div>
              )}
            </div>
              <button
                className={`ml-4 p-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
                onClick={toggleDarkMode}
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
              <button
                className={`ml-4 p-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
                onClick={() => setShowNotifications(!showNotifications)}
              >
                🔔
              </button>
            </div>
          </div>
        </header>

        {/* Notifications Drawer */}
        {showNotifications && (
          <div
            className={`fixed inset-0 ${
              darkMode ? "bg-gray-900" : "bg-black"
            } ${
              darkMode ? "bg-opacity-80" : "bg-opacity-50"
            } z-40 flex justify-end`}
          >
            <div
              className={`w-full md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 h-full overflow-y-auto shadow-lg`}
            >
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Notifications & Announcements
                  </h2>
                  <button
                    className="text-lg"
                    onClick={() => setShowNotifications(false)}
                  >
                    ✕
                  </button>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={notificationSearchQuery}
                    onChange={(e) => setNotificationSearchQuery(e.target.value)}
                    className={`w-full px-3 py-2 rounded ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-black"
                    } focus:outline-none`}
                  />
                </div>
                <div className="mt-4">
                  <div className="flex space-x-2">
                    <button
                      className={`px-4 py-2 rounded-md ${
                        activeTab === "notifications"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
                      }`}
                      onClick={() => setActiveTab("notifications")}
                    >
                      Notifications
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${
                        activeTab === "announcements"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
                      }`}
                      onClick={() => setActiveTab("announcements")}
                    >
                      Announcements
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  {activeTab === "notifications" &&
                  filteredNotifications.length > 0 ? (
                    <ul>
                      {filteredNotifications.map((notification) => (
                        <li
                          key={notification.id}
                          className={`p-4 mb-2 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-white"
                              : "bg-gray-200 text-black"
                          }`}
                        >
                          <h3 className="font-bold">{notification.module}</h3>
                          <p>{notification.message}</p>
                          <span className="text-xs">{notification.date}</span>
                        </li>
                      ))}
                    </ul>
                  ) : activeTab === "announcements" &&
                    announcements.length > 0 ? (
                    <ul>
                      {announcements.map((announcement) => (
                        <li
                          key={announcement.id}
                          className={`p-4 mb-2 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-white"
                              : "bg-gray-200 text-black"
                          }`}
                        >
                          <p>{announcement.message}</p>
                          <span className="text-xs">{announcement.date}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center mt-4">No items found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Main Content */}
        <main
          className={`flex-1 p-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Recent Modules Section */}
            <div className="mb-8">
              <h2
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                } mb-4`}
              >
                Recent Modules
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {modules
                  .filter((module) => module.recent)
                  .map((module, index) => (
                    <div
                      key={index}
                      className={`rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${
                        darkMode
                          ? "bg-gray-800 text-gray-200"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      <div className="p-6 flex flex-col items-center text-center">
                        <span className="text-4xl mb-2">{module.icon}</span>
                        <h3
                          className={`text-lg font-medium ${
                            darkMode ? "text-gray-200" : "text-gray-900"
                          }`}
                        >
                          {module.name}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Other Modules Section */}
            <div>
              <h2
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                } mb-4`}
              >
                Other Modules
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {modules
                  .filter((module) => !module.recent)
                  .map((module, index) => (
                    <div
                      key={index}
                      className={`rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${
                        darkMode
                          ? "bg-gray-800 text-gray-200"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      <div className="p-6 flex flex-col items-center text-center">
                        <span className="text-4xl mb-2">{module.icon}</span>
                        <h3
                          className={`text-lg font-medium ${
                            darkMode ? "text-gray-200" : "text-gray-900"
                          }`}
                        >
                          {module.name}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
