import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcrypt';
import { readFileSync } from 'fs';
const config = JSON.parse(readFileSync('../config/settings.development.json', 'utf-8'));

console.log('Config loaded:', { defaultAccounts: config.defaultAccounts?.length, defaultData: config.defaultData?.length, defaultContacts: config.defaultContacts?.length });

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  await prisma.contact.deleteMany();
  const password = await hash('changeme', 10);
  for (const account of config.defaultAccounts) {
    const role = account.role as Role || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
    // console.log(`  Created user: ${user.email} with role: ${user.role}`);
  }

  for (const data of config.defaultContacts) {
    console.log(`  Adding contact: ${JSON.stringify(data)}`);
    await prisma.contact.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        image: data.image,
        description: data.description,
        owner: data.owner,
      },
    });
  }
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });