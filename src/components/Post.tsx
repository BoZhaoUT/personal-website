import { Avatar, Typography, Box } from "@mui/material"

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
  onAuthorClick?: (authorId: string) => void
}

const Post = ({ post, onAuthorClick }: PostProps) => {
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
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 0.5,
                  textAlign: "left",
                  color: "#6B8DB8",
                }}
              >
                Post Content
              </Typography>
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
            </Box>
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
                        aspectRatio: "1",
                        objectFit: "cover",
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
        </Box>
      </Box>
    </div>
  )
}

export default Post
