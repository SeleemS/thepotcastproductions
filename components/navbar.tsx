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

	const closeMenuAndNavigate = (url) => {
        setIsMenuOpen(false);
        router.push(url);
    };


	return (
		<NextUINavbar onMenuOpenChange={setIsMenuOpen} classNames={{
			item: [
			  "flex",
			  "relative",
			  "h-full",
			  "items-center",
			  "data-[active=true]:after:content-['']",
			  "data-[active=true]:after:absolute",
			  "data-[active=true]:after:bottom-0",
			  "data-[active=true]:after:left-0",
			  "data-[active=true]:after:right-0",
			  "data-[active=true]:after:h-[2px]",
			  "data-[active=true]:after:rounded-[2px]",
			  "data-[active=true]:after:bg-primary",
			],
		  }} maxWidth="xl" position="sticky">
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
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
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
                color="gradient"
                auto
                bordered
                shadow
                size="lg"
				fontWeight="bold"
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



