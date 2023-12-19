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
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
