export const contentGQLQuery = async <T>({
  query,
  variables = {},
  tags = [],
  preview = false,
  revalidate,
}: {
  query: string
  variables?: any
  tags?: string[]
  preview?: boolean
  revalidate?: number
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
      next: { tags, ...{ revalidate } },
    }
  )

  const { data, errors } = await res.json()
  if (errors) {
    console.error(errors)
    throw new Error("error")
  }

  return data as T
}
