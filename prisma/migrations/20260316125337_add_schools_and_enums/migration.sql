/*
  Warnings:

  - You are about to alter the column `typeSchool` on the `schools` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - A unique constraint covering the columns `[rifSchool]` on the table `Schools` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailSchool]` on the table `Schools` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `schools` MODIFY `typeSchool` ENUM('PUBLIC', 'PRIVATE', 'SUBSIDIZED') NOT NULL DEFAULT 'PUBLIC';

-- CreateIndex
CREATE UNIQUE INDEX `Schools_rifSchool_key` ON `Schools`(`rifSchool`);

-- CreateIndex
CREATE UNIQUE INDEX `Schools_emailSchool_key` ON `Schools`(`emailSchool`);
