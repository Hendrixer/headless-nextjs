export type LogoWallQuery = {
  assetCollection: {
    items: {
      width: number
      height: number
      url: string
      title: string
    }[]
  }
}

export type HeroQuery = {
  heroCollection: {
    items: {
      title: string
      subtitle: string
      preTitle: string
      callToActionsCollection: {
        items: {
          link: string
          label: string
        }[]
      }
    }[]
  }
}
