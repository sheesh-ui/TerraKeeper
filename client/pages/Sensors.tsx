import { useState } from "react";
import { Camera, AlertCircle, Thermometer, Plus, X } from "lucide-react";

interface Sensor {
  id: string;
  name: string;
  type: "camera" | "motion" | "thermal";
  location: string;
  status: "active" | "offline";
  battery?: number;
}

const sensorsList: Sensor[] = [
  {
    id: "1",
    name: "Front Gate Camera",
    type: "camera",
    location: "Main Gate",
    status: "active",
    battery: 85,
  },
  {
    id: "2",
    name: "Motion Sensor A",
    type: "motion",
    location: "North Field",
    status: "active",
    battery: 92,
  },
  {
    id: "3",
    name: "Thermal Sensor",
    type: "thermal",
    location: "Barn Area",
    status: "active",
    battery: 65,
  },
  {
    id: "4",
    name: "Perimeter Camera",
    type: "camera",
    location: "South Orchard",
    status: "offline",
  },
  {
    id: "5",
    name: "Motion Sensor B",
    type: "motion",
    location: "East Wing",
    status: "active",
    battery: 78,
  },
];

const getSensorIcon = (type: Sensor["type"]) => {
  switch (type) {
    case "camera":
      return <Camera className="w-5 h-5 text-terrakeeper-light-green" />;
    case "motion":
      return <AlertCircle className="w-5 h-5 text-terrakeeper-light-green" />;
    case "thermal":
      return <Thermometer className="w-5 h-5 text-terrakeeper-light-green" />;
  }
};

const getSensorTypeLabel = (type: Sensor["type"]) => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};

export default function Sensors() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    type: "camera",
    name: "",
    location: "",
  });

  const handleAddSensor = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddForm(false);
    setFormData({ type: "camera", name: "", location: "" });
  };

  if (showAddForm) {
    return (
      <div className="min-h-screen bg-white pb-28 pt-6">
        <div className="px-5 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 font-inter">
              Add Sensor
            </h1>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <form onSubmit={handleAddSensor} className="space-y-5">
            {/* Sensor Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sensor Type
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terrakeeper-light-green focus:border-transparent"
              >
                <option value="camera">Camera</option>
                <option value="motion">Motion Sensor</option>
                <option value="thermal">Thermal Sensor</option>
              </select>
            </div>

            {/* Sensor Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sensor Name
              </label>
              <input
                type="text"
                placeholder="e.g., Front Gate Camera"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terrakeeper-light-green focus:border-transparent"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g., Main Gate"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terrakeeper-light-green focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-terrakeeper-light-green text-white font-semibold rounded-2xl hover:bg-opacity-90 transition mt-6"
            >
              Register Sensor
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-28 pt-6">
      <div className="px-5 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 font-inter">
            Sensors
          </h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-terrakeeper-light-green text-white p-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        {/* Sensors List */}
        <div className="space-y-3">
          {sensorsList.map((sensor) => (
            <div
              key={sensor.id}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 h-20 hover:shadow-md transition"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                {getSensorIcon(sensor.type)}
              </div>

              {/* Sensor Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900">
                  {sensor.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-600">
                    {getSensorTypeLabel(sensor.type)}
                  </span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs text-gray-600">
                    {sensor.location}
                  </span>
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      sensor.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>
              </div>

              {/* Battery */}
              {sensor.battery !== undefined && (
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {sensor.battery}%
                  </p>
                  <p className="text-xs text-gray-500">Battery</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
