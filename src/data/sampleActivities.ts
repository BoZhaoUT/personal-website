export interface Activity {
  id: string
  name: string
  tagline: string
  posts: number
}

export const sampleActivities: Activity[] = [
  {
    id: "foodie",
    name: "Foodie",
    tagline: "Here's my life as a foodie",
    posts: 24,
  },
  {
    id: "travel",
    name: "Travel",
    tagline: "Exploring the world one city at a time",
    posts: 18,
  },
  {
    id: "hobby",
    name: "Hobby",
    tagline: "Living my best creative life",
    posts: 12,
  },
]
