-- CreateTable
CREATE TABLE "performances" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "local" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "songs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "performances_songs" (
    "performance_id" TEXT NOT NULL,
    "song_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,

    PRIMARY KEY ("performance_id", "song_id"),
    CONSTRAINT "performances_songs_performance_id_fkey" FOREIGN KEY ("performance_id") REFERENCES "performances" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "performances_songs_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
