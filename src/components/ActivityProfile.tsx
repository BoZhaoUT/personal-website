import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Chip,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material"
import {
  Close as CloseIcon,
  TravelExplore as TravelIcon,
  SportsEsports as HobbyIcon,
  Restaurant as FoodieIcon,
} from "@mui/icons-material"

interface ActivityProfileProps {
  open: boolean
  onClose: () => void
  author: {
    name: string
    avatar?: string
    username: string
    verified?: boolean
  }
}

const ActivityProfile = ({ open, onClose, author }: ActivityProfileProps) => {
  const activities = [
    {
      id: "travel",
      name: "Travel",
      icon: <TravelIcon />,
      color: "#4CAF50",
      description: "Exploring new places and cultures",
      posts: 12,
    },
    {
      id: "hobby",
      name: "Hobby",
      icon: <HobbyIcon />,
      color: "#2196F3",
      description: "Creative and recreational activities",
      posts: 8,
    },
    {
      id: "foodie",
      name: "Foodie",
      icon: <FoodieIcon />,
      color: "#FF9800",
      description: "Culinary adventures and food experiences",
      posts: 15,
    },
  ]

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: "80vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={author.avatar}
            alt={author.name}
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography variant="h6" component="div">
              {author.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{author.username}
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Activity Profile
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Discover {author.name}'s interests and activities
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {activities.map((activity) => (
            <Box
              key={activity.id}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: activity.color,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: `${activity.color}20`,
                  color: activity.color,
                  mr: 2,
                }}
              >
                {activity.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {activity.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.description}
                </Typography>
              </Box>
              <Chip
                label={`${activity.posts} posts`}
                size="small"
                sx={{
                  backgroundColor: `${activity.color}20`,
                  color: activity.color,
                  fontWeight: 500,
                }}
              />
            </Box>
          ))}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button onClick={onClose} variant="contained">
          View Profile
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ActivityProfile
