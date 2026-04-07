import "server-only"
import { CustomerContentQuery, CustomerContentSlugQuery, HeaderNavQuery, HeroQuery, MediaLogoQuery } from '@/types'
import { contentGqlFetcher } from './fetch'

export const getContentForHero = async (isDraft = false) => {
    const query = `#graphql
    query HeroCollection {
        heroCollection(preview : ${isDraft ? "true" : "false"}){
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
    const data = await contentGqlFetcher<HeroQuery>({ query, preview: isDraft })

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

export const getContentForCustomer = async (slug: string) => {
    const query = `#graphql 
    query customerPostCollection($where: CustomerPostFilter) {
        customerPostCollection(where: $where) {
            items {
                title
                slug
                customer {
                    name
                    logo {
                        url
                        width
                        height
                    }
                }
                body {
                    json
                }
            }
        }
    }
    `
    const data = await contentGqlFetcher<CustomerContentQuery>({
        query,
        variables: {
            slug,
        }
    })
    
    if(!data){
        throw new Error("Oops")
    }

    return data
}

export const getContentSlugs = async () => {
    const query = `#graphql
    query CustomerPostCollection {
        customerPostCollection {
            items{
                slug
            }
        }
    }   
    `
    const data = await contentGqlFetcher<CustomerContentSlugQuery>({query})

    if(!data){
        return new Error("Oops")
    }

    return data
}