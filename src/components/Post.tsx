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
    image?: string
    video?: string
  }
  timestamp: string
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
    if (diffInHours < 24) return `${diffInHours}h`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d`
    return date.toLocaleDateString()
  }

  const isCompact = variant === "compact"

  return (
    <Card
      elevation={isCompact ? 1 : 2}
      sx={{
        mb: isCompact ? 1 : 2,
        borderRadius: isCompact ? 1 : 2,
        "&:hover": {
          boxShadow: isCompact ? 2 : 4,
        },
        transition: "box-shadow 0.2s ease-in-out",
      }}
    >
      {/* Header */}
      <CardHeader
        avatar={
          <Avatar
            src={post.author.avatar}
            alt={post.author.name}
            sx={{ cursor: "pointer" }}
            onClick={() => onAuthorClick?.(post.author.username)}
          />
        }
        action={
          <IconButton aria-label="more" onClick={handleMenuClick} size="small">
            <MoreIcon />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography
              variant={isCompact ? "subtitle2" : "subtitle1"}
              component="span"
              sx={{ fontWeight: 600, cursor: "pointer" }}
              onClick={() => onAuthorClick?.(post.author.username)}
            >
              {post.author.name}
            </Typography>
            {post.author.verified && (
              <Chip
                label="✓"
                size="small"
                color="primary"
                sx={{ height: 16, fontSize: "0.7rem" }}
              />
            )}
          </Box>
        }
        subheader={
          <Typography variant="caption" color="text.secondary">
            @{post.author.username} • {formatTimestamp(post.timestamp)}
          </Typography>
        }
        sx={{
          pb: isCompact ? 1 : 2,
          "& .MuiCardHeader-content": {
            minWidth: 0,
          },
        }}
      />

      {/* More Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleMenuClose}>Report</MenuItem>
        <MenuItem onClick={handleMenuClose}>Hide post</MenuItem>
        <MenuItem onClick={handleMenuClose}>Copy link</MenuItem>
      </Menu>

      {/* Content */}
      <CardContent sx={{ pt: 0, pb: isCompact ? 1 : 2 }}>
        {post.content.text && (
          <Typography
            variant={isCompact ? "body2" : "body1"}
            sx={{
              mb: post.content.image || post.content.video ? 2 : 0,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {post.content.text}
          </Typography>
        )}

        {/* Media */}
        {(post.content.image || post.content.video) && (
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              mb: 2,
            }}
          >
            {post.content.image && (
              <img
                src={post.content.image}
                alt="Post content"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
            {post.content.video && (
              <video
                src={post.content.video}
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
          </Box>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
            {post.tags.map((tag, index) => (
              <Chip
                key={index}
                label={`#${tag}`}
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.75rem" }}
              />
            ))}
          </Box>
        )}
      </CardContent>

      {/* Actions */}
      {showActions && (
        <>
          <Divider />
          <CardActions sx={{ justifyContent: "space-between", px: 2, py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                startIcon={<LikeIcon />}
                onClick={handleLike}
                color={isLiked ? "primary" : "inherit"}
                size="small"
                sx={{ minWidth: "auto", px: 1 }}
              >
                {likeCount > 0 && likeCount}
              </Button>
              <Button
                startIcon={<CommentIcon />}
                onClick={() => onComment?.(post.id)}
                size="small"
                sx={{ minWidth: "auto", px: 1 }}
              >
                {post.comments > 0 && post.comments}
              </Button>
              <Button
                startIcon={<ShareIcon />}
                onClick={() => onShare?.(post.id)}
                size="small"
                sx={{ minWidth: "auto", px: 1 }}
              >
                {post.shares > 0 && post.shares}
              </Button>
            </Box>
            <IconButton onClick={handleSave} size="small">
              {isSaved ? <SaveIcon /> : <SaveBorderIcon />}
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  )
}

// Sample data for testing
export const samplePosts: PostData[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
      avatar: "https://i.pravatar.cc/150?img=1",
      verified: true,
    },
    content: {
      text: "Just finished building this awesome React component! 🚀 The Material UI integration is looking great. What do you think?",
    },
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    likes: 42,
    comments: 8,
    shares: 3,
    isLiked: false,
    isSaved: false,
    tags: ["react", "materialui", "frontend"],
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    content: {
      text: "Beautiful sunset from my balcony today! 🌅",
      image: "https://picsum.photos/600/400?random=1",
    },
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    likes: 128,
    comments: 23,
    shares: 15,
    isLiked: true,
    isSaved: true,
    tags: ["photography", "nature"],
  },
  {
    id: "3",
    author: {
      name: "Tech Updates",
      username: "techupdates",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true,
    },
    content: {
      text: "New JavaScript features coming in ES2024! Exciting times for developers.",
    },
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    likes: 89,
    comments: 12,
    shares: 7,
    isLiked: false,
    isSaved: false,
    tags: ["javascript", "webdev", "programming"],
  },
]
