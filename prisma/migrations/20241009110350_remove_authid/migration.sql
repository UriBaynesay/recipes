/*
  Warnings:

  - You are about to drop the column `auth_id` on the `Profile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Profile_auth_id_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "auth_id";
