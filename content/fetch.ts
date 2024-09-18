/**
 * Since we got rid of the middleware contentlayer, this is our own data fetching middleware, using GraphQL queries. It is integrated with contentful GraphQL Content API https://www.contentful.com/developers/docs/references/graphql/
 */
export const contentGglFetcher = async (
  query: string,
  variables = {},
  preview = false
) => {
  const result = await fetch(
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
}
