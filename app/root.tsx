import { Links, LinksFunction, LiveReload, Outlet } from 'remix'
import globalStylesUrl from './styles/global.css'
import globalMediumStylesUrl from './styles/global-medium.css'
import globalLargeStylesUrl from './styles/global-large.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheets', href: globalStylesUrl },
  { rel: 'stylesheets', href: globalMediumStylesUrl, media: 'print, (min-width: 640px)' },
  { rel: 'stylesheets', href: globalLargeStylesUrl, media: 'screen and (min-width: 1024px)' }
]

export default function App () {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <title>Remix: So great, it's funny!</title>
      <Links/>
    </head>
    <body>
    <header><h1>J🤪KE Shop</h1></header>
    <nav>
      <h2>menu</h2>
      <ul>
        <li>HOME</li>
        <li>OUR TEAM</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
        <li>
          <form>
            <h1>find page</h1>
            <fieldset>
              <legend>search text</legend>
              <input type={'text'}/>
              <button>Go!</button>
            </fieldset>
          </form>
        </li>
      </ul>
    </nav>
    <main>
      <Outlet/>
    </main>
    <aside>
      <h2>Rerlated</h2>
      <ul>
        <li><a href="#">Oh I do like to be beside the seaside</a></li>
        <li><a href="#">Oh I do like to be beside the sea</a></li>
        <li><a href="#">Although in the North of England</a></li>
        <li><a href="#">It never stops raining</a></li>
        <li><a href="#">Oh well...</a></li>
      </ul>
    </aside>
    <footer>Copyright</footer>
    {process.env.NODE_ENV === 'development' ? <LiveReload/> : null}
    </body>
    </html>
  )
}