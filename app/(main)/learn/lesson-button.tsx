import React from "react"

interface IProps {
  id: number
  index: number
  totalCount: number
  locked?: boolean
  current?: boolean
  percentage: number
}

export const LessonButton: React.FC<IProps> = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
}) => {
  return <div className="">{id}</div>
}
