/**
 * Since we got rid of the middleware contentlayer, this is our own data fetching middleware, using GraphQL queries. It is integrated with contentful GraphQL Content API https://www.contentful.com/developers/docs/references/graphql/
 */

type Props = {
  query: string
  variables?: any
  preview?: boolean
}

export const contentGglFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: Props): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      method: "POST",
      body: JSON.stringify({ query, variables }),
    }
  )

  const { data, errors } = await res.json()

  //graphQL's status code is 200 even if reponse goes wrong

  if (errors) {
    console.log(errors)
    throw Error("Could not get result from Contentful")
  }

  return data as T
}
