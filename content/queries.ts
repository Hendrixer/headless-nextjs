import { HeroQuery } from '@/types'
import { contentGqlFetcher } from './fetch'

export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
                subtitle
                preTitle
                title
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
    const data = await contentGqlFetcher<HeroQuery>({ query })

    if (!data) {
        throw Error("Oops")
    }

    return data
}        