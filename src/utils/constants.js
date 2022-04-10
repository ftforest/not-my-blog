import postImage from '../assets/images/postImage.jpg';

export const POSTS = [
  {
    id: 1,
    title: 'Post 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae temporibus ad omnis? Quod delen',
    liked: false,
    image: postImage,
  },
  {
    id: 2,
    title: 'Post 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae temporibus ad omnis? Quod delen',
    liked: false,
    image: postImage,
  },
  {
    id: 3,
    title: 'Post 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae temporibus ad omnis? Quod delen',
    liked: false,
  },
];

export const POSTS_URL = 'https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/';

export const APP_ROUTES = [
  '/',
  '/blog',
  '/favourite',
  '/login',
];
