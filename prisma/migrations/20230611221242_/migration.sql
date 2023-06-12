/*
  Warnings:

  - You are about to drop the column `album` on the `songs` table. All the data in the column will be lost.
  - You are about to drop the column `artist` on the `songs` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `songs` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `songs` table. All the data in the column will be lost.
  - Added the required column `link` to the `performances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spotify` to the `songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtube` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_performances" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "local" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "link" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_performances" ("created_at", "date", "id", "local", "updated_at") SELECT "created_at", "date", "id", "local", "updated_at" FROM "performances";
DROP TABLE "performances";
ALTER TABLE "new_performances" RENAME TO "performances";
CREATE TABLE "new_songs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "youtube" TEXT NOT NULL,
    "spotify" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_songs" ("created_at", "id", "updated_at", "year") SELECT "created_at", "id", "updated_at", "year" FROM "songs";
DROP TABLE "songs";
ALTER TABLE "new_songs" RENAME TO "songs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
