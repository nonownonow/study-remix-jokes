import stylesUrl from '../styles/index.css'
import { Link, LinksFunction } from 'remix'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesUrl }
]

export default function IndexRoute () {
  return <article className="container">
    <section className="content">
      <h2>Remix <span>Jokes!</span></h2>
      <nav>
        <ul>
          <li>
            <Link to="jokes">Read Jokes</Link>
          </li>
        </ul>
      </nav>
    </section>
  </article>
}