import { LinksFunction } from '@remix-run/react/routeModules'
import styles from '~/styles/login.css'
import { ActionFunction, Form, json, LoaderFunction, redirect, useActionData, useSearchParams } from 'remix'
import { db } from '~/utils/db.server'
import { login } from '~/utils/session.server'

type ActionData = {
  formError?: string
  fieldErrors?: {
    username?: string
    password?: string
  }
  fields?: {
    username?: string
    password?: string
    loginType?: string
  }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
]

export const loader: LoaderFunction = () => {
  return []
}

function validateUsername (username: unknown) {
  if (typeof username !== 'string' || username.length < 3)
    return 'Username must be at least 3 characters long'
}

function validatePassword (password: unknown) {
  if (typeof password !== 'string' || password.length < 6)
    return 'Password must be at least 6 characters long '
}

const badRequest = (data: ActionData) =>
  json(data, { status: 400 })

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const username = form.get('username')
  const password = form.get('password')
  const redirectTo = form.get('redirectTo') || '/jokes'
  const loginType = form.get('loginType')

  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof redirectTo !== 'string' ||
    typeof loginType !== 'string'
  ) {
    return badRequest({
      formError: 'Form not submitted correctly '
    })
  }

  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  }

  const fields = { loginType, username, password }

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fields, fieldErrors })
  }

  switch (loginType) {
    case 'login': {
      const user = await login({ username, password })
      console.log(user)
      if (!user) {
        return badRequest({
          fields,
          formError: 'Username/Password combination is incorrect'
        })
      }
      // if there is a user, create thir seeslt
      return badRequest({ fields, formError: 'Not implemented' })
    }
    case 'register': {
      const userExists = await db.user.findFirst({ where: { username } })
      if (userExists)
        return badRequest({ fields, formError: `User with username ${username} already exists` })
      // create the user
      // create their session and redirect to /jokes
      return badRequest({ fields, formError: 'Not implemented' })
    }

    default : {

    }
  }

  return redirect(redirectTo as string)
}

export default function loginRoutes () {
  const [searchParam] = useSearchParams()
  const actionData = useActionData<ActionData>()
  return <article>

    <Form method="post" data-light="">
      <h2>Login</h2>
      <fieldset>
        <legend>select the type of form</legend>
        <p><label htmlFor={'login'}>Login</label><input type="radio" id="login" name="loginType" value="login"/></p>
        <p><label htmlFor={'register'}>Register</label><input id="register" type="radio" name="loginType"
                                                              value="register"/></p>
      </fieldset>
      <fieldset>
        <legend>Insert user information</legend>
        <p><label htmlFor="username">Username</label><input name="username" type="text"/></p>
        <p><label htmlFor="password">Password</label><input name="password" type="text"/></p>
      </fieldset>
      {actionData?.fieldErrors?.username ? <p>{actionData?.fieldErrors?.username}</p> : null}
      <button>로그인</button>
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