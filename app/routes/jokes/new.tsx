import { ActionFunction, json, redirect, useActionData } from 'remix'
import { db } from '~/utils/db.server'

type ActionData = {
  formErrors?: string
  fieldErrors?: {
    name: string | undefined
    content: string | undefined
  };
  fields?: {
    name: string
    content: string
  }
}

function validateJokeContent (content: string) {
  if (content.length < 10) {
    return 'That joke is too short'
  }
}

function validateJokeName (name: string) {
  if (name.length < 2) {
    return 'that joke name is too short'
  }
}

const badRequest = (data: ActionData) => {
  return json(data, { status: 400 })
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get('name')
  const content = form.get('content')

  if (typeof name !== 'string' || typeof content !== 'string') {
    return badRequest({ formErrors: 'Form not submitted correctly.' })
  }

  const fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  }

  const fields = { name, content }
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields })
  }

  const joke = await db.joke.create({ data: fields })
  return redirect(`/jokes/${joke.id}`)
}

export default function JokesNewRoute () {
  const actionData = useActionData<ActionData>()

  return (
    <form method="post">
      <h3>Create joke</h3>
      <fieldset>
        <legend>Add your own hilarious joke</legend>
        <p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={actionData?.fields?.name}
            aria-invalid={
              Boolean(actionData?.fieldErrors?.name) ||
              undefined
            }
            aria-describedby={
              actionData?.fieldErrors?.name
                ? 'name-error'
                : undefined
            }
          />
          {actionData?.fieldErrors?.name ? (
            <p
              className={'form-validation-error'}
              role={'alert'}
              id={'name-error'}
            >
              {actionData.fieldErrors.name}
            </p>
          ) : null}
        </p>
        <p>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content"
                    defaultValue={actionData?.fields?.content}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.content) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.content
                        ? 'content-error'
                        : undefined
                    }
          />
          {actionData?.fieldErrors?.content ? (
            <p
              className="form-validation-error"
              role="alert"
              id="content-error"
            >
              {actionData?.fieldErrors?.content}
            </p>
          ) : null}
        </p>
      </fieldset>
      <p>
        <button type="submit">Add</button>
      </p>
    </form>
  )
}