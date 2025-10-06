import { Box, Typography, TextField, InputAdornment } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import ChatListItem, { type ChatData } from "./ChatListItem"

interface ChatListProps {
  chats: ChatData[]
  onChatClick?: (chatId: string) => void
}

const ChatList = ({ chats, onChatClick }: ChatListProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        overflowY: "auto",
        width: "98vw",
        marginLeft: "-50vw",
        marginTop: "-2vw",
        left: "50%",
        position: "relative",
      }}
    >
      {/* Phone-style header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#000000",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #333",
        }}
      >
        {/* Left side - Time */}
        <Typography
          variant="body2"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>

        {/* Center - Title */}
        <Typography
          variant="h6"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Chats
        </Typography>

        {/* Right side - Battery */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff",
              fontSize: "12px",
            }}
          >
            100%
          </Typography>
          <Box
            sx={{
              width: "20px",
              height: "10px",
              border: "1px solid #ffffff",
              borderRadius: "2px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                right: "-2px",
                top: "2px",
                width: "2px",
                height: "4px",
                backgroundColor: "#ffffff",
                borderRadius: "0 1px 1px 0",
              },
            }}
          />
        </Box>
      </Box>

      {/* Search bar */}
      <Box
        sx={{
          padding: "12px 16px",
          backgroundColor: "#1a1a1a",
          borderBottom: "1px solid #333",
        }}
      >
        <TextField
          fullWidth
          placeholder="Search chats..."
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#2a2a2a",
              borderRadius: "2px",
              "& fieldset": {
                borderColor: "#444",
              },
              "&:hover fieldset": {
                borderColor: "#666",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#007bff",
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff",
              padding: "8px 12px",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#888",
              opacity: 1,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#888", fontSize: "20px" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Chat list */}
      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} onClick={onChatClick} />
      ))}
    </Box>
  )
}

export default ChatList
