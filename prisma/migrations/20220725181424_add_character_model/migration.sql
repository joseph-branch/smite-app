-- CreateTable
CREATE TABLE `Character` (
    `characterId` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(250) NOT NULL,
    `pantheon` VARCHAR(50) NOT NULL,
    `lore` LONGTEXT NOT NULL,
    `role` VARCHAR(25) NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `archetype` VARCHAR(25) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `cardUrl` VARCHAR(100) NOT NULL,
    `iconUrl` VARCHAR(100) NOT NULL,
    `attackSpeed` DECIMAL(65, 30) NOT NULL,
    `attackSpeedPerLevel` DECIMAL(65, 30) NOT NULL,
    `hP5PerLevel` DECIMAL(65, 30) NOT NULL,
    `health` DECIMAL(65, 30) NOT NULL,
    `healthPerFive` DECIMAL(65, 30) NOT NULL,
    `healthPerLevel` DECIMAL(65, 30) NOT NULL,
    `mP5PerLevel` DECIMAL(65, 30) NOT NULL,
    `magicProtection` DECIMAL(65, 30) NOT NULL,
    `magicProtectionPerLevel` DECIMAL(65, 30) NOT NULL,
    `magicalPower` DECIMAL(65, 30) NOT NULL,
    `magicalPowerPerLevel` DECIMAL(65, 30) NOT NULL,
    `mana` DECIMAL(65, 30) NOT NULL,
    `manaPerFive` DECIMAL(65, 30) NOT NULL,
    `manaPerLevel` DECIMAL(65, 30) NOT NULL,
    `physicalPower` DECIMAL(65, 30) NOT NULL,
    `physicalPowerPerLevel` DECIMAL(65, 30) NOT NULL,
    `physicalProtection` DECIMAL(65, 30) NOT NULL,
    `physicalProtectionPerLevel` DECIMAL(65, 30) NOT NULL,
    `speed` DECIMAL(65, 30) NOT NULL,
    `onFreeRotation` BOOLEAN NOT NULL,
    `autoBanned` BOOLEAN NOT NULL,
    `latestGod` BOOLEAN NOT NULL,

    PRIMARY KEY (`characterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ability` (
    `abilityId` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(250) NOT NULL,
    `url` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`abilityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
