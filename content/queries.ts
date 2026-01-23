import "server-only"
import { HeaderNavQuery, HeroQuery, MediaLogoQuery } from '@/types'
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
        variables: {
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


export const getNavigationForHeader = async () => {
    const query = `#graphql
    query Query($where: NavigationFilter) {
        navigationCollection(where: $where) {
            items {
                name
                linksCollection {
                    items {
                        label
                        link
                    }
                }
            }
        }
    }
    `
    const data = await contentGqlFetcher<HeaderNavQuery>({
        query,
        variables: {
            where: {
                name: "Header"
            }
        }
    })

    if(!data){
        throw Error("Oops")
    }
    
    return data
}