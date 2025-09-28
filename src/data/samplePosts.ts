import type { PostData } from "../components/Post"

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
    location: "Markham, Ontario, Canada",
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
      images: [
        "https://picsum.photos/400/300?random=1",
        "https://picsum.photos/400/300?random=2",
        "https://picsum.photos/400/300?random=3",
        "https://picsum.photos/400/300?random=4",
        "https://picsum.photos/400/300?random=5",
        "https://picsum.photos/400/300?random=6",
        // "https://picsum.photos/400/300?random=7",
        // "https://picsum.photos/400/300?random=8",
        // "https://picsum.photos/400/300?random=9",
      ],
    },
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    location: "Beijing, China",
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
      name: "Food Vendor",
      username: "foodvendor",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true,
    },
    content: {
      text: "Fresh dishes available today! Call for orders 📞",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    likes: 89,
    comments: 12,
    shares: 7,
    isLiked: false,
    isSaved: false,
    tags: ["food", "business"],
  },
]
