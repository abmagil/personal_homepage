import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import checkAbsoluteUrl from "../util/check-relative-url"
import "./activities.scss"

export function Activities() {
  const {
    allActivitiesJson: { nodes },
  } = useStaticQuery(
    graphql`
      query AllActivities {
        allActivitiesJson {
          nodes {
            description
            endDate
            name
            role
            startDate
            url
          }
        }
      }
    `
  )
  return (
    <>
      <h2>Activities</h2>
      <ul
        style={{
          paddingInlineStart: 0,
          margin: "0",
        }}
      >
        {nodes.map(activity => (
          <div class="activity">
            <span class="activity__dates">
              <span>{activity.startDate}</span>–
              <span>{activity.endDate || ""}</span>
            </span>
            <p class="activity__name">
              {activity.url ? (
                checkAbsoluteUrl(activity.url) ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={activity.url}
                  >
                    {activity.name}
                  </a>
                ) : (
                  <Link to={activity.url}>{activity.name}</Link>
                )
              ) : (
                activity.name
              )}
              &nbsp;
              {activity.description}
            </p>
            <div class="activity__role">{activity.role}</div>
          </div>
        ))}
      </ul>
    </>
  )
}
