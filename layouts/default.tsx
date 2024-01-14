import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { FaInstagram, FaYoutube, FaEnvelope, FaFacebookF, FaTiktok } from "react-icons/fa";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head
                title="The Potcast Productions | ذا بوتكاست بروداكشنز"
                description="Top-charting podcasts exploring fascinating genres and captivating narratives you won't find anywhere else."
                ogTitle="The Potcast Productions - ذا بوتكاست بروداكشنز"
                ogDescription="Top-charting podcasts exploring fascinating genres and captivating narratives you won't find anywhere else."
            />
			<Navbar />
			<main className="container mx-auto max-w-10xl p-4">
				{children}
				<SpeedInsights />
				<Analytics />
			</main>

			<footer className="bg-gray-100 py-2">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-10">
					{/* Logo */}
					<div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
					<Link href="./">
						<img src="/images/logo3.png" alt="Logo" width="100" height="36" />
					</Link>
					</div>
					
					{/* Social Media Icons - Center on desktop */}
					<div className="flex-1 flex justify-center order-3 md:order-none gap-4 mb-4 md:mb-0">
						<Link href={siteConfig.links.instagram} isExternal>
							<FaInstagram size={30} style={{ color: '#03a07d' }} />
						</Link>
						<Link href={siteConfig.links.youtube} isExternal>
							<FaYoutube size={30} style={{ color: '#03a07d' }} />
						</Link>
						{/*<Link href={siteConfig.links.email}>
							<FaEnvelope size={30} style={{ color: '#03a07d' }} />
	</Link>*/}
						<Link href={siteConfig.links.facebook} isExternal>
							<FaFacebookF size={30} style={{ color: '#03a07d' }} />
						</Link>
						<Link href={siteConfig.links.tiktok} isExternal>
							<FaTiktok size={30} style={{ color: '#03a07d' }} />
						</Link>
					</div>
                </div>
            </footer>
		</div>
	);
}
