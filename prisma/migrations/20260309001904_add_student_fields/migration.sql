/*
  Warnings:

  - You are about to drop the column `rhFactor` on the `students` table. All the data in the column will be lost.
  - Added the required column `medicalCondition` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `students` DROP COLUMN `rhFactor`,
    ADD COLUMN `medicalCondition` VARCHAR(191) NOT NULL;
