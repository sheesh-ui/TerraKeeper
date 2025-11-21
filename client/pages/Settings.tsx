import { useState } from "react";
import { ChevronRight, Bell, Lock, Info, HardDrive } from "lucide-react";

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

export default function Settings() {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: "human",
      label: "Human Detection",
      description: "Get alerts when humans are detected",
      enabled: true,
    },
    {
      id: "animal",
      label: "Animal Detection",
      description: "Get alerts when animals are detected",
      enabled: true,
    },
    {
      id: "pest",
      label: "Pest Detection",
      description: "Get alerts when pests are detected",
      enabled: true,
    },
    {
      id: "weather",
      label: "Weather Alerts",
      description: "Get weather-related alerts",
      enabled: false,
    },
    {
      id: "sensor",
      label: "Sensor Offline Alerts",
      description: "Get notified when sensors go offline",
      enabled: true,
    },
  ]);

  const toggleNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n)),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28 pt-6">
      <div className="px-5 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8 font-inter">
          Settings
        </h1>

        {/* Notification Settings Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-3">
            <Bell className="w-5 h-5 text-terrakeeper-light-green" />
            <h2 className="text-lg font-semibold text-gray-900">
              Notifications
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.label}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {notification.description}
                  </p>
                </div>
                <div
                  className={`relative w-12 h-7 rounded-full transition ${
                    notification.enabled
                      ? "bg-terrakeeper-light-green"
                      : "bg-gray-300"
                  }`}
                  onClick={() => toggleNotification(notification.id)}
                  role="switch"
                  aria-checked={notification.enabled}
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition transform ${
                      notification.enabled ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-3">
            <Lock className="w-5 h-5 text-terrakeeper-light-green" />
            <h2 className="text-lg font-semibold text-gray-900">Account</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Profile</p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Farmer Juan • juan@terrakeeper.com
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Change Password
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Update your security settings
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Two-Factor</p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Enable 2FA for extra security
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Farm Info Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-3">
            <Info className="w-5 h-5 text-terrakeeper-light-green" />
            <h2 className="text-lg font-semibold text-gray-900">Farm Info</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Farm Name</p>
                <p className="text-xs text-gray-600 mt-0.5">Vista Verde Farm</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Location</p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Rural County, State
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Farm Size</p>
                <p className="text-xs text-gray-600 mt-0.5">250 acres</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* App Preferences Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              App Preferences
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Theme</p>
                <p className="text-xs text-gray-600 mt-0.5">Light</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Language</p>
                <p className="text-xs text-gray-600 mt-0.5">English</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Temperature Unit
                </p>
                <p className="text-xs text-gray-600 mt-0.5">Celsius</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Backup & Restore Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-8 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-3">
            <HardDrive className="w-5 h-5 text-terrakeeper-light-green" />
            <h2 className="text-lg font-semibold text-gray-900">
              Backup & Restore
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Cloud Backup
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Last backup: Today at 2:30 PM
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Restore Data
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Restore from a backup
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Export Data</p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Export your alerts and records
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Sign Out Button */}
        <button className="w-full h-12 bg-red-50 text-red-600 font-semibold rounded-2xl hover:bg-red-100 transition mb-4">
          Sign Out
        </button>
      </div>
    </div>
  );
}
