export type SiteConfig = {
  title: string
  subtitle: string

  lang: string

  themeHue: number
  banner: {
    enable: boolean
    src: string
  }
}

export enum LinkPreset {
  Home = 0,
  Posts = 1,
  Archive = 2,
  About = 3,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}
