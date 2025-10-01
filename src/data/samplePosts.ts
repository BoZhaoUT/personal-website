import type { PostData } from "../components/Post"

export const samplePosts: PostData[] = [
  {
    id: "1",
    author: {
      name: "Hobbyist",
      username: "hobbyist",
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
      name: "Traveler",
      username: "traveler",
      avatar: "https://i.pravatar.cc/150?img=2",
      verified: true,
    },
    content: {
      text: "Beautiful sunset from my balcony today! 🌅 The colors were absolutely breathtaking. Can't wait to explore more of this amazing city!",
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
    tags: ["photography", "nature", "travel"],
  },
  {
    id: "3",
    author: {
      name: "Foodie",
      username: "foodie",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true,
    },
    content: {
      text: "Fresh dishes available today! Call for orders 📞 Our signature ramen is back on the menu!",
    },
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    location: "Tokyo, Japan",
    likes: 89,
    comments: 12,
    shares: 7,
    isLiked: false,
    isSaved: false,
    tags: ["food", "business", "ramen"],
  },
  {
    id: "4",
    author: {
      name: "Hobbyist",
      username: "hobbyist",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    content: {
      text: "Just finished my latest pottery project! 🏺 The glazing turned out better than expected. Can't wait to fire it in the kiln!",
      images: [
        "https://picsum.photos/400/300?random=10",
        "https://picsum.photos/400/300?random=11",
      ],
    },
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    location: "Portland, Oregon",
    likes: 67,
    comments: 15,
    shares: 4,
    isLiked: true,
    isSaved: false,
    tags: ["pottery", "art", "crafts"],
  },
  {
    id: "5",
    author: {
      name: "Foodie",
      username: "foodie",
      avatar: "https://i.pravatar.cc/150?img=5",
      verified: true,
    },
    content: {
      text: "Tried this amazing Korean BBQ place downtown! 🔥 The bulgogi was incredible and the service was top-notch. Highly recommend!",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    location: "Seoul, South Korea",
    likes: 156,
    comments: 31,
    shares: 18,
    isLiked: false,
    isSaved: true,
    tags: ["korean", "bbq", "restaurant"],
  },
  {
    id: "6",
    author: {
      name: "Traveler",
      username: "traveler",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    content: {
      text: "Hiking through the mountains today! 🏔️ The views are absolutely stunning. Nature never fails to amaze me.",
      images: [
        "https://picsum.photos/400/300?random=12",
        "https://picsum.photos/400/300?random=13",
        "https://picsum.photos/400/300?random=14",
      ],
    },
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    location: "Swiss Alps, Switzerland",
    likes: 203,
    comments: 42,
    shares: 25,
    isLiked: true,
    isSaved: true,
    tags: ["hiking", "mountains", "nature"],
  },
]
