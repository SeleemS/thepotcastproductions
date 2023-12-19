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
			<main className="container mx-auto max-w-10xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full py-4 mb-5 bg-gray-100 border-t ">
				<div className="container mx-auto max-w-10xl px-6 flex justify-center items-center">
				<div className="flex gap-4 ">
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
