import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { FaInstagram, FaYoutube, FaEnvelope, FaFacebookF, FaTiktok } from "react-icons/fa";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-10xl p-4">
				{children}
				<SpeedInsights />
				<Analytics />
			</main>

			<footer className="w-full py-2 px-5 bg-gray-100 border-t">
                <div className="container mx-auto max-w-10xl px-10 flex flex-col ml-10 md:flex-row justify-between items-center flex-wrap">
                    {/* Logo */}
                    <div className="order-1 md:order-none mb-2 md:mb-0">
						<Link href="./">
                        	<img src="/images/logo3.png" alt="Logo" width="100" height="36" />
						</Link>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="order-3 md:order-none flex gap-4 mt-4 md:mt-0 mb-4 md:mb-0">
						<Link href="https://www.instagram.com/thepotcastproductions/" isExternal>
							<FaInstagram size={30} style={{ color: '#03a07d' }} />
						</Link>
						<Link href="https://www.youtube.com/@thepotcastproductions" isExternal>
							<FaYoutube size={30} style={{ color: '#03a07d' }} />
						</Link>
						<Link href="mailto:info@thepotcastproductions.com">
							<FaEnvelope size={30} style={{ color: '#03a07d' }} />
						</Link>
						<Link href="https://www.facebook.com/thepotcastegypt" isExternal>
							<FaFacebookF size={30} style={{ color: '#03a07d' }} />
						</Link>
						<Link href="https://www.tiktok.com/@thepotcastproductions" isExternal>
							<FaTiktok size={30} style={{ color: '#03a07d' }} />
						</Link>
					</div>
                </div>
            </footer>
		</div>
	);
}
