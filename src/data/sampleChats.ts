import { type ChatData } from "../components/ChatListItem"

export const sampleChats: ChatData[] = [
  {
    id: "1",
    name: "看喜讯群",
    avatar: "https://picsum.photos/48/48?random=1",
    lastMessage: 'zhao: [语音] 4"',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    messageType: "voice",
    isMuted: true,
  },
  {
    id: "2",
    name: "25夏季草地场 周四晚7-9",
    avatar: "https://picsum.photos/48/48?random=2",
    lastMessage: "Zhou: 好的，明天见！",
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    isMuted: true,
  },
  {
    id: "3",
    name: "2024第5届父亲节运动会",
    avatar: "https://picsum.photos/48/48?random=3",
    lastMessage: "Flora Zhen: 大家记得带水！",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    isMuted: true,
  },
  {
    id: "4",
    name: "五谷杂粮4群",
    avatar: "https://picsum.photos/48/48?random=4",
    lastMessage: "五谷杂粮老韩: [图片]",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    messageType: "image",
    isMuted: true,
  },
  {
    id: "5",
    name: "腾讯新闻",
    avatar: "https://picsum.photos/48/48?random=5",
    lastMessage: "今日头条：科技创新推动经济发展",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    isMuted: true,
  },
  {
    id: "6",
    name: "公众号",
    avatar: "https://picsum.photos/48/48?random=6",
    lastMessage: "[1条通知] 您有新的订阅内容",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
    unreadCount: 1,
    isMuted: true,
  },
  {
    id: "7",
    name: "微信运动",
    avatar: "https://picsum.photos/48/48?random=7",
    lastMessage: "[应用消息]",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    messageType: "app",
    isMuted: true,
  },
  {
    id: "8",
    name: "工作群",
    avatar: "https://picsum.photos/48/48?random=8",
    lastMessage: "李经理: 明天的会议改到下午3点",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    unreadCount: 3,
    isMuted: false,
  },
  {
    id: "9",
    name: "家庭群",
    avatar: "https://picsum.photos/48/48?random=9",
    lastMessage: "妈妈: 记得按时吃饭",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    isMuted: false,
  },
  {
    id: "10",
    name: "同学聚会",
    avatar: "https://picsum.photos/48/48?random=10",
    lastMessage: "张同学: 聚会照片已上传",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    messageType: "image",
    isMuted: true,
  },
]

