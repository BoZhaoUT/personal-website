import { Box } from "@mui/material"
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
      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} onClick={onChatClick} />
      ))}
    </Box>
  )
}

export default ChatList
