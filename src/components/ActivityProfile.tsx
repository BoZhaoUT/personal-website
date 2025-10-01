import {
  Dialog,
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@mui/material"
import {
  MoreHoriz as MoreIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  Call as CallIcon,
  Videocam as VideoIcon,
  PlayCircle as PlayIcon,
} from "@mui/icons-material"
import { sampleActivities } from "../data/sampleActivities"

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
  // Get the primary activity (most posts)
  const primaryActivity = sampleActivities.reduce((prev, current) =>
    prev.posts > current.posts ? prev : current
  )

  const momentImages = [
    "https://picsum.photos/200/200?random=1",
    "https://picsum.photos/200/200?random=2",
    "https://picsum.photos/200/200?random=3",
    "https://picsum.photos/200/200?random=4",
  ]

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 2,
            maxHeight: "90vh",
            bgcolor: "#1a1a1a",
            color: "#fff",
          },
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
          <Avatar
            src={author.avatar}
            alt={author.name}
            sx={{ width: 72, height: 72, borderRadius: "4px" }}
          />
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {author.name}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#999", mb: 0.5 }}>
              {primaryActivity.tagline}
            </Typography>
          </Box>
          <IconButton sx={{ color: "#999" }}>
            <MoreIcon />
          </IconButton>
        </Box>

        {/* Moments Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
            borderTop: "1px solid #333",
            borderBottom: "1px solid #333",
            mb: 2,
          }}
        >
          <Typography sx={{ color: "#999" }}>Moments</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {momentImages.map((img, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={img}
                  alt={`Moment ${idx + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {idx === 2 && (
                  <PlayIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      fontSize: 24,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 4,
            pt: 3,
            borderTop: "1px solid #333",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <ChatIcon sx={{ color: "#6b8ca8", fontSize: 28 }} />
            <Typography sx={{ color: "#6b8ca8", fontSize: "0.85rem" }}>
              Messages
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <CallIcon sx={{ color: "#6b8ca8", fontSize: 28 }} />
            <Typography sx={{ color: "#6b8ca8", fontSize: "0.85rem" }}>
              Voice Call
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <VideoIcon sx={{ color: "#6b8ca8", fontSize: 28 }} />
            <Typography sx={{ color: "#6b8ca8", fontSize: "0.85rem" }}>
              Video Call
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default ActivityProfile
