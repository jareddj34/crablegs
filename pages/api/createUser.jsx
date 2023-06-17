import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const result = await prisma.user.create({
                data: {
                    username: username,
                    password: password, // In a real app, please ensure to hash the password before storing it in the database
                },
            });

            res.status(200).json(result);
        } catch (e) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        // Handle any other HTTP method
        res.status(405).json({ message: "Only POST requests are accepted" });
    }
}
