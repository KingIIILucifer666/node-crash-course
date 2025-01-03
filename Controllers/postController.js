const post = [
  { id: 1, title: "This is post 1" },
  { id: 2, title: "This is post 2" },
  { id: 3, title: "This is post 3" },
  { id: 4, title: "This is post 4" },
  { id: 5, title: "This is post 5" },
];

const getPosts = () => post;

export const getPostsLength = () => post.length;

export default getPosts;
