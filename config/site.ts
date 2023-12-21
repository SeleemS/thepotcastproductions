export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The Potcast Productions",
	description: "Podcasts baby",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Productions",
      href: "/productions",
    },
    {
      label: "White Label",
      href: "/whitelabel",
    },
    {
      label: "Contact Us",
      href: "/contactus",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Productions",
			href: "/productions",
		},
		{
			label: "White Label",
			href: "/whitelabel",
		},
		{
			label: "Contact Us",
			href: "/contactus",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
	},
};
