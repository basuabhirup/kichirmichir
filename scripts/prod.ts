import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)
// @ts-ignore
const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database")

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
    ])

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([
        { id: 1, title: "Spanish", imageSrc: "/es.svg" },
        { id: 2, title: "Italian", imageSrc: "/it.svg" },
        { id: 3, title: "French", imageSrc: "/fr.svg" },
        { id: 4, title: "Croatian", imageSrc: "/hr.svg" },
        { id: 5, title: "Japanese", imageSrc: "/jp.svg" },
      ])
      .returning()

    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: `Learn the basics of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: `Learn intermediate ${course.title}`,
            order: 2,
          },
        ])
        .returning()

      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Nouns", order: 1 },
            { unitId: unit.id, title: "Verbs", order: 2 },
            { unitId: unit.id, title: "Adjectives", order: 3 },
            { unitId: unit.id, title: "Phrases", order: 4 },
            { unitId: unit.id, title: "Sentences", order: 5 },
          ])
          .returning()

        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: `Which one of these is "the man"?`,
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: `Which one of these is "the woman"?`,
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: `Which one of these is "the boy"?`,
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: `"the man"`,
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: `Which one of these is "the zombie"?`,
                order: 5,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: `Which one of these is "the robot"?`,
                order: 6,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: `Which one of these is "the girl"?`,
                order: 7,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: `"the zombie"`,
                order: 8,
              },
            ])
            .returning()

          for (const challenge of challenges) {
            const languageCode = course.imageSrc.split('.')[0].slice(1)
            const translations = getTranslations(languageCode)

            if (challenge.order === 1) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.man,
                  imageSrc: "/man.svg",
                  audioSrc: `/${languageCode}_man.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.woman,
                  imageSrc: "/woman.svg",
                  audioSrc: `/${languageCode}_woman.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.boy,
                  imageSrc: "/boy.svg",
                  audioSrc: `/${languageCode}_boy.mp3`,
                },
              ])
            }

            if (challenge.order === 2) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.woman,
                  imageSrc: "/woman.svg",
                  audioSrc: `/${languageCode}_woman.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.boy,
                  imageSrc: "/boy.svg",
                  audioSrc: `/${languageCode}_boy.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.man,
                  imageSrc: "/man.svg",
                  audioSrc: `/${languageCode}_man.mp3`,
                },
              ])
            }

            if (challenge.order === 3) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.woman,
                  imageSrc: "/woman.svg",
                  audioSrc: `/${languageCode}_woman.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.man,
                  imageSrc: "/man.svg",
                  audioSrc: `/${languageCode}_man.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.boy,
                  imageSrc: "/boy.svg",
                  audioSrc: `/${languageCode}_boy.mp3`,
                },
              ])
            }

            if (challenge.order === 4) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.woman,
                  audioSrc: `/${languageCode}_woman.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.man,
                  audioSrc: `/${languageCode}_man.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.boy,
                  audioSrc: `/${languageCode}_boy.mp3`,
                },
              ])
            }

            if (challenge.order === 5) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.man,
                  imageSrc: "/man.svg",
                  audioSrc: `/${languageCode}_man.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.woman,
                  imageSrc: "/woman.svg",
                  audioSrc: `/${languageCode}_woman.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.zombie,
                  imageSrc: "/zombie.svg",
                  audioSrc: `/${languageCode}_zombie.mp3`,
                },
              ])
            }

            if (challenge.order === 6) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.robot,
                  imageSrc: "/robot.svg",
                  audioSrc: `/${languageCode}_robot.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.zombie,
                  imageSrc: "/zombie.svg",
                  audioSrc: `/${languageCode}_zombie.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.boy,
                  imageSrc: "/boy.svg",
                  audioSrc: `/${languageCode}_boy.mp3`,
                },
              ])
            }

            if (challenge.order === 7) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.girl,
                  imageSrc: "/girl.svg",
                  audioSrc: `/${languageCode}_girl.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.zombie,
                  imageSrc: "/zombie.svg",
                  audioSrc: `/${languageCode}_zombie.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.man,
                  imageSrc: "/man.svg",
                  audioSrc: `/${languageCode}_man.mp3`,
                },
              ])
            }

            if (challenge.order === 8) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.woman,
                  audioSrc: `/${languageCode}_woman.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: translations.zombie,
                  audioSrc: `/${languageCode}_zombie.mp3`,
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: translations.boy,
                  audioSrc: `/${languageCode}_boy.mp3`,
                },
              ])
            }
          }
        }
      }
    }
    console.log("Database seeded successfully")
  } catch (error) {
    console.error(error)
    throw new Error("Failed to seed database")
  }
}

const getTranslations = (languageCode: string) => {
  const translations = {
    es: {
      man: "el hombre",
      woman: "la mujer",
      boy: "el chico",
      girl: "la niña",
      zombie: "el zombie",
      robot: "el robot",
    },
    it: {
      man: "l'uomo",
      woman: "la donna",
      boy: "il ragazzo",
      girl: "la ragazza",
      zombie: "lo zombie",
      robot: "il robot",
    },
    fr: {
      man: "l'homme",
      woman: "la femme",
      boy: "le garçon",
      girl: "la fille",
      zombie: "le zombie",
      robot: "le robot",
    },
    hr: {
      man: "muškarac",
      woman: "žena",
      boy: "dječak",
      girl: "djevojčica",
      zombie: "zombi",
      robot: "robot",
    },
    jp: {
      man: "男の人",
      woman: "女の人",
      boy: "男の子",
      girl: "女の子",
      zombie: "ゾンビ",
      robot: "ロボット",
    },
  }
  return translations[languageCode as keyof typeof translations]
}

main()