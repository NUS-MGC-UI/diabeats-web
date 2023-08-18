import type { NextApiRequest, NextApiResponse } from 'next'
import { CalorieIntakeService } from '@/src/services/calorie-intake/CalorieIntakeService'
import { z } from "zod";

const inputSchema = z.object({
    weight:z.number(),
    height:z.number(), 
    gender:z.string(),
    age:z.number(),
    activity:z.string()
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST'){
    const parsedInput = inputSchema.safeParse(req.body);
    if (parsedInput.success){
        let calorieResult = CalorieIntakeService.calculate(parsedInput.data);
        let result = {
            message: "success", 
            min_calorie_intake: calorieResult.minCalorie, 
            max_calorie_intake: calorieResult.maxCalorie
        };
        return res.status(200).json(result);
    }
    else{
        const { errors } = parsedInput.error;
        console.log(errors);
        return res.status(400).json({
          error: { message: "Invalid request", errors },
        });
    }
  }
  else {
    return res.status(405).json({
        error: { message: "Only POST method allowed"}
    });
  }
}