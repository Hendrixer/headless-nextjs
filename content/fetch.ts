export const contentGqlFetcher = async <T>({
  query,
  variables = {},
  preview = false,
  tags = [],
}: {
  query: string
  variables?: any
  preview?: boolean
  tags?: string[]
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { tags, revalidate: 10 },
    }
  )

  const { data, errors } = await res.json()

  if (errors) {
    // do something
    console.log(errors)
    throw new Error("Could not get content")
  }

  return data as T
}
