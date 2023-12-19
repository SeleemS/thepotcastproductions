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

				

                <div className="hidden lg:flex gap-4 ml-auto"> {/* Note the addition of ml-auto */}
				
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
							<Link href={item.href} color="foreground">
							{item.label}
							</Link>
						</NavbarItem>
                    ))}
                </div>
            </NavbarContent>

			<NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			className="sm:hidden"
			/>

      <NavbarMenu className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex flex-col gap-3">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Button
				onClick={() => closeMenuAndNavigate(item.href)} // Handle navigation here
                className="w-full text-xl py-4"
              >
                {item.label}
              </Button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
		</NextUINavbar>
	);
};



