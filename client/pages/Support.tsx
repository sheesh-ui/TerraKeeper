import { AlertCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-white pb-28 pt-6">
      <div className="px-5 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8 font-inter">
          Support
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-center gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-blue-900 font-medium">
              This page is being customized
            </p>
            <p className="text-blue-700 text-sm mt-1">
              Continue prompting to add content to this section
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
