import { useState } from "react";
import rameshPic from "./rameshPic.jpg";

const modules = [
  { name: "Academics", icon: "🎓" },
  { name: "Programme and Curriculum", icon: "📚" },
  { name: "Mess Management", icon: "🍽️" },
  { name: "Visitor's Hostel", icon: "🏨" },
  { name: "Healthcare Center", icon: "🏥" },
  { name: "Scholarship Portal", icon: "💰" },
  { name: "Complaint System", icon: "📝" },
  { name: "Placement Cell", icon: "💼" },
  { name: "Department", icon: "🏛️" },
  { name: "Gymkhana", icon: "🏋️" },
  { name: "Hostel Management", icon: "🏠" },
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

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationSearchQuery, setNotificationSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [designation, setDesignation] = useState("Student");

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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white fixed z-30 inset-y-0 left-0 w-64 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Fusion</h2>
        </div>
        <nav className="mt-8">
          {modules.map((module, index) => (
            <a
              key={index}
              href="/"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 1024) {
                  toggleSidebar();
                }
              }}
            >
              <span className="text-2xl mr-3">{module.icon}</span>
              {module.name}
            </a>
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
        <header className="bg-white shadow-sm z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button className="lg mr-2 p-2" onClick={toggleSidebar}>
                {sidebarOpen ? "✕" : "☰"}
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Staff</option>
                  <option>Admin</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <button
                className="p-2"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                🔔
              </button>
            </div>
          </div>
        </header>

        {/* User Card */}
        {/* <div className="bg-ash shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 py-3 flex items-center">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={rameshPic}
                alt="User avatar"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  RAMESH BABU
                </h2>
                <p className="text-sm text-gray-500">
                  22BCS208 (B Tech CSE 2022)
                </p>
              </div>
            </div>
          </div>
        </div> */}


        {/* User Card */}
        <div className="bg-ash shadow-sm mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 py-3 flex items-center">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-lg object-cover"
                src={rameshPic}
                alt="User avatar"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  RAMESH BABU
                </h2>
                <p className="text-sm text-gray-500">
                  22BCS208 (B Tech CSE 2022)
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Notifications Panel */}
        {showNotifications && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Notifications</h2>
                <button
                  className="p-2"
                  onClick={() => setShowNotifications(false)}
                >
                  ✕
                </button>
              </div>
              <div className="p-4">
                <input
                  type="search"
                  placeholder="Search notifications..."
                  value={notificationSearchQuery}
                  onChange={(e) => setNotificationSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <div key={notification.id} className="p-4 hover:bg-gray-50">
                    <h3 className="font-semibold text-sm text-blue-600">
                      {notification.module}
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {notification.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Module Grid */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{module.icon}</span>
                  <h3 className="text-lg font-medium text-gray-900">
                    {module.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
