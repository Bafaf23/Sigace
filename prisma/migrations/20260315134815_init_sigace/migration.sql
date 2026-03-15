/*
  Warnings:

  - Added the required column `schoolId` to the `Teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teachers` ADD COLUMN `schoolId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `Schools`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
