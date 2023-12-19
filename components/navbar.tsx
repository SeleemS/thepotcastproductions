import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";

import { useRouter } from 'next/router';


import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import React from "react";

import { ThemeSwitch } from "@/components/theme-switch";

import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";


export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const router = useRouter();
	const currentPath = router.pathname;

	const closeMenuAndNavigate = (url:string) => {
        setIsMenuOpen(false);
        router.push(url);
    };


	return (
		<NextUINavbar onMenuOpenChange={setIsMenuOpen} className ="mt-4 mb-5 " maxWidth="xl" position="sticky">
			<NavbarContent className="flex justify-between items-center  mt-10 mb-10 w-full">
			
				
				<NavbarBrand className="max-w-fit">
                    <NextLink href="/">
                        {/* Adjust the size of the logo image */}
                        <img src="/images/logo3.png" alt="Logo" width="100" height="36" />
                    </NextLink>
                </NavbarBrand>
				{/*<ThemeSwitch/>*/}

				

                <div className="hidden lg:flex gap-4 ml-auto">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href} isActive={currentPath === item.href}>
						<NextLink href={item.href} passHref>
							<Link 
							className={`text-lg lg:text-xl ${currentPath === item.href ? 'active-gradient-text font-bold' : 'gradient-text'}`}
							>
							{item.label}
							</Link>
						</NextLink>
						</NavbarItem>
					))}
					</div>
            </NavbarContent>

			<NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			className="sm:hidden"
			/>

			<NavbarMenu className="bg-white  shadow-lg rounded-lg p-4">
			<div className="flex flex-col bg-white/30 backdrop-blur-md gap-3 mt-5">
				{siteConfig.navMenuItems.map((item, index) => (
				<NavbarMenuItem key={`${item}-${index}`}>
					<Button
					onClick={() => closeMenuAndNavigate(item.href)}
					className="w-full text-xl py-4 bg-white/20 hover:bg-white/30 text-gray-800 font-medium transition duration-300 ease-in-out shadow-md rounded-lg"
					style={{ backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
					>
					<span className="gradient-button-text">{item.label}</span>
					</Button>
				</NavbarMenuItem>
				))}
			</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};



