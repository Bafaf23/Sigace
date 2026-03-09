/*
  Warnings:

  - Added the required column `repEmail` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `students` ADD COLUMN `repEmail` VARCHAR(191) NOT NULL;
