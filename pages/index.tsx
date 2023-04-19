import Users from './users'
import Head from 'next/head';

export default function Home() {
  return (
    <>
     <Head>
        <title>
        Evelan test task - User List APP
        </title>
        <meta
          name="description"
          content="Evelan test task that showing the list on API https://reqres.in/"
          key="desc"
        />
      </Head>
      <Users />
    </>
  )
}
