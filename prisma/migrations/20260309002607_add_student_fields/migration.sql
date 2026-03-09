/*
  Warnings:

  - You are about to drop the column `fatherDni` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `fatherEmail` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `fatherLastName` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `fatherName` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `fatherPhone` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `motherDni` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `motherEmail` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `motherLastName` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `motherName` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `motherPhone` on the `students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `students` DROP COLUMN `fatherDni`,
    DROP COLUMN `fatherEmail`,
    DROP COLUMN `fatherLastName`,
    DROP COLUMN `fatherName`,
    DROP COLUMN `fatherPhone`,
    DROP COLUMN `motherDni`,
    DROP COLUMN `motherEmail`,
    DROP COLUMN `motherLastName`,
    DROP COLUMN `motherName`,
    DROP COLUMN `motherPhone`;

-- CreateTable
CREATE TABLE `Parents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motherName` VARCHAR(191) NOT NULL,
    `motherLastName` VARCHAR(191) NOT NULL,
    `motherDni` VARCHAR(191) NOT NULL,
    `motherEmail` VARCHAR(191) NOT NULL,
    `motherPhone` VARCHAR(191) NOT NULL,
    `fatherName` VARCHAR(191) NOT NULL,
    `fatherLastName` VARCHAR(191) NOT NULL,
    `fatherDni` VARCHAR(191) NOT NULL,
    `fatherEmail` VARCHAR(191) NOT NULL,
    `fatherPhone` VARCHAR(191) NOT NULL,
    `studentId` INTEGER NOT NULL,

    UNIQUE INDEX `Parents_studentId_key`(`studentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Parents` ADD CONSTRAINT `Parents_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
