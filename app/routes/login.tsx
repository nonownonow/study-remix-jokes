import { LinksFunction } from '@remix-run/react/routeModules'
import styles from '~/styles/login.css'
import { Form, LoaderFunction, useSearchParams } from 'remix'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
]

export const loader: LoaderFunction = () => {
  return []
}

export default function loginRoutes () {
  const [searchParam] = useSearchParams()
  return <article>
    <nav>
      <h2>login menu</h2>
      <ul>
        <li>
          <p><label htmlFor={'login'}>Login</label><input type="radio" id="login" name="action"/></p>
        </li>
        <li>
          <p><label htmlFor={'register'}>Register</label><input id="register" type="radio" name="action"/></p>
        </li>
      </ul>
    </nav>
    <Form method="post" data-light="">
      <h2>Login</h2>
      <fieldset>
        <legend>Insert user information</legend>
        <p><label htmlFor="username">Username</label><input name="username" type="text"/></p>
        <p><label htmlFor="password">Password</label><input name="password" type="text"/></p>
      </fieldset>
      <input type="hidden" name="redirectTo" value={searchParam.get('redirectTo') ?? undefined}/>
    </Form>
    <Form method="post">
      <h2>Register</h2>
      <fieldset>
        <legend>Insert user information</legend>
        <p><label>Username</label></p>
        <p><label>Password</label></p>
      </fieldset>
    </Form>
  </article>
}