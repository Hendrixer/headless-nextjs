export type CustomerPostQuery = {
  customerPostCollection: {
    items: {
      title: string
      slug: string
      customer: {
        logo: {
          url: string
          width: number
          height: number
        }
        name: string
      }
      body: {
        json: JSON
      }
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
