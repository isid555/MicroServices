-- CreateTable
CREATE TABLE "Water_Connection" (
    "id" SERIAL NOT NULL,
    "water_connection_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "Water_Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Water_Connection_water_connection_id_key" ON "Water_Connection"("water_connection_id");

-- CreateIndex
CREATE UNIQUE INDEX "Water_Connection_property_id_key" ON "Water_Connection"("property_id");
