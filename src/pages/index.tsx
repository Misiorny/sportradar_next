import { stepOneUrl } from '../data/fetchData'
import { InferGetStaticPropsType } from 'next'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { MainLayout } from '../components/layout/MainLayout'
import { TableHeader } from '../components/table/TableHeader'
import { Table } from '../components/table/Table'
import { TableTitle } from '../components/table/TableTitle'
import { TableRow } from '../components/table/TableRow'

const Home = ({ stepOne }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('stepOneUrl', stepOneUrl, 'stepOne', stepOne)

  return (

    <MainLayout>
      <Header textHeader="All teams, all results in one place!"/>
      <TableTitle tableTitle="Table of results"/>
      <Table>
        <TableHeader/>
        {stepOne.schedules.map((e) => <TableRow key={Math.random()}
          teamsPlayed={`${e.sport_event.competitors[0].name}-${e.sport_event.competitors[1].name}`}
          result={`${e.sport_event_status.status==="closed" ? `${e.sport_event_status.home_score} :${e.sport_event_status.away_score}`:"postponed"}`}
        />)}
      </Table>

      <Footer footerText="Created by Misiorny"/>
    </MainLayout>

  )
}

export const getStaticProps = async () => {
  const result = await fetch(`${stepOneUrl}`)
  const stepOne: StepOne = await result.json()
  console.log('stepOneProps', stepOne)
  return {
    props: {
      stepOne,
    },
  }
}

export interface StepOne {
  schedules: Schedule[];
}
export interface Schedule{
  sport_event:SportEvent;
  sport_event_status:SportEventStatus;
}
export interface SportEvent {
  competitors:          Competitor[];
}
export interface Competitor {
  id:           string;
  name:         string;
}
export interface SportEventStatus {
  status:         GameStatus;
  home_score?:     number |null;
  away_score?:     number |null;
  winner_id:      Winner;
  period_scores:  PeriodScore[];
}
export interface PeriodScore {
  home_score: number;
  away_score: number;
}

export type GameStatus = 'closed' | 'postponed';
export type Winner = null | { id: string; name: string };

export default Home
