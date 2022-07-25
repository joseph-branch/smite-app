/*
  Warnings:

  - Added the required column `characterId` to the `Ability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ability` ADD COLUMN `characterId` INTEGER NOT NULL,
    MODIFY `description` LONGTEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `Ability` ADD CONSTRAINT `Ability_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`characterId`) ON DELETE RESTRICT ON UPDATE CASCADE;
