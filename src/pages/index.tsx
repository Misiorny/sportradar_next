import { seasonUrl, stepOneUrl } from '../data/fetchData'
import { InferGetStaticPropsType }         from 'next'
import { Header }                          from '../components/layout/Header'
import { Footer }                          from '../components/layout/Footer'
import {
  MainLayout
}                                          from '../components/layout/MainLayout'
import {
  TableHeader
}                                          from '../components/table/TableHeader'
import { Table }                           from '../components/table/Table'
import { TableTitle }                      from '../components/table/TableTitle'
import { TableForm }                       from '../components/table/TableForm'
import {
  TableFormOption
}                                          from '../components/table/TableFormOption'
import { TableRow }                        from '../components/table/TableRow'
import { TdCell }                          from '../components/table/TdCell'

console.log(stepOneUrl)

const Home = ({
  stepOne, seasons
}: InferGetStaticPropsType<typeof getStaticProps>) => {
// type Event=(typeof stepOne.schedules)[number];
  type StepOneData = (typeof stepOne.schedules)[number];

  const status = (status: 'closed' | 'postponed') => {
    if (status === 'closed' || status === 'postponed') return status
    throw new Error('Invalid status')
  }
  // const colorCell = (label: string): string | undefined => {
  //   if (!isLabeled(label) || status === 'postponed') return
  //   if (!winner) return 'bg-orange-300'
  //   return label === winner.name ? 'bg-green-500' : 'bg-red-500'
  // }
  return (

    <MainLayout>
      <Header textHeader="All teams, all results in one place!"/>
      <TableTitle tableTitle="Table of results"/>
      <TableForm>
        {seasons.seasons.map((e) => <TableFormOption
          key={Math.random()} value={e.id} name={e.name}
        />)}
      </TableForm>
      <Table>
        <TableHeader/>
        <TableRow/>
          <TdCell/>
      </Table>
      <Footer footerText="Created by Misiorny"/>
    </MainLayout>

  )
}

export const getStaticProps = async () => {
  const result = await fetch(`${stepOneUrl}`)
  const stepOne: StepOne = await result.json()
  console.log('stepOne', stepOne)
  const season = await fetch(`${seasonUrl}`)
  const seasons: Season = await season.json()
  console.log('seasons', seasons)
  return {
    props: {
      stepOne, seasons,
    },
  }
}

export interface StepOne {
  schedules: Schedule[];
}

//
export interface Schedule {
  sport_event: SportEvent;
  sport_event_status: SportEventStatus;
}

//
export interface SportEvent {
  start_time: string;
  venue: Venue;
  competitors: Competitor[];
}

//
export interface Venue {
  name: string;
}

//
export interface Competitor {
  id: string;
  name: string;
}

//
export interface SportEventStatus {
  status: GameStatus;
  home_score?: number | null;
  away_score?: number | null;
  winner_id: Winner;
  period_scores: PeriodScore[];
}

//
export interface PeriodScore {
  home_score: number;
  away_score: number;
}

export interface Season {
  seasons: [
    {
      id: string; name: string;
    }

  ]
}

export type GameStatus = 'closed' | 'postponed';
export type Winner = null | { id: string; name: string };

export default Home



