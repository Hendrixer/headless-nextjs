export type HeroQuery = {
  heroCollection: {
    items: {
      preTitle: string
      title: string
      subtitle: string
      callToActionsCollection: {
        items: {
          label: string
          link: string
        }[]
      }
    }[]
  }
}
