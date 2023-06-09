import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
	let { body } = req;

	await prisma.user
		.create({ data: body })
		.then(() => {
			res
				.status(200)
				.json({ msg: "Your data was successfully saved to Database" });
		})
		.catch((err) => {
			res.status(500).json({ msg: err.message });
		});
});

export default router;
