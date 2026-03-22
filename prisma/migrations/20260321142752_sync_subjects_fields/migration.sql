/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Subjects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,grade]` on the table `Subjects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `Subjects` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Subjects_name_key` ON `subjects`;

-- AlterTable
ALTER TABLE `subjects` ADD COLUMN `area` VARCHAR(191) NULL,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `grade` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Subjects_code_key` ON `Subjects`(`code`);

-- CreateIndex
CREATE UNIQUE INDEX `Subjects_name_grade_key` ON `Subjects`(`name`, `grade`);
