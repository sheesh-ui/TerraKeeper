import { Cloud, AlertTriangle, Target, Bug, Smartphone, BarChart3, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white pb-28 pt-4">
      <div className="px-5 max-w-2xl mx-auto">
        {/* Greeting */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 font-inter">
          Good day, Farmer Juan!
        </h1>

        {/* Weather Chip */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-4 mb-6 w-40 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Cloud className="w-8 h-8 mb-1" />
              <p className="text-2xl font-bold">28°C</p>
            </div>
            <div className="text-right text-sm">
              <p className="opacity-80">Humidity</p>
              <p className="font-semibold">76%</p>
            </div>
          </div>
        </div>

        {/* Live Monitoring Preview */}
        <div className="bg-gradient-to-b from-gray-400 to-gray-600 rounded-2xl overflow-hidden mb-6 h-52 relative shadow-md">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-base">
            North Field Camera
          </div>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Live
            </span>
          </div>
        </div>

        {/* Alert Summary Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Alert Summary
          </h2>
          <div className="flex gap-4">
            {/* Human Alert Card */}
            <div className="flex-1 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-terrakeeper-alert-human/10 flex items-center justify-center mb-2">
                <AlertTriangle className="w-5 h-5 text-terrakeeper-alert-human" />
              </div>
              <p className="text-xs text-gray-600">Human</p>
              <p className="text-lg font-bold text-terrakeeper-alert-human">12</p>
            </div>

            {/* Animal Alert Card */}
            <div className="flex-1 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-terrakeeper-alert-animal/10 flex items-center justify-center mb-2">
                <Target className="w-5 h-5 text-terrakeeper-alert-animal" />
              </div>
              <p className="text-xs text-gray-600">Animal</p>
              <p className="text-lg font-bold text-terrakeeper-alert-animal">8</p>
            </div>

            {/* Pest Alert Card */}
            <div className="flex-1 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-terrakeeper-alert-pest/10 flex items-center justify-center mb-2">
                <Bug className="w-5 h-5 text-terrakeeper-alert-pest" />
              </div>
              <p className="text-xs text-gray-600">Pest</p>
              <p className="text-lg font-bold text-terrakeeper-alert-pest">5</p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <Link
              to="/sensors"
              className="flex flex-col items-center justify-center gap-2 bg-white rounded-3xl p-4 shadow-sm border border-gray-100 min-w-max hover:shadow-md transition"
            >
              <Smartphone className="w-5 h-5 text-terrakeeper-light-green" />
              <span className="text-xs font-semibold text-gray-700">
                Add Sensor
              </span>
            </Link>

            <Link
              to="/alerts"
              className="flex flex-col items-center justify-center gap-2 bg-white rounded-3xl p-4 shadow-sm border border-gray-100 min-w-max hover:shadow-md transition"
            >
              <BarChart3 className="w-5 h-5 text-terrakeeper-light-green" />
              <span className="text-xs font-semibold text-gray-700">
                View Reports
              </span>
            </Link>

            <button className="flex flex-col items-center justify-center gap-2 bg-terrakeeper-alert-human text-white rounded-3xl p-4 shadow-sm min-w-max hover:opacity-90 transition">
              <Phone className="w-5 h-5" />
              <span className="text-xs font-semibold">Hotline</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
