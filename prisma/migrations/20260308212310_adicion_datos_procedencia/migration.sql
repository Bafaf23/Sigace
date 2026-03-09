/*
  Warnings:

  - You are about to alter the column `role` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `addressDetail` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allergies` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthCountry` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthState` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherDni` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherEmail` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherLastName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherPhone` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `housingCondition` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherDni` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherEmail` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherLastName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherPhone` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipality` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pantSize` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parish` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationship` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repLastName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repPhone` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `representativeName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rhFactor` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shirtSize` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoeSize` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `students` ADD COLUMN `addressDetail` VARCHAR(191) NOT NULL,
    ADD COLUMN `allergies` VARCHAR(191) NOT NULL,
    ADD COLUMN `birthCountry` VARCHAR(191) NOT NULL,
    ADD COLUMN `birthState` VARCHAR(191) NOT NULL,
    ADD COLUMN `bloodType` VARCHAR(191) NOT NULL,
    ADD COLUMN `canaimaSerial` VARCHAR(191) NULL,
    ADD COLUMN `fatherDni` VARCHAR(191) NOT NULL,
    ADD COLUMN `fatherEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `fatherLastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `fatherName` VARCHAR(191) NOT NULL,
    ADD COLUMN `fatherPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `height` VARCHAR(191) NOT NULL,
    ADD COLUMN `housingCondition` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherDni` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherLastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherName` VARCHAR(191) NOT NULL,
    ADD COLUMN `motherPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `municipality` VARCHAR(191) NOT NULL,
    ADD COLUMN `pantSize` VARCHAR(191) NOT NULL,
    ADD COLUMN `parish` VARCHAR(191) NOT NULL,
    ADD COLUMN `previousSchool` VARCHAR(191) NULL,
    ADD COLUMN `previousSchoolCode` VARCHAR(191) NULL,
    ADD COLUMN `previousSection` VARCHAR(191) NULL,
    ADD COLUMN `previousYear` VARCHAR(191) NULL,
    ADD COLUMN `relationship` VARCHAR(191) NOT NULL,
    ADD COLUMN `repLastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `repPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `representativeName` VARCHAR(191) NOT NULL,
    ADD COLUMN `rhFactor` VARCHAR(191) NOT NULL,
    ADD COLUMN `shirtSize` VARCHAR(191) NOT NULL,
    ADD COLUMN `shoeSize` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `weight` VARCHAR(191) NOT NULL,
    MODIFY `year` VARCHAR(191) NULL,
    MODIFY `section` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ADMIN', 'TEACHER', 'STUDENT') NOT NULL;
