import { Dialog, Box, Typography, Avatar, IconButton } from "@mui/material"
import {
  MoreHoriz as MoreIcon,
  Chat as ChatIcon,
  Call as CallIcon,
  Videocam as VideoIcon,
  PlayCircle as PlayIcon,
} from "@mui/icons-material"
import { sampleActivities } from "../data/sampleActivities"
import { samplePosts } from "../data/samplePosts"

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
  // Get latest 4 posts from this author
  const authorPosts = samplePosts
    .filter((post) => post.author.username === author.username)
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
    .slice(0, 4)

  // Get activity type based on author's name
  const getActivityByAuthor = () => {
    const authorName = author.name.toLowerCase()

    if (authorName.includes("foodie")) {
      return (
        sampleActivities.find((activity) => activity.id === "foodie") ||
        sampleActivities[0]
      )
    } else if (authorName.includes("traveler")) {
      return (
        sampleActivities.find((activity) => activity.id === "travel") ||
        sampleActivities[0]
      )
    } else if (authorName.includes("hobbyist")) {
      return (
        sampleActivities.find((activity) => activity.id === "hobby") ||
        sampleActivities[0]
      )
    }

    // Default fallback
    return sampleActivities[0]
  }

  const primaryActivity = getActivityByAuthor()

  // Extract media from posts (first image or video thumbnail)
  const momentImages = authorPosts
    .map((post) => {
      if (post.content.images && post.content.images.length > 0) {
        return {
          src: post.content.images[0],
          isVideo: false,
          postId: post.id,
        }
      } else if (post.content.video) {
        return {
          src: post.content.video,
          isVideo: true,
          postId: post.id,
        }
      }
      return null
    })
    .filter(Boolean)

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
            {momentImages.map((moment, idx) => (
              <Box
                key={moment?.postId || idx}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {moment?.isVideo ? (
                  <video
                    src={moment.src}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    muted
                  />
                ) : (
                  <img
                    src={moment?.src}
                    alt={`Moment ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                {moment?.isVideo && (
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
            {/* Fill remaining slots if less than 4 moments */}
            {Array.from({ length: Math.max(0, 4 - momentImages.length) }).map(
              (_, idx) => (
                <Box
                  key={`empty-${idx}`}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 1,
                    border: "1px solid #333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: "#666", fontSize: "0.75rem" }}>
                    {momentImages.length + idx + 1}
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Box>

        {/* Bottom Actions */}
      </Box>
    </Dialog>
  )
}

export default ActivityProfile
