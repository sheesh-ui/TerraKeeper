import { useState } from "react";
import { X, Camera, ZoomIn, Moon, Clock } from "lucide-react";

interface CameraDevice {
  id: string;
  name: string;
  location: string;
  isLive: boolean;
  thumbnail?: string;
}

const cameras: CameraDevice[] = [
  { id: "1", name: "West Cam", location: "West Field", isLive: true },
  { id: "2", name: "North Cam", location: "North Field", isLive: true },
  { id: "3", name: "South Cam", location: "South Orchard", isLive: false },
  { id: "4", name: "East Cam", location: "East Wing", isLive: true },
  { id: "5", name: "Gate Cam", location: "Main Gate", isLive: true },
  { id: "6", name: "Barn Cam", location: "Barn Area", isLive: false },
];

export default function Cameras() {
  const [selectedCamera, setSelectedCamera] = useState<CameraDevice | null>(
    null
  );

  if (selectedCamera) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => setSelectedCamera(null)}
          className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Feed */}
        <div className="flex-1 bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Live
            </div>
            <div className="text-gray-400 text-center">
              <Camera className="w-16 h-16 mx-auto mb-2 opacity-50" />
              <p className="text-sm">{selectedCamera.name}</p>
              <p className="text-xs text-gray-500">{selectedCamera.location}</p>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-terrakeeper-dark-green text-white px-5 py-6 flex justify-around items-center gap-4">
          <button className="flex flex-col items-center justify-center gap-2 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <Camera className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Snapshot</span>
          </button>

          <button className="flex flex-col items-center justify-center gap-2 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <ZoomIn className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Zoom</span>
          </button>

          <button className="flex flex-col items-center justify-center gap-2 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <Moon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Night</span>
          </button>

          <button className="flex flex-col items-center justify-center gap-2 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Timeline</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-28 pt-6">
      <div className="px-5 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 font-inter">
          Live Cameras
        </h1>

        {/* Camera Grid */}
        <div className="grid grid-cols-2 gap-4">
          {cameras.map((camera) => (
            <button
              key={camera.id}
              onClick={() => setSelectedCamera(camera)}
              className="group relative bg-gradient-to-b from-gray-400 to-gray-600 rounded-3xl overflow-hidden aspect-[170/130] hover:shadow-lg transition"
            >
              {/* Status Dot */}
              {camera.isLive && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Live
                </div>
              )}

              {/* Label */}
              <div className="absolute bottom-3 left-3 z-10 text-white font-semibold text-sm">
                {camera.name}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="text-white text-center">
                  <Camera className="w-8 h-8 mx-auto mb-1" />
                  <p className="text-xs font-medium">View Feed</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
