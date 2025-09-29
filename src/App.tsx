import { useState } from "react"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Box,
} from "@mui/material"
import "./App.css"
import BottomNavigation, {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  SettingsIcon,
} from "./components/BottomNavigation"
import Post, { type PostData } from "./components/Post"
import { samplePosts } from "./data/samplePosts"

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

  const handleLike = (postId: string) => {
    console.log("Liked post:", postId)
  }

  const handleComment = (postId: string) => {
    console.log("Comment on post:", postId)
  }

  const handleShare = (postId: string) => {
    console.log("Share post:", postId)
  }

  const handleSave = (postId: string) => {
    console.log("Save post:", postId)
  }

  const handleAuthorClick = (username: string) => {
    console.log("View profile:", username)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main content area */}
        <div className="flex-1 pb-20">
          {currentPage === "home" && (
            <Box sx={{ py: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {posts.map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                    onAuthorClick={handleAuthorClick}
                  />
                ))}
              </Box>
            </Box>
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
            <Box sx={{ py: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                sx={{ px: 2 }}
              >
                Favorites
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ px: 2 }}
              >
                Your saved posts will appear here...
              </Typography>
            </Box>
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
      </div>
    </ThemeProvider>
  )
}

export default App
