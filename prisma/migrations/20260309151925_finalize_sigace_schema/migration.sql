-- AlterTable
ALTER TABLE `students` ADD COLUMN `schoolId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Schools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codeShool` VARCHAR(191) NOT NULL,
    `nameSchool` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Schools_codeShool_key`(`codeShool`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `Schools`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
