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