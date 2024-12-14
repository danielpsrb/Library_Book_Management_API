-- CreateTable
CREATE TABLE `Books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(20) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `publish_year` INTEGER NOT NULL,
    `publisher` VARCHAR(25) NOT NULL,
    `book_pages` INTEGER NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `cover_book_photo` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Books_isbn_key`(`isbn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewBook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reviewerName` VARCHAR(255) NOT NULL,
    `reviewText` VARCHAR(191) NOT NULL,
    `starRating` DOUBLE NOT NULL,
    `bookId` INTEGER NOT NULL,
    `date` DATETIME NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReviewBook` ADD CONSTRAINT `ReviewBook_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
