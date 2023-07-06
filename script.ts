import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany({
  // await prisma.user.deleteMany()
  // const users = await prisma.user.deleteMany({
  //   where: {
  //     age: { gt: 40 },
  //   },
  // });
  // where: { age: 41 },
  // });
  // await prisma.user.deleteMany();
  // const user = await prisma.user.findFirst({
  // where: { name: "hadi" },
  // const users = await prisma.user.findMany({
  // const users = await prisma.user.findMany()
  // where: { name: "hadi" },
  // where: { name: { equals: "hadi" } },
  // where: { name: { not: "hadi" } },
  // where: { name: { in: ["hadi","helena"] } },
  // where: { name: { notIn: ["hadi","helena"] } },
  // where: { name: { notIn: ["hadi", "helena"] }, age: { lt: 20 } },
  // where: { email:{contains:"hadi"}},
  // where: { email:{endsWith:"com"}},
  // where: { email:{startsWith:"hadi"}},
  // where: {
  //   AND: [{ email: { startsWith: "hadi" } }, { email: { endsWith: "hadi" } }],
  // },
  // where: {
  //   OR: [{ email: { startsWith: "hadi" } }, { email: { endsWith: "com" } }],
  // },
  // where: {
  //   NOT: [{ email: { endsWith: "hadi" } }],
  // },
  // where: {
  //   userPreferece: { emailUpdates: true},
  // },
  // where: {
  //   writtenPosts: {
  //     // every: {
  //     //   title: "test",
  //     // },
  //     // none: {
  //     //   title: "test",
  //     // },
  //     // some: {
  //     //   // title: "test",
  //     //   title: { startsWith: "test" },
  //     // },
  //     some: {
  //       author: {
  //         // is: {
  //         isNot: {
  //           age: 42,
  //         },
  //       },
  //     },
  //   },
  // },

  // distinct: ["name", "age"],
  // distinct: ["name"],
  // take:1,
  // skip:1,
  // orderBy: { age: "asc" },
  // orderBy: { age: "desc" },
  // const user = await prisma.user.findUnique({
  // where: { email: "hadi@gmail.com" },
  // where:{age_name:{age:42, name:"hadi"}}
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "hadi",
  //       email: "hadi1@gmail.com",
  //       age: 43,
  //     },
  //     {
  //       name: "helena",
  //       email: "helena1@gmail.com",
  //       age: 39,
  //     },
  //     {
  //       name: "hadi",
  //       email: "hadi1@gmail.com",
  //       age: 43,
  //     },
  //     {
  //       name: "helena",
  //       email: "helena1@gmail.com",
  //       age: 39,
  //     },
  // ],
  // include: { userPreferece: true },
  // select: {
  //   name: true,
  //   userPreferece: { select: { id: true } },
  // },

  // const users = await prisma.user.update({
  //   where: {
  //     email: "hadi@gmail.com",
  //   },
  //   data: {
  //     email: "hadiupdated@gmeil.com",
  //   },
  // });
  // const users = await prisma.user.update({
  //   where: {
  //     email: "hadi@gmeil.com",
  //   },
  //   data: {
  //     age: {
  //       // increment: 1,
  //      // decrement: 10,
  //  multiplu:10,
  //  devide:10,
  //     },
  //     userPreferece:{create:{emailUpdates:true}}
  //   },
  // });
  // const users=await prisma.userPreference.create({data:{
  //   emailUpdates:true
  // }})
  // const users = await prisma.user.updateMany({ // not allowed to put include or select
  //   where: {
  //     email: "hadiupdated@gmeil.com",
  //   },
  //   data: {
  //     email: "hadi@gmeil.com",
  //   },

  // });
  // const users = await prisma.user.update({
  //   where: {
  //     email: "hadi@gmeil.com",
  //   },
  //   data: {
  //     name: "Shadi",
  //     userPreferece: {
  //       connect: {
  //         id: "2a1958d5-d773-4f23-b0a2-9fa51b59e3b4",
  //       },
  //     },
  //   },
  // const users = await prisma.user.update({
  //   where: {
  //     email: "hadi@gmeil.com",
  //   },
  //   data: {
  //     name: "Shadi",
  //     userPreferece: {
  //       disconnect: true,
  //     },
  //   },
  // });
  // const users = await prisma.user.create({
  //   data: {
  //     userPreferece: {
  //       // connect: true,
  //       disconnect: true,
  //     },
  //   },
  // });
  // const users = await prisma.user.update({
  //   where: {
  //     email: "hadi@gmeil.com",
  //   },
  //   data: {
  //     name: "Shadi",
  //     userPreferece: {
  //       disconnect: true,
  //     },
  //   },
  // });

  // const users = await prisma.user.findFirst({
  //   where: {
  //     name: "Shadi",
  //   },
  //   include: {
  //     userPreferece: true,
  //   },
  // });

 ///////////////////////////////////////////////// console.log(users);
  // console.log(users.length);
  //   const user = await prisma.user.deleteMany();
  //   console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
