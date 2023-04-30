import React from "react"
import "./education.scss"

export function Education() {
  return (
    <>
      <h2>Education</h2>
      <section class="education">
        <div class="education__details">
          <div class="education__level">B.S Chemistry</div>
          <time class="education__dates sm-hide">Jun 2009</time>
        </div>
        <p>
          <span class="education__location">
            <a target="_blank" rel="noopener noreferrer" href="//www.cmu.edu">
              Carnegie Mellon University
            </a>
          </span>
          , Pittsburgh, PA
        </p>
        <ul class="education__honors">
          <li>Graduating GPA 3.48/4.00</li>
        </ul>
      </section>
    </>
  )
}
