-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "userId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Plan" (
    "userId" TEXT NOT NULL,
    "maxCalorie" INTEGER NOT NULL,
    "minCalorie" INTEGER NOT NULL,
    "MaxCarbohidrate" INTEGER NOT NULL,
    "MinCarbohidrate" INTEGER NOT NULL,
    "MaxProtein" INTEGER NOT NULL,
    "MinProtein" INTEGER NOT NULL,
    "MaxFat" INTEGER NOT NULL,
    "MinFat" INTEGER NOT NULL,
    "MaxFiber" INTEGER NOT NULL,
    "MinFiber" INTEGER NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "MealType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MealType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isInsufficient" BOOLEAN NOT NULL,
    "isSufficient" BOOLEAN NOT NULL,
    "isExceeded" BOOLEAN NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "totalCalorie" INTEGER NOT NULL,
    "carbohidrate" INTEGER,
    "protein" INTEGER,
    "fat" INTEGER,
    "fiber" INTEGER,
    "mealId" INTEGER,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "MealType_name_key" ON "MealType"("name");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_type_fkey" FOREIGN KEY ("type") REFERENCES "MealType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
