import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";
import "dotenv/config"

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });


export const main = async() => {
    try {
        console.log("Seeding Database")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg"
            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg"
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/fr.svg"
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/hr.svg"
            },
            {
                id: 5,
                title: "Japanese",
                imageSrc: "/jp.svg"
            }
        ])

        console.log("Seeding finished")
    } catch (error) {
        console.error(error)
    }
}

main()