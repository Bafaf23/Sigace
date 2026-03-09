/*
  Warnings:

  - Added the required column `addressSchool` to the `Schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schools` ADD COLUMN `addressSchool` VARCHAR(191) NOT NULL;
