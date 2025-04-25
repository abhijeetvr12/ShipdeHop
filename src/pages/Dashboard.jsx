import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
    window.location.reload();
  };

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (mobile and desktop) */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:z-auto`}
      >
        <div className="flex flex-col justify-between h-full py-6 px-4">
          <div>
            <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
            <nav className="space-y-2">
              <NavItem to="users" label="Users" />
              <NavItem to="reviews" label="Reviews" />
              <NavItem to="transactions" label="Transactions" />
              <NavItem to="tickets" label="Support Tickets" />
            </nav>
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col w-0 md:w-auto">
        {/* Mobile topbar with hamburger */}
        <div className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <span className="font-bold text-gray-800">Dashboard</span>
        </div>

        {/* Page content */}
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Reusable nav link component
function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
    >
      {label}
    </Link>
  );
}
