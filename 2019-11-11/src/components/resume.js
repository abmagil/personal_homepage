import React from "react"
import TechnicalExperience from "../components/technical-experience"
import { WorkExperience } from "../components/work-experience"
import { Activities } from "../components/activities"
import { Education } from "../components/education"

export default () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60fr 40fr",
        gridColumnGap: "30px",
      }}
    >
      <WorkExperience />
      <div className="miscellanea">
        <TechnicalExperience />
        <Activities />
        <Education />
      </div>
    </div>
  )
}
