import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Here you can add sample data to your database
  

  console.log('Sample data added!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
