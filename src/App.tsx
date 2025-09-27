import { useState } from "react"
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import BottomNavigation, {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  SettingsIcon,
} from "./components/BottomNavigation"

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => setCurrentPage("home"),
    },
    {
      id: "search",
      label: "Search",
      icon: <SearchIcon />,
      onClick: () => setCurrentPage("search"),
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <HeartIcon />,
      onClick: () => setCurrentPage("favorites"),
    },
    {
      id: "profile",
      label: "Profile",
      icon: <UserIcon />,
      onClick: () => setCurrentPage("profile"),
    },
    {
      id: "settings",
      label: "Settings",
      icon: <SettingsIcon />,
      onClick: () => setCurrentPage("settings"),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main content area with bottom padding for navigation */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 pb-20">
        <div className="flex gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={viteLogo}
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={reactLogo}
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 animate-spin"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center px-4">
          {currentPage === "home" && "Vite + React + Tailwind + Headless UI"}
          {currentPage === "search" && "Search Page"}
          {currentPage === "favorites" && "Favorites"}
          {currentPage === "profile" && "Profile"}
          {currentPage === "settings" && "Settings"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md w-full mx-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
          >
            Count is {count}
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Open Headless UI Dialog
          </button>

          <p className="text-gray-600 mt-4 text-center text-sm sm:text-base">
            Edit{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-xs sm:text-sm">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-500 mt-6 sm:mt-8 text-center text-sm sm:text-base px-4">
          Click on the Vite and React logos to learn more
        </p>

        {/* Headless UI Dialog Example */}
        <Transition appear show={isOpen}>
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="w-full max-w-xs sm:max-w-sm md:max-w-md transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Headless UI Dialog
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        This is a dialog created with Headless UI and styled
                        with Tailwind CSS!
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* Bottom Navigation */}
        <BottomNavigation
          items={navigationItems}
          defaultSelected="home"
          className="md:hidden" // Hide on desktop, show on mobile/tablet
        />
      </div>
    </div>
  )
}

export default App
