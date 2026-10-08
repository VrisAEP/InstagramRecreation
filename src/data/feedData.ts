export type Story = {
  id: string;
  username: string;
  image: string;
  isOwn: boolean;
};

export type Post = {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  commentCount: number;
};

export const stories: Story[] = [
  {
    id: "1",
    username: "Your story",
    image: "https://picsum.photos/seed/fernando/200/200",
    isOwn: true,
  },
  {
    id: "2",
    username: "weekend.wander",
    image: "https://picsum.photos/seed/weekend/200/200",
    isOwn: false,
  },
  {
    id: "3",
    username: "standingdouble",
    image: "https://picsum.photos/seed/standing/200/200",
    isOwn: false,
  },
  {
    id: "4",
    username: "daily.outdoors",
    image: "https://picsum.photos/seed/outdoors/200/200",
    isOwn: false,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    username: "daily.outdoors",
    avatar: "https://picsum.photos/seed/outdoors/200/200",
    image: "https://picsum.photos/seed/mountaintrip/800/800",
    caption: "A little time outside.",
    likes: 128,
    commentCount: 12,
  },
  {
    id: "2",
    username: "fer.lopez754",
    avatar: "https://picsum.photos/seed/fernando/200/200",
    image: "https://picsum.photos/seed/travelday/800/800",
    caption: "Absolutely incredible.",
    likes: 69,
    commentCount: 3,
  },
];
