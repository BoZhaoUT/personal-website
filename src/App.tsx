import { useState } from "react"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Box,
} from "@mui/material"
import "./App.css"
import BottomNavigation, {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
} from "./components/BottomNavigation"
import { type PostData } from "./components/Post"
import ActivityProfile from "./components/ActivityProfile"
import Moments from "./components/Moments"
import ChatList from "./components/ChatList"
import { samplePosts } from "./data/samplePosts"
import { sampleChats } from "./data/sampleChats"

// Create Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
})

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [posts] = useState<PostData[]>(samplePosts)
  const [activityProfileOpen, setActivityProfileOpen] = useState(false)
  const [selectedAuthor, setSelectedAuthor] = useState<
    PostData["author"] | null
  >(null)

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => setCurrentPage("home"),
    },
    {
      id: "favorites",
      label: "Chats",
      icon: <HeartIcon />,
      onClick: () => setCurrentPage("favorites"),
    },
    {
      id: "moments",
      label: "Moments",
      icon: <SearchIcon />,
      onClick: () => setCurrentPage("moments"),
    },
    {
      id: "profile",
      label: "Profile",
      icon: <UserIcon />,
      onClick: () => setCurrentPage("profile"),
    },
  ]

  const handleAuthorClick = (username: string) => {
    const author = posts.find(
      (post) => post.author.username === username
    )?.author
    if (author) {
      setSelectedAuthor(author)
      setActivityProfileOpen(true)
    }
  }

  const handleCloseActivityProfile = () => {
    setActivityProfileOpen(false)
    setSelectedAuthor(null)
  }

  const handleChatClick = (chatId: string) => {
    console.log("Chat clicked:", chatId)
    // TODO: Navigate to chat conversation
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main content area */}
        <div className="flex-1 pb-20">
          {currentPage === "home" && (
            <Box sx={{ py: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                sx={{ px: 2 }}
              >
                Welcome
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ px: 2 }}
              >
                Check out the Moments tab to see posts from your network!
              </Typography>
            </Box>
          )}

          {currentPage === "moments" && (
            <Moments posts={posts} onAuthorClick={handleAuthorClick} />
          )}

          {currentPage === "search" && (
            <Box sx={{ py: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                sx={{ px: 2 }}
              >
                Search
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ px: 2 }}
              >
                Search functionality coming soon...
              </Typography>
            </Box>
          )}

          {currentPage === "favorites" && (
            <ChatList chats={sampleChats} onChatClick={handleChatClick} />
          )}

          {currentPage === "profile" && (
            <Box sx={{ py: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                sx={{ px: 2 }}
              >
                Profile
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ px: 2 }}
              >
                Profile page coming soon...
              </Typography>
            </Box>
          )}

          {currentPage === "settings" && (
            <Box sx={{ py: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                sx={{ px: 2 }}
              >
                Settings
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ px: 2 }}
              >
                Settings page coming soon...
              </Typography>
            </Box>
          )}
        </div>

        {/* Sticky Bottom Navigation */}
        <BottomNavigation items={navigationItems} defaultSelected="home" />

        {/* Activity Profile Modal */}
        {selectedAuthor && (
          <ActivityProfile
            open={activityProfileOpen}
            onClose={handleCloseActivityProfile}
            author={selectedAuthor}
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
