import type { Joke } from '@prisma/client'
import { Link, LoaderFunction, useLoaderData, useParams } from 'remix'
import { db } from '~/utils/db.server'

type LoaderData = { joke: Joke }

export const loader: LoaderFunction = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  })
  if (!joke) throw new Error('Joke not found')
  const data: LoaderData = { joke }
  return data
}

export default function () {
  const data = useLoaderData<LoaderData>()
  const { jokeId } = useParams()
  return <article>
    <h3>{jokeId} jokes</h3>
    <section>
      <h4>data.joke.name</h4>
      <p>
        {data.joke.content}
      </p>
      <Link to={'.'}>{data.joke.name}</Link>
    </section>

  </article>

}