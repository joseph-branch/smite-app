-- CreateTable
CREATE TABLE `Item` (
    `itemId` INTEGER NOT NULL,
    `itemTier` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Build` (
    `buildId` INTEGER NOT NULL AUTO_INCREMENT,
    `characterId` INTEGER NOT NULL,
    `relic1` INTEGER NULL,
    `relic2` INTEGER NULL,
    `item1Id` INTEGER NULL,
    `item2Id` INTEGER NULL,
    `item3Id` INTEGER NULL,
    `item4Id` INTEGER NULL,
    `item5Id` INTEGER NULL,
    `item6Id` INTEGER NULL,

    PRIMARY KEY (`buildId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Match` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queueId` INTEGER NOT NULL,
    `matchId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Build` ADD CONSTRAINT `Build_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`characterId`) ON DELETE RESTRICT ON UPDATE CASCADE;
