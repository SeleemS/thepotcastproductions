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
import clsx from "clsx";
import React from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const router = useRouter();
	const currentPath = router.pathname;

	const closeMenuAndNavigate = (url:string) => {
        setIsMenuOpen(false);
        router.push(url);
    };

	return (
		<NextUINavbar onMenuOpenChange={setIsMenuOpen} height="105px" maxWidth="xl" position="static">
			<NavbarContent className="flex justify-between items-center  mt-10 mb-10 w-full">
			
				<div>
					<NavbarBrand className="max-w-fit">
						<Link href="/">
							<img src="/images/logo3.png" alt="Logo" width="150" height="100%" />
						</Link>
					</NavbarBrand>
					{/*<ThemeSwitch/>*/}
				</div>

                <div className="hidden lg:flex gap-6 ml-auto">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href} isActive={currentPath === item.href}>
							<Link href={item.href}>
								<Link 
								className={`text-lg font-semibold nunito lg:text-xl ${currentPath === item.href ? 'active-gradient-text font-bold' : 'gradient-text'}`}
								>
								{item.label}
								</Link>
							</Link>
						</NavbarItem>
					))}
				</div>
            </NavbarContent>

			<NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			className="lg:hidden "
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

				<div className="flex justify-center items-center mt-20">
					<div>
						<NavbarBrand className="mb-4">
							<Link href="/">
								<img src="/images/logo3.png" alt="Logo" width="231" height="84" />
							</Link>
						</NavbarBrand>
					</div>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};



