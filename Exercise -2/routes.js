const { PrismaClient } = require("@prisma/client");
const express = require("express");

const router = express.Router();
const prisma = new PrismaClient();

router.post("/create", async (req, res) => {
    try {
        const { water_connection_id, property_id, description } = req.body;

        // Check if any of the required fields are undefined
        if (!water_connection_id || !property_id || !description) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newWaterConnection = await prisma.water_Connection.create({
            data: {
                water_connection_id,
                property_id,
                description,           
            },
        });

        res.status(201).json(newWaterConnection);
    } catch (error) {
        console.error("Error creating water connection:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/read", async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: "Missing id parameter" });
    }

    try {
        const water = await prisma.water_Connection.findUnique({
            where: {
                water_connection_id: Number(id),  // Ensure id is a number
            },
        });

        if (!water) {
            return res.status(404).json({ error: "Water connection not found" });
        }

        res.status(200).json(water);
    } catch (error) {
        console.error("Error fetching water connection:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.put("/update", async (req, res) => {
    const { id, water_connection_id, property_id, description } = req.body;

    console.log("Received data:", req.body); // Log the request data

    if (!id || !water_connection_id || !property_id || !description) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const updatedWaterConnection = await prisma.water_Connection.update({
            where: {
                id: id,  // Using water_connection_id as the unique identifier
            },
            data: {
                water_connection_id,
                property_id,
                description,
            },
        });

        res.status(200).json(updatedWaterConnection);
    } catch (error) {
        console.error("Error updating water connection:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
