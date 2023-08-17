
    import { NextApiRequest, NextApiResponse } from 'next'
    import { prisma } from '../../../lib/prisma'

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const { method } = req;

      if (method === 'GET') {
        const mealtypes = await prisma.mealType.findMany();
        return res.status(200).json(mealtypes);
      } else if (method === 'POST') {
        const data = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
        const mealtype = await prisma.mealType.create({
          data
        });
        return res.status(201).json(mealtype);
      }

      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
    