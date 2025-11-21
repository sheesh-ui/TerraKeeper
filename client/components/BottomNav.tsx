import { useLocation, Link } from "react-router-dom";
import { Home, AlertCircle, Video, Zap, Settings } from "lucide-react";

const navItems = [
  { path: "/dashboard", label: "Home", icon: Home },
  { path: "/alerts", label: "Alerts", icon: AlertCircle },
  { path: "/cameras", label: "Cameras", icon: Video },
  { path: "/sensors", label: "Sensors", icon: Zap },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-3xl shadow-lg">
      <div className="flex justify-around items-center h-24 max-w-full px-4">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center justify-center gap-1 transition duration-200"
            >
              <Icon
                className={`w-6 h-6 transition ${
                  isActive ? "text-terrakeeper-light-green" : "text-gray-400"
                }`}
                strokeWidth={2}
              />
              <span
                className={`text-xs font-medium transition ${
                  isActive ? "text-terrakeeper-light-green" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
