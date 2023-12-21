import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

export const Head = () => {
	return (
		<NextHead>
			<title>{siteConfig.name}</title>
			<meta key="title" content={siteConfig.name} property="og:title" />
			<meta content={siteConfig.description} property="og:description" />
			<meta content={siteConfig.description} name="description" />
			<link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
			<meta name="robots" content="index, follow"></meta>
			<meta property="og:site_name" content="The Potcast Productions"></meta>
			<meta
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				name="viewport"
			/>
			<link href="/favicon.ico" rel="icon" />
			<link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@400;700&family=Poppins:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
		  {/* Google Analytics */}
		  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BHZNV1QN5T"></script>
			<script
				dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-BHZNV1QN5T');
				`,
				}}
			/>
		  	
		</NextHead>
	);
};

