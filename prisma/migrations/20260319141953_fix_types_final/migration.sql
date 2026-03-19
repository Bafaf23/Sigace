/*
  Warnings:

  - You are about to drop the column `section` on the `students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `qualifications` ADD COLUMN `academicLoadId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `students` DROP COLUMN `section`,
    ADD COLUMN `sectionId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grade` VARCHAR(191) NOT NULL,
    `identifier` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NOT NULL DEFAULT 35,
    `shift` VARCHAR(191) NULL DEFAULT 'Mañana',
    `teacherId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Section_teacherId_key`(`teacherId`),
    UNIQUE INDEX `Section_grade_identifier_key`(`grade`, `identifier`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AcademicLoad` (
    `id` VARCHAR(191) NOT NULL,
    `period` VARCHAR(191) NOT NULL,
    `teacherId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `sectionId` INTEGER NOT NULL,

    UNIQUE INDEX `AcademicLoad_subjectId_sectionId_period_key`(`subjectId`, `sectionId`, `period`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Qualifications` ADD CONSTRAINT `Qualifications_academicLoadId_fkey` FOREIGN KEY (`academicLoadId`) REFERENCES `AcademicLoad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcademicLoad` ADD CONSTRAINT `AcademicLoad_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcademicLoad` ADD CONSTRAINT `AcademicLoad_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcademicLoad` ADD CONSTRAINT `AcademicLoad_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
