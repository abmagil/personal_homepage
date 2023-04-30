import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./watrline-styles.scss"

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})
const SecondPage = () => (
  <Layout>
    <SEO title="Watrline Project" />
    <main className="watrline-page">
      <h1>Watrline</h1>
      <p>Watrline is my long-running side-project</p>
      <section className="purpose">
        <h2>Purpose</h2>
        <p>
          Society of Grownups was dedicated to the idea of "Democratizing
          Financial Literacy". This resonated with me.
        </p>
        <p>
          I am drawn to the idea of teaching financial topics via simple
          calculators and visualizations. Watrline is my main testbed for this
          idea.
        </p>
        <p>
          I use Watrline as a way to explore visualization against a backdrop of
          slowly attempting to create it as a product that could be released to
          the wild (hence the cheeky sarcastic tech-y name.
        </p>
      </section>
      <section className="description">
        <h2>Description</h2>
        <p>
          Watrline is rooted in what financial planners call a "spending plan".
          Rather than build a budget where you simply look at monthly or annual
          expenses to ensure you are cash-positive, spending plans are
          goal-oriented.
        </p>
        <h3>Spending Plans</h3>
        <p>
          A spending plan is built around the question "What do you want to
          spend your money on?". One option is to take your money and squirrel
          it away in a bank and watch it slowly grow. But if you went to an
          economist, they'd tell you you were wasting your money. When you do
          that, your cash will be losing value to inflation. If you went to a
          financial advisor, though, they might tell you that it's bad because{" "}
          <span className="emphasis">money's only good for spending</span>.
        </p>
        <p>
          The idea of a spending plan is that you get value from your money when
          you use it to get things that you want. Because you almost certainly
          want more than one thing, a spending plan drives you to rank each
          thing and decide how much money to put towards it. If you take a
          reasonable guess of how much it will cost to do a thing, say, take a
          vacation to Hawai'i, and you have a good sense when you want to go,
          you can calculate how much money you need to set towards that goal
          every month/day/year.
        </p>
      </section>
      <section>
        <h2>The Hook</h2>
        <p>
          The idea behind Watrline is that the hard part of building a spending
          plan <span className="emphasis">isn't</span> coming up with the list
          or coming up with a reasonable number for any given goal. The hard
          part is the same as in most areas of life- setting priorities. This is
          often the role that a financial advisor will play for people
          addressing their finances.
        </p>
        <p>
          Watrline is dedicated to making it easier for regular folks to solve
          this problem without paying hundreds of dollars for a financial
          advisor.
        </p>
        <p>
          Watrline's MO is to reflect back your choices to you{" "}
          <span className="emphasis">AND</span> to show you the impact of making
          each choice.
        </p>
        <div>
          <p>Take the following example:</p>
          <div>
            <p>I have three goals:</p>
            <ul>
              <li>
                <dl>
                  <dt>Send my daughter to college</dt>
                  <dd>{priceFormatter.format(40000)}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>Take my family to Disney World</dt>
                  <dd>{priceFormatter.format(4000)}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>Replace my car</dt>
                  <dd>{priceFormatter.format(25000)}</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <p>
          With each of these goals, there are various pulls- do I want to spend
          more or less on college? When should I replace my car?
        </p>
        <p>
          Each of these questions impacts all the others- I need to save more
          every month if I spend more on college, but that means I have less to
          put towards my car. If I want to send my daughter to Harvard, and
          she's 11, I'm going to need 4 years of tuition in 7 years, which might
          be hundreds of dollars every month. Even if I want to set less aside
          for college every month, there's not much flexibility about when my
          kid goes off to school, so the only option is to spend less on
          college, perhaps necessitating a cheaper school.
        </p>
        <h3>How Does It Work</h3>
        <p>
          Watrline asks you the hard questions and lets you compare each answer.
          The immediate feedback is a way to challenge your immediate thoughts
          and make sure that you are okay with living life with the priorities
          you have in mind.
        </p>
        <p>
          If you want a $50,000 brand new car instead of a $800 dollar beater,
          go for it! But what if it means you can't afford to go to Disney for
          another three years? Is it still worth it?
        </p>
      </section>
      <section className="Challenges"></section>
      <Link
        style={{
          display: "block",
          margin: "15px 0",
          textDecorationColor: "initial",
        }}
        to="/"
      >
        Return Home
      </Link>
    </main>
  </Layout>
)

export default SecondPage
