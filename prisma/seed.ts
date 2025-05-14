import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 12);

  const dummyImages = [
    'https://picsum.photos/seed/post1/600/400',
    'https://picsum.photos/seed/post1/600/400',
  ];

  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      password: hashedPassword,
      posts: {
        create: [
          {
            title: '初めてのブログ投稿',
            content: 'これは最初のブログ投稿',
            topImage: dummyImages[0],
          },
          {
            title: '2番目のブログ投稿',
            content: '2番目のブログ投稿',
            topImage: dummyImages[1],
          },
        ],
      },
    },
  });
  console.log({ user });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
