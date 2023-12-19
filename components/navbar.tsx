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


	return (
		<NextUINavbar onMenuOpenChange={setIsMenuOpen} className ="mt-2" maxWidth="xl" position="sticky" style={{ height: '120px' }}>
			<NavbarContent className="flex justify-between items-center mt-5 mb-5 w-full">
			
				
                <NavbarBrand className="max-w-fit">
                    <NextLink href="/">
                        <img src="/logo1.png" alt="Logo" width="125" height="36" />
                    </NextLink>
                </NavbarBrand>
				<ThemeSwitch/>
				

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

      <NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Button
								color="white"
								auto
								bordered
								shadow
								size="lg"
								className="button-hover-effect"
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



