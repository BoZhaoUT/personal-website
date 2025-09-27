import { useState } from "react";
import { Tab } from "@headlessui/react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

interface BottomNavigationProps {
  items: NavItem[];
  defaultSelected?: string;
  className?: string;
}

export default function BottomNavigation({
  items,
  defaultSelected = items[0]?.id,
  className = "",
}: BottomNavigationProps) {
  const [selectedIndex, setSelectedIndex] = useState(
    items.findIndex((item) => item.id === defaultSelected) || 0
  );

  const handleItemClick = (item: NavItem, index: number) => {
    setSelectedIndex(index);
    if (item.onClick) {
      item.onClick();
    }
    if (item.href) {
      window.location.href = item.href;
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 ${className}`}
    >
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
          {items.map((item, index) => (
            <Tab key={item.id} as="div" className="flex-1">
              {({ selected }) => (
                <button
                  onClick={() => handleItemClick(item, index)}
                  className={`
                    flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 w-full
                    ${
                      selected
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }
                  `}
                >
                  <div
                    className={`
                    mb-1 transition-transform duration-200
                    ${selected ? "scale-110" : "scale-100"}
                  `}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`
                    text-xs font-medium transition-all duration-200
                    ${selected ? "text-blue-600" : "text-gray-600"}
                  `}
                  >
                    {item.label}
                  </span>
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

// Icon components for common navigation items
export const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const SearchIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const HeartIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export const SettingsIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
