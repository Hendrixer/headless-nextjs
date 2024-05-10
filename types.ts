export type CusomterPostQuery = {
  customerPostCollection: {
    items: {
      slug: string
      name: string
      title: string
      body: {
        json: JSON
      }
      customer: {
        name: string
        logo: {
          url: string
          width: string
          title: string
          height: string
        }
      }
    }[]
  }
}
export type CustomerPostSlugsQuery = {
  customerPostCollection: {
    items: {
      slug: string
    }[]
  }
}
export type CustomerLogosQuery = {
  assetCollection: {
    items: {
      url: string
      title: string
      width: number
      height: number
    }[]
  }
}

export type HeroContentQuery = {
  content: {
    items: {
      title: string
      subtitle: string
      preTitle: string
      ctas: {
        items: {
          route: string
          label: string
        }[]
      }
    }[]
  }
}

export type NavsQuery = {
  navs: {
    items: {
      links: {
        items: {
          route: string
          label: string
        }[]
      }
    }[]
  }
}
