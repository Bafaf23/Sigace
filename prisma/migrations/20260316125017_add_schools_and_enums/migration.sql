/*
  Warnings:

  - Added the required column `typeSchool` to the `Schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schools` ADD COLUMN `rifSchool` VARCHAR(191) NULL,
    ADD COLUMN `typeSchool` VARCHAR(191) NOT NULL;
