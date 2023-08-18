
    import { NextApiRequest, NextApiResponse } from 'next'
    import { prisma } from '../../../lib/prisma'

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const { method } = req;
      const userId = req.query.id as string;

      if (method === 'GET') {
        const plan = await prisma.plan.findUnique({
          where: { userId }
        });
        return res.status(200).json(plan);
      } else if (method === 'PUT') {
        try {
          const data = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
          const plan = await prisma.plan.update({
            where: { userId },
            data
          });
          return res.status(201).json(plan);
        } catch (error:any) {
          return res.status(500).json({ message: error.message });
        }

      } else if (method === 'DELETE') {        
        try {
          const plan = await prisma.plan.delete({
            where: { userId }
          });
          return res.status(200).json(plan);
        } catch (error:any) {
          return res.status(500).json({ message: error.message });
        }

      }

      res.setHeader("Allow", ["GET", "PUT, DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
    