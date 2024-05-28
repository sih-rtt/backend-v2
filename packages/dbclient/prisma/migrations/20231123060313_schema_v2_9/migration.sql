/*
  Warnings:

  - A unique constraint covering the columns `[busStopRefId,routeRefId,index]` on the table `BusStopsInRoute` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `index` to the `BusStopsInRoute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `polyline` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BusStopsInRoute" ADD COLUMN     "index" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "polyline" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BusStopsInRoute_busStopRefId_routeRefId_index_key" ON "BusStopsInRoute"("busStopRefId", "routeRefId", "index");
