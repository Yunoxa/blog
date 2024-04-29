import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config.ts'
import { LinkPreset } from './types/config.ts'

export const siteConfig: SiteConfig = {
  title: "Yuno's Dungeon",
  subtitle: "Yuno's Site",
  lang: 'en',
  themeHue: 0,
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Posts,
    LinkPreset.Archive,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/profile.png',
  name: 'Yunoxa',
  bio: 'Music producer and hobbyist developer~',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/Yunoxaa',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/id/Yunoxa/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Yunoxa/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
