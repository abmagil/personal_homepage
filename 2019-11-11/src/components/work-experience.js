import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { format } from "date-fns"
import "./work-experience.scss"

const Job = ({
  role,
  startDate,
  endDate,
  employer,
  url,
  address,
  responsibilities,
}) => {
  const formatter = inputDate =>
    inputDate && format(new Date(inputDate), "LLL yyyy")

  return (
    <section className="job">
      <div className="job__details">
        <h3 className="job__title">{role}</h3>
        <span className="job__dates">
          <time>{formatter(startDate)}</time>–<time>{formatter(endDate)}</time>
        </span>
      </div>
      <p style={{ margin: ".25em auto" }}>
        <span className="job__employer">
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {employer}
          </a>
        </span>
        , {address}
      </p>
      <ul className="job__responsibilities">
        {responsibilities.map(responsibility => (
          <li style={{ marginBottom: "2px" }} key={responsibility}>
            {responsibility}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function WorkExperience() {
  const {
    allJobsJson: { nodes },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        allJobsJson {
          nodes {
            address
            employer
            endDate
            responsibilities
            role
            startDate
            url
          }
        }
      }
    `
  )

  // const nodes = []
  return (
    <div>
      <h2>Work Experience</h2>
      {nodes.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </div>
  )
}
