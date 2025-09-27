import { useState } from "react"
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material"
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Favorite as HeartIcon,
  Person as UserIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
}

interface BottomNavigationProps {
  items: NavItem[]
  defaultSelected?: string
  className?: string
}

export default function BottomNavigation({
  items,
  defaultSelected = items[0]?.id,
  className = "",
}: BottomNavigationProps) {
  const [selectedIndex, setSelectedIndex] = useState(
    items.findIndex((item) => item.id === defaultSelected) || 0
  )

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedIndex(newValue)
    const item = items[newValue]
    if (item.onClick) {
      item.onClick()
    }
    if (item.href) {
      window.location.href = item.href
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: { xs: "block", md: "none" }, // Hide on desktop
      }}
      className={className}
    >
      <MuiBottomNavigation
        value={selectedIndex}
        onChange={handleChange}
        showLabels
        sx={{
          maxWidth: "md",
          mx: "auto",
        }}
      >
        {items.map((item) => (
          <BottomNavigationAction
            key={item.id}
            label={item.label}
            icon={item.icon}
            sx={{
              "&.Mui-selected": {
                color: "primary.main",
              },
            }}
          />
        ))}
      </MuiBottomNavigation>
    </Paper>
  )
}

// Export Material UI icons for use in other components
export { HomeIcon, SearchIcon, HeartIcon, UserIcon, SettingsIcon }
