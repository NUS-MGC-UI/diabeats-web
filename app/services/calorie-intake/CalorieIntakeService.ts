const Gender = {
    PRIA : "pria",
    WANITA : "wanita",
} as const;
const Activity = {
    SEDENTER : "sedenter",
    RINGAN : "ringan",
    SEDANG : "sedang",
    BERAT : "berat",
    SANGAT_BERAT : "sangat berat"
} as const;

export abstract class CalorieIntakeService {

    public static calculate(args: {weight:number,height:number, gender:string,age:number,activity:string}){
        let totalCalorie = this.calculateBaseCalorie(args.height,args.gender);
        totalCalorie.map((calorie) => {
            calorie = this.calculateCalorieBasedOnAge(calorie,args.age);
            calorie = this.calculateCalorieBasedOnActivity(calorie,args.activity);
            calorie = this.calculateCalorieBasedOnWeight(calorie,args.height,args.weight);
            return calorie;
        });
        return {minCalorie:totalCalorie[0],maxCalorie:totalCalorie[1]};
    }

    protected static calculateBaseCalorie(heightCm:number, gender:string){
        const heightKg = heightCm - 100;
        const specialCase = (heightCm < 160 && gender == Gender.PRIA) || (heightCm < 150 && gender == Gender.WANITA);
        const kgBB = specialCase ? 0.9 * heightKg : heightKg;
        const minBaseCalorie = (gender == Gender.PRIA) ? 30 * kgBB : 25 * kgBB;
        const maxBaseCalorie = (gender == Gender.PRIA) ? 35 * kgBB : 30 * kgBB;
        return [minBaseCalorie, maxBaseCalorie];
    }

    protected static calculateCalorieBasedOnAge(calorie:number,age:number){
        let totalCalorie = calorie;
        if (age >= 40 && age <= 49) {
            totalCalorie = 0.95 * totalCalorie;
        } else if (age >= 50 && age <= 69){
            totalCalorie = 0.9 * totalCalorie;
        } else if (age >= 70) {
            totalCalorie = 0.8 * totalCalorie;
        }
        return totalCalorie;
    }

    protected static calculateCalorieBasedOnActivity(calorie:number,activity:string){
        let calorie_percentage:number = 0;
        let totalCalorie = calorie;
        switch (activity){
            case Activity.SEDENTER:{
                calorie_percentage = 0.1;
                break;
            }
            case Activity.RINGAN:{
                calorie_percentage = 0.2;
                break;
            }
            case Activity.SEDANG:{
                calorie_percentage = 0.3;
                break;
            }
            case Activity.BERAT:{
                calorie_percentage = 0.4;
                break;
            }
            case Activity.SANGAT_BERAT:{
                calorie_percentage = 0.5;
                break;
            }
        }
        totalCalorie += calorie_percentage * totalCalorie;
        return totalCalorie;
    }

    protected static calculateCalorieBasedOnWeight(calorie:number,heightCm:number, weight:number){
        const imt:number = weight / ((heightCm / 100)**2);
        let totalCalorie = calorie;
        if (imt >= 23){
            totalCalorie = 0.75 * totalCalorie;
        }
        else if (imt < 18.5){
            totalCalorie = 1.25 * totalCalorie;
        }
        return totalCalorie;
    }

}