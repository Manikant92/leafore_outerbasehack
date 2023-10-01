// import { nanoid } from 'nanoid'

// import { v4 as uuid } from 'uuid'
// import { consola } from 'consola'
import { PrismaClient } from '@prisma/client'

// import { prisma } from './index'

const prisma = new PrismaClient()

const data = [
  {
    id: 'V1StGXR8_Z5jdHi6B-myT',
    name: 'Clean the garden premises',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727500398613/image_28.png',
    points: 5,
  },
  {
    id: 'V1StGXR7_Z5jdHi6B-myT',
    name: 'Help setup drip irrigation on the terrace',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727252942919/image_22.png',
    points: 7,
  },

  {
    id: 'V1StGXR1_Z5jdHi6B-myT',
    name: 'Help out in distributing food to the needy',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727752077482/image_29.png',
    points: 4,
  },

  {
    id: 'V1StGXR2_Z5jdHi6B-myT',
    name: 'Gather at least 1kg paper to recycle',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727995334716/image_30.png',
    points: 5,
  },

  {
    id: 'V1StGXR3_Z5jdHi6B-myT',
    name: 'Reuse of e-commerce boxes for storage',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758728217624586/image_31.png',
    points: 3,
  },

  {
    id: 'V1StGXR4_Z5jdHi6B-myT',
    name: 'Collect all the plastic for waste from the campus',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758728439943199/image_32.png',
    points: 3,
  },
]

const rewardsData = [
  {
    id: 'V1StGXR5_Z5jdHi6B-myT',
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: 'V1StGXR6_Z5jdHi6B-myT',
    name: 'Eco Notebook',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788430936379472/Frame_54.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: 'V1StGXR9_Z5jdHi6B-myT',
    name: 'Eco Sticky Notes',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431246770236/Frame_55.png',
    pointsRequired: 10,
    semiDescription: 'Notes made with recycled cardboard and paper',
    description: 'Notes made with recycled paper waste and cardboard.',
  },

  {
    id: 'V1StGXR8_Z5jdHi1B-myT',
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: 'V1StGXR8_Z5jdHi2B-myT',
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: 'V1StGXR8_Z5jdHi3B-myT',
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },
]

const forumPosts = [
  {
    id: 'V1StGXR8_Z5jdHi4B-myT',
    title: 'How to reduce plastic waste?',
    content: '',
    userId: 'test',
  },

  {
    id: 'V1StGXR8_Z5jdHi5B-myT',
    title: 'Design Leadership: How To Build a Design that is Sustainable?',
    content: '',
    userId: 'test',
  },

  {
    id: 'V1StGXR8_Z5jdHi8B-myT',
    title: 'How do we make sustainable technologies more accessible to engineers, makers and the wider public?',
    content: '',
    userId: 'test',
  },
]

// export function seed() {
//   return prisma.forum.createMany({
//     data: forumPosts,
//   })
// }

async function seed() {
  return prisma.forum.createMany({
    data: forumPosts,
  })
}

await seed()

// try {
//   await seed()
//   await prisma.$disconnect()
// }
// catch (e) {
//   console.error(e)
//   await prisma.$disconnect()
//   process.exit(1)
// }
