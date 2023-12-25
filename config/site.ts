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
			label: "Original Productions",
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
		instagram: "https://www.instagram.com/thepotcastproductions/",
		youtube: "https://www.youtube.com/@thepotcastproductions",
		email: "mailto:info@thepotcastproductions.com",
		facebook: "https://www.facebook.com/thepotcastegypt",
		tiktok: "https://www.tiktok.com/@thepotcastproductions",


	},
};
