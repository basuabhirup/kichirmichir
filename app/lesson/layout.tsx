import { PropsWithChildren } from "react"

const LessonLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-full w-full">{children}</div>
    </div>
  )
}

export default LessonLayout
