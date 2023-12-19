import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { FaInstagram, FaYoutube, FaEnvelope, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-10xl px-4 ">
				{children}
			</main>
			<footer className="w-full py-4 bg-gray-100 border-t">
                <div className="container mx-auto max-w-10xl px-6 flex flex-col md:flex-row justify-between items-center flex-wrap">
                    {/* Logo */}
                    <div className="order-1 md:order-none mb-4 md:mb-0">
                        <img src="/images/logo3.png" alt="Logo" width="100" height="36" />
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="order-3 md:order-none flex gap-4 mt-4 md:mt-0 mb-4 md:mb-0">
                        <Link href="https://www.instagram.com/thepotcastproductions/" isExternal>
                            <FaInstagram size={30} />
                        </Link>
                        <Link href="https://www.youtube.com/@thepotcastproductions" isExternal>
                            <FaYoutube size={30} />
                        </Link>
                        <Link href="mailto:info@thepotcastproductions.com">
                            <FaEnvelope size={30} />
                        </Link>
                        <Link href="https://www.facebook.com/thepotcastegypt" isExternal>
                            <FaFacebookF size={30} />
                        </Link>
                        <Link href="https://www.tiktok.com/@thepotcastproductions" isExternal>
                            <FaTiktok size={30} />
                        </Link>
                    </div>
                </div>
            </footer>
		</div>
	);
}
