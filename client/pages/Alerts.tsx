import { useState } from "react";
import { AlertTriangle, Target, Bug, ChevronRight } from "lucide-react";

type AlertType = "all" | "human" | "animal" | "pest";

interface AlertItem {
  id: string;
  type: "human" | "animal" | "pest";
  title: string;
  time: string;
  location: string;
  thumbnail?: string;
}

const alerts: AlertItem[] = [
  {
    id: "1",
    type: "human",
    title: "Human Detected",
    time: "Today • 2:43 PM",
    location: "South Orchard",
    thumbnail: "https://images.pexels.com/photos/10205483/pexels-photo-10205483.jpeg",
  },
  {
    id: "2",
    type: "animal",
    title: "Wild Animal Detected",
    time: "Today • 1:15 PM",
    location: "North Field",
    thumbnail: "https://images.pexels.com/photos/30728628/pexels-photo-30728628.jpeg",
  },
  {
    id: "3",
    type: "pest",
    title: "Pest Colony Detected",
    time: "Yesterday • 5:20 PM",
    location: "East Wing",
    thumbnail: "https://images.pexels.com/photos/12561225/pexels-photo-12561225.jpeg",
  },
  {
    id: "4",
    type: "human",
    title: "Human Detected",
    time: "Yesterday • 3:00 PM",
    location: "Main Gate",
    thumbnail: "https://images.pexels.com/photos/10205483/pexels-photo-10205483.jpeg",
  },
];

const getAlertColor = (type: AlertItem["type"]) => {
  switch (type) {
    case "human":
      return "bg-terrakeeper-alert-human text-white";
    case "animal":
      return "bg-terrakeeper-alert-animal text-white";
    case "pest":
      return "bg-terrakeeper-alert-pest text-white";
  }
};

const getAlertIcon = (type: AlertItem["type"]) => {
  switch (type) {
    case "human":
      return <AlertTriangle className="w-4 h-4" />;
    case "animal":
      return <Target className="w-4 h-4" />;
    case "pest":
      return <Bug className="w-4 h-4" />;
  }
};

const getAlertLabel = (type: AlertItem["type"]) => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};

export default function Alerts() {
  const [activeTab, setActiveTab] = useState<AlertType>("all");

  const filteredAlerts =
    activeTab === "all"
      ? alerts
      : alerts.filter((alert) => alert.type === activeTab);

  const tabs: { id: AlertType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "human", label: "Human" },
    { id: "animal", label: "Animal" },
    { id: "pest", label: "Pest" },
  ];

  return (
    <div className="min-h-screen bg-white pb-28 pt-6">
      <div className="px-5 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 font-inter">
          Alerts
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? "border-terrakeeper-light-green text-terrakeeper-light-green"
                  : "border-transparent text-terrakeeper-gray hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Alert Cards */}
        <div className="space-y-3">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex gap-3 bg-white border border-gray-200 rounded-xl p-3 h-24 hover:shadow-md transition"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={alert.thumbnail}
                    alt={alert.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-gray-900">
                        {alert.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${getAlertColor(
                          alert.type,
                        )}`}
                      >
                        {getAlertIcon(alert.type)}
                        {getAlertLabel(alert.type)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{alert.time}</p>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                      📍 {alert.location}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center">
                  <button className="text-terrakeeper-light-green hover:bg-green-50 p-2 rounded-lg transition">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No alerts for this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
