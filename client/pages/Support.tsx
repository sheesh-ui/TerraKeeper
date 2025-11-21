import {
  HelpCircle,
  MessageCircle,
  BookOpen,
  Video,
  ChevronRight,
} from "lucide-react";

interface SupportCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
}

const supportCards: SupportCard[] = [
  {
    id: "faq",
    title: "FAQ",
    description: "Find answers to common questions",
    icon: <HelpCircle className="w-8 h-8 text-terrakeeper-light-green" />,
    action: "View FAQ",
  },
  {
    id: "contact",
    title: "Contact Support",
    description: "Get help from our support team",
    icon: <MessageCircle className="w-8 h-8 text-terrakeeper-light-green" />,
    action: "Contact Us",
  },
  {
    id: "manual",
    title: "User Manual",
    description: "Learn how to use TerraKeeper",
    icon: <BookOpen className="w-8 h-8 text-terrakeeper-light-green" />,
    action: "Read Manual",
  },
  {
    id: "video",
    title: "Video Tutorial",
    description: "Watch step-by-step guides",
    icon: <Video className="w-8 h-8 text-terrakeeper-light-green" />,
    action: "Watch Videos",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white pb-28 pt-6">
      <div className="px-5 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 font-inter">
          Support
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          Get help and learn more about TerraKeeper
        </p>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {supportCards.map((card) => (
            <button
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 text-left hover:shadow-lg hover:border-terrakeeper-light-green transition group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">{card.icon}</div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-terrakeeper-light-green transition" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-gray-600 mb-3">{card.description}</p>
              <span className="inline-block text-xs font-medium text-terrakeeper-light-green">
                {card.action} →
              </span>
            </button>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-green-50 rounded-2xl p-6 mb-8 border border-green-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h2>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition"
            >
              <span className="text-sm font-medium text-gray-900">
                System Status
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition"
            >
              <span className="text-sm font-medium text-gray-900">
                Release Notes
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition"
            >
              <span className="text-sm font-medium text-gray-900">
                Community Forum
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-600 font-medium">EMAIL</p>
              <a
                href="mailto:support@terrakeeper.com"
                className="text-sm font-medium text-terrakeeper-light-green hover:underline"
              >
                support@terrakeeper.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium">PHONE</p>
              <a
                href="tel:+1234567890"
                className="text-sm font-medium text-terrakeeper-light-green hover:underline"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium">
                BUSINESS HOURS
              </p>
              <p className="text-sm text-gray-700">
                Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
