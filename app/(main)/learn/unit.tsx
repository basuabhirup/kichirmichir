import { lessons, units } from "@/db/schema"
import { UnitBanner } from "./unit-banner"
import { LessonButton } from "./lesson-button"

interface IProps {
  id: number
  order: number
  title: string
  description: string
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean
  })[]
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
      })
    | undefined
  activeLessonPercantage: number
}

export const Unit: React.FC<IProps> = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercantage,
}) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id
          const isLocked = !lesson.completed && !isCurrent
          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercantage}
            />
          )
        })}
      </div>
    </>
  )
}
