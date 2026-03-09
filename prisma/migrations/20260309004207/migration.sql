/*
  Warnings:

  - Added the required column `repDni` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `students` ADD COLUMN `repDni` VARCHAR(191) NOT NULL;
