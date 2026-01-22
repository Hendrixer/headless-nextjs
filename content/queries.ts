import { HeroQuery, MediaLogoQuery } from '@/types'
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


export const contentForLogoCarousel = async () => {
    const query = `#graphql
    query AssetCollection($where: AssetFilter) {
        assetCollection(where: $where) {
            items {
                title
                url
                width
                height
            }
        }
    }
    `

    const data = await contentGqlFetcher<MediaLogoQuery>({
        query, 
        variables:{
            where: {
                title_contains: "client"
            }
        }
       
    })

    
    if (!data) {
        throw Error("Oops")
    }

    return data
}