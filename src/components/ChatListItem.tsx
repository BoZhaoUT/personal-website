import { Box, Typography, Avatar } from "@mui/material"

export interface ChatData {
  id: string
  name: string
  avatar?: string
  lastMessage: string
  timestamp: string
  unreadCount?: number
  isMuted?: boolean
  messageType?: "text" | "voice" | "image" | "app"
}

interface ChatListItemProps {
  chat: ChatData
  onClick?: (chatId: string) => void
}

const ChatListItem = ({ chat, onClick }: ChatListItemProps) => {
  const formatMessagePreview = (message: string, type?: string) => {
    switch (type) {
      case "voice":
        return "[语音]"
      case "image":
        return "[图片]"
      case "app":
        return "[应用消息]"
      default:
        return message
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (diffInDays === 0) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    } else if (diffInDays === 1) {
      return (
        "昨天 " +
        date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      )
    } else if (diffInDays < 7) {
      const days = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ]
      return days[date.getDay()]
    } else {
      return date.toLocaleDateString("zh-CN", {
        month: "numeric",
        day: "numeric",
      })
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderBottom: "1px solid #2a2a2a",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#2a2a2a",
        },
      }}
      onClick={() => onClick?.(chat.id)}
    >
      {/* Avatar */}
      <Box sx={{ mr: 2, flexShrink: 0 }}>
        <Avatar
          src={chat.avatar}
          alt={chat.name}
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Chat Details */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Top Row: Name and Timestamp */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "#fff",
              fontSize: "1rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              mr: 1,
              textAlign: "left",
            }}
          >
            {chat.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#999",
              fontSize: "0.75rem",
              flexShrink: 0,
            }}
          >
            {formatTimestamp(chat.timestamp)}
          </Typography>
        </Box>

        {/* Bottom Row: Message Preview and Status */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#999",
              fontSize: "0.875rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              mr: 1,
              textAlign: "left",
            }}
          >
            {formatMessagePreview(chat.lastMessage, chat.messageType)}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatListItem
