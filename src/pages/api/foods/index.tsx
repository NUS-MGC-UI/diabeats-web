
    import { NextApiRequest, NextApiResponse } from 'next'
    import { prisma } from '../../../lib/prisma'

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const { method } = req;

      if (method === 'GET') {
        let foods;
        if (req.query.name){
          foods = await prisma.food.findMany({
            where:{name:{contains:req.query.name as string}}
          });
        } else{
          foods = await prisma.food.findMany();
        }
        return res.status(200).json(foods);
      } else if (method === 'POST') {
        const data = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
        const food = await prisma.food.create({
          data
        });
        return res.status(201).json(food);
      }

      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
    