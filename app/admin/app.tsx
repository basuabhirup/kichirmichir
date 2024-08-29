"use client"

import { Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { CourseList } from "./course/list"
import { CourseCreate } from "./course/create"
import { CourseEdit } from "./course/edit"
import { UnitList } from "./unit/list"
import { UnitEdit } from "./unit/edit"
import { UnitCreate } from "./unit/create"

const dataProvider = simpleRestProvider("/api")

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
      />
      <Resource
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
      />
    </Admin>
  )
}

export default App
