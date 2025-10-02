import { Box } from "@mui/material"
import Post, { type PostData } from "./Post"

interface MomentsProps {
  posts: PostData[]
  onAuthorClick: (username: string) => void
}

const Moments = ({ posts, onAuthorClick }: MomentsProps) => {
  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} onAuthorClick={onAuthorClick} />
        ))}
      </Box>
    </Box>
  )
}

export default Moments
