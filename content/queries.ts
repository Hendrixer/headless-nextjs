import "server-only"
import { contentGQLQuery } from "./fetch"
import {
  CustomerLogosQuery,
  HeroContentQuery,
  NavsQuery,
  CustomerPostSlugsQuery,
  CusomterPostQuery,
} from "@/types"

export const getCusomterPost = async (slug: string, isDraft = false) => {
  const query = `#graphql
    query CustomerPost($where: CustomerPostFilter, $limit: Int) {
      customerPostCollection(where: $where, limit: $limit, preview: ${
        isDraft ? "true" : "false"
      }) {
        items {
          slug
          name
          title
          body {
            json
          }
          customer {
            name
            logo {
              url
              width
              title
              height
            }
          }
        }
      }
    }
  `

  const data = await contentGQLQuery<CusomterPostQuery>({
    query,
    revalidate: 30,
    variables: {
      where: {
        slug,
      },
      limit: 1,
    },
  })

  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getCustomerPostsSlugs = async (isDraft = false) => {
  const query = `#graphql
    query CustomerPostCollection {
      customerPostCollection {
        items {
          slug
        }
      }
    }
  `

  const data = await contentGQLQuery<CustomerPostSlugsQuery>({
    query,
    revalidate: 30,
  })

  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getCustomerLogos = async (isDraft = false) => {
  const query = `#graphql
  query Query($where: AssetFilter) {
    assetCollection(where: $where, preview: ${isDraft ? "true" : "false"}) {
      items {
        url
        width
        title
        height
      }
    }
  }
  `
  const data = await contentGQLQuery<CustomerLogosQuery>({
    query,
    revalidate: 30,
    variables: {
      limit: 1,
      where: {
        fileName_contains: "customer",
      },
    },
  })

  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getMainNav = async (isDraft = false) => {
  const query = `#graphql
    query Navigation($where: NavigationFilter, $limit: Int) {
      navs:navigationCollection(where: $where, limit: $limit, preview: ${
        isDraft ? "true" : "false"
      }) {
        items {
          links:linksCollection {
            items {
              route
              label
            }
          }
        }
      }
    }
  `

  const data = await contentGQLQuery<NavsQuery>({
    query,
    revalidate: 30,
    variables: {
      limit: 1,
      where: {
        name_contains: "desktop",
      },
    },
  })

  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getHeroContent = async (isDraft = false) => {
  const query = `#graphql
    query HeroSectionCollection($limit: Int) {
      content:heroSectionCollection(limit: $limit, preview: ${
        isDraft ? "true" : "false"
      }) {
        items {
          title
          subtitle
          preTitle
          ctas:callToActionsCollection {
            items {
              route
              label
            }
          }
        }
      }
    }
  `
  const data = await contentGQLQuery<HeroContentQuery>({
    query,
    revalidate: 30,
    preview: isDraft,
    variables: {
      limit: 1,
    },
  })
  if (!data) {
    throw new Error("oops")
  }

  return data
}
