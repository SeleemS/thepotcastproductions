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
      href: "/ourproductions",
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
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
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
