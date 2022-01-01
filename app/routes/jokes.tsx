import { Link, LinksFunction, LoaderFunction, Outlet, useLoaderData } from 'remix'
import jokesStyleUrl from '../styles/jokes.css'
import { db } from '~/utils/db.server'

export const links: LinksFunction = () => [
  { rel: 'stylesheets', href: jokesStyleUrl }
]

type LoaderData = { jokeListItems: Array<{ id: string; name: string }> }
export let loader: LoaderFunction = async () => {
  const data: LoaderData = {
    jokeListItems: await db.joke.findMany({
      take: 5,
      select: { id: true, name: true },
      orderBy: { createdAt: 'desc' }
    })
  }
  return data
}

export default function JokesRoute () {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      <article className="jokes-layout">
        <header className="jokes-header">
          <h2 className="home-link">
            <Link to="/"
                  title="Remix Jokes"
                  arial-label="Remix Jokes"
            />
            <span className="logo">🤪</span>
            <span className="logo-medium">J🤪KES</span>
          </h2>
        </header>
        <aside>
          <Link to=".">Get a random joke</Link>
          <h2>more jokes!</h2>
          <p>Here are a few more jokes to check out:</p>
          <ul>
            {data.jokeListItems.map(joke => (
              <li key={joke.id}>
                <Link to={joke.id}>{joke.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="new" className="button">
            Add Your Own
          </Link>
        </aside>
        <main className="jokes-main">
          <Outlet/>
        </main>
        <Outlet/>
      </article>
    </>
  )
}