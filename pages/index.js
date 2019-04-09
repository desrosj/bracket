import Layout from '../src/components/Layout.js'
import Link from 'next/link'

import { computeOrderedResults } from '../src/actions/compute';

const Standings = (props) => {
  const standings = props.standings.map(competitor => {
    return (
      <li key={competitor.name}>
        <Link as={`/p/${competitor.name}`} href={`/post?id=${competitor.name}`}>
          <a>{competitor.name}</a>
        </Link>
        &nbsp;- {competitor.score}
      </li>
    )
  });

  return (
    <ol>
      {standings}
    </ol>
  )
}

const Season = (props) => {
  return (
    <div>
      <h1>{props.season.year}</h1>
      <Standings standings={props.season.standings} />
    </div>
  )
}

const Index = (props) => {
  const seasons = props.seasons.map(season => {
    return (
      <div>
        <Season season={season} />
      </div>
    )
  })

  return (
    <Layout>
      <h1>Standings</h1>
      {seasons}
    </Layout>
  )
}

Index.getInitialProps = () => {
  const years = [2018, 2019];

  return {
    seasons: years.map(year => ({
      year,
      standings: computeOrderedResults(year)
    }))
  }
}

export default Index
