import { useState } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  Box,
  Chip,
  Menu,
  MenuItem,
  Divider,
  Button,
} from "@mui/material"
import {
  MoreVert as MoreIcon,
  ThumbUp as LikeIcon,
  ChatBubble as CommentIcon,
  Share as ShareIcon,
  Bookmark as SaveIcon,
  BookmarkBorder as SaveBorderIcon,
} from "@mui/icons-material"

export interface PostData {
  id: string
  author: {
    name: string
    avatar?: string
    username: string
    verified?: boolean
  }
  content: {
    text?: string
    images?: string[]
    video?: string
  }
  timestamp: string
  location?: string
  likes: number
  comments: number
  shares: number
  isLiked?: boolean
  isSaved?: boolean
  tags?: string[]
}

interface PostProps {
  post: PostData
  onLike?: (postId: string) => void
  onComment?: (postId: string) => void
  onShare?: (postId: string) => void
  onSave?: (postId: string) => void
  onAuthorClick?: (authorId: string) => void
  variant?: "default" | "compact"
  showActions?: boolean
}

export default function Post({
  post,
  onLike,
  onComment,
  onShare,
  onSave,
  onAuthorClick,
  variant = "default",
  showActions = true,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false)
  const [isSaved, setIsSaved] = useState(post.isSaved || false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleLike = () => {
    const newLikedState = !isLiked
    setIsLiked(newLikedState)
    setLikeCount((prev) => (newLikedState ? prev + 1 : prev - 1))
    onLike?.(post.id)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
    onSave?.(post.id)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    )

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours} hours ago`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return "yesterday"
    if (diffInDays < 7) return `${diffInDays} days ago`
    return date.toLocaleDateString()
  }

  return (
    <div style={{ borderBottom: "1px solid #e0e0e0" }}>
      <Box sx={{ display: "flex", p: 2 }}>
        {/* Left Side - Avatar */}
        <Box sx={{ mr: 2, flexShrink: 0 }}>
          <Avatar
            src={post.author.avatar}
            alt={post.author.name}
            sx={{
              cursor: "pointer",
              width: 48,
              height: 48,
              borderRadius: "4px",
            }}
            onClick={() => onAuthorClick?.(post.author.username)}
          />
        </Box>

        {/* Right Side - Content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Text Content */}
          {post.content.text && (
            <Typography
              variant="body2"
              sx={{
                mb: post.content.images || post.content.video ? 2 : 1,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                textAlign: "left",
              }}
            >
              {post.content.text}
            </Typography>
          )}

          {/* Media Content */}
          {(post.content.images?.length || post.content.video) && (
            <Box sx={{ mb: 2 }}>
              {/* Video - Full Width */}
              {post.content.video && (
                <video
                  src={post.content.video}
                  controls
                  style={{
                    width: "60%",
                    height: "230px",
                    display: "block",
                  }}
                />
              )}

              {/* Images - Grid Layout */}
              {post.content.images && post.content.images.length > 0 && (
                <Box
                  sx={{
                    display: "grid",
                    gap: 0.5,
                    gridTemplateColumns: (() => {
                      const imageCount = post.content.images!.length
                      if (imageCount === 1) return "1fr"
                      if (imageCount === 2) return "30% 30%"
                      if (imageCount === 3) return "repeat(3, 1fr)"
                      if (imageCount === 4) return "repeat(1, 30% 30%)"
                      if (imageCount === 5) return "repeat(3, 1fr)"
                      if (imageCount === 6) return "repeat(3, 1fr)"
                      if (imageCount === 7) return "repeat(3, 1fr)"
                      if (imageCount === 8) return "repeat(3, 1fr)"
                      if (imageCount === 9) return "repeat(3, 1fr)"
                      return "repeat(3, 1fr)"
                    })(),
                    maxWidth: "100%",
                  }}
                >
                  {post.content.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Post content ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                        aspectRatio: "1",
                      }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          )}

          {/* Location */}
          {post.location && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                mb: 0.5,
                display: "block",
                textAlign: "left",
              }}
            >
              {post.location}
            </Typography>
          )}

          {/* Time */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mb: 1,
              display: "block",
              textAlign: "left",
            }}
          >
            {formatTimestamp(post.timestamp)}
          </Typography>

          {/* Actions */}
          {/* <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              startIcon={<LikeIcon />}
              onClick={handleLike}
              color={isLiked ? "primary" : "inherit"}
              size="small"
              sx={{ minWidth: "auto", px: 1 }}
            >
              Like
            </Button>
          </Box> */}
        </Box>
      </Box>
    </div>
  )
}
