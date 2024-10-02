
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function register(req,res) {
  try {
    const name=req.body('name')
    const user = await prisma.user.create({
      data: {
        email: 'elsa@prisma.io',
        name: name,
        amount:15000
      },
    });
    console.log(`User created: ${user.email}`); // Optional: Log success message
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
  res.send("hello")
}

login();