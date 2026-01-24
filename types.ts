import { Document } from '@contentful/rich-text-types'

export type HeroQuery = {
    heroCollection: {
        items: {
            subtitle: string
            preTitle: string
            title: string
            callToActionsCollection: {
                items: {
                    label: string
                    link: string
                }[]
            }
        }[]
    }
}

export type MediaLogoQuery = {
    assetCollection: {
        items: {
            title: string
            url: string
            width: number
            height: number
        }[]
    }
}

export type HeaderNavQuery = {
    navigationCollection: {
        items: {
            name: string
            linksCollection: {
                items: {
                    label: string
                    link: string
                }[]
            }
        }[]
    }
}

export type CustomerContentQuery = {
    customerPostCollection: {
        items: {
            title: string
            slug: string
            customer: {
                name: string
                logo: {
                    url: string
                    width: number
                    height: number
                }
            }
            body: {
                json: Document
            }
        }[]
    }
}

export type CustomerContentSlugQuery = {
    customerPostCollection: {
        items: {
            slug: string
        }[]
    }
}