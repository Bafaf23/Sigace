/*
  Warnings:

  - You are about to drop the column `fatherLastName` on the `parents` table. All the data in the column will be lost.
  - You are about to drop the column `motherLastName` on the `parents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `parents` DROP COLUMN `fatherLastName`,
    DROP COLUMN `motherLastName`;
