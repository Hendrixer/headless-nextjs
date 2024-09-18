/* 
Funtions to fetch content

*/

import { HeroQuery } from "@/types"
import { contentGglFetcher } from "./fetch"

export const getHeroContent = async () => {
  // deliberately not choosing heroID to query because it could be changed or deleted by content editor
  const query = `
  query HeroCollection {
    heroCollection {
      items {
      preTitle
      title
      subtitle
      callToActionsCollection {
        items {
          label
          link
        }
      }
    }
  }
}
  `

  const data = await contentGglFetcher<HeroQuery>({ query })

  if (!data){
    throw Error("Something went wrong at getting Hero content")
  }

  return data
}
