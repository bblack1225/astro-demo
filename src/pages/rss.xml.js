import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');
  return rss({
    title: 'Demo Blog By Astro',
    description: 'My journey learning Astro',
    site: 'https://playful-sunflower-dcdb58.netlify.app/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
