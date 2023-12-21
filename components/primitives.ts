import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight block font-semibold nunito",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#03a07d] to-[#006400]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[2.2rem] lg:text-4xl leading-10",
			lg: "text-4xl lg:text-6xl leading-10",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"blue",
				"cyan",
				"green",
				"pink",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const subtitle = tv({
	base: "w-full md:w-1/2  text-lg lg:text-xl text-default-600 text-center block max-w-full",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#2F9E44] to-[#006400]", 
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
	},
  defaultVariants:{
    fullWidth: true
  }
});

export const features = tv({
    base: "text-lg lg:text-xl font-semibold", // Increased font weight for boldness
    variants: {
        color: {
            violet: "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600",
            yellow: "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600",
            blue: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600",
            cyan: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600",
            green: "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600",
            pink: "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600",
            foreground: "text-gray-800 dark:text-gray-300", // Adjust as per your theme
        },
        size: {
            sm: "text-base",
            md: "text-lg",
            lg: "text-xl",
        },
    },
    defaultVariants: {
        size: "md",
        color: "foreground", // Default color
    },
});