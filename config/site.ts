export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The Potcast Productions | ذا بوتكاست برودكشنز",
	description: "We make podcasts.",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Original Productions",
      href: "/productions",
    },
    {
      label: "Branded Podcasts",
      href: "/whitelabel",
    },
	{
		label: "Careers",
		href: "/careers",
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
			label: "Original Productions",
			href: "/productions",
		},
		{
			label: "Branded Podcasts",
			href: "/whitelabel",
		},
		{
			label: "Contact Us",
			href: "/contactus",
		},
	],
	links: {
		instagram: "https://www.instagram.com/thepotcastproductions/",
		youtube: "https://www.youtube.com/@thepotcastproductions",
		email: "mailto:info@thepotcastproductions.com",
		facebook: "https://www.facebook.com/thepotcastproductions?mibextid=LQQJ4d",
		tiktok: "https://www.tiktok.com/@thepotcastproductions",
	},
};
