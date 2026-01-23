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
