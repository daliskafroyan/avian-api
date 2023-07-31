-- CreateTable
CREATE TABLE `Vendor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `capacity` VARCHAR(191) NOT NULL,
    `leadTime` VARCHAR(191) NOT NULL,
    `accidentScore` VARCHAR(191) NOT NULL,
    `kpiScore` VARCHAR(191) NOT NULL,
    `percentage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
