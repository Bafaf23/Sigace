/*
  Warnings:

  - Added the required column `emailSchool` to the `Schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schools` ADD COLUMN `emailSchool` VARCHAR(191) NOT NULL;
