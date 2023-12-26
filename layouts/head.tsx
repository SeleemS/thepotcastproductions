import React from "react";
import NextHead from "next/head";

// Define a type for the props
interface HeadProps {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    favicon?: string;
    customScripts?: string[];
}

export const Head = ({
    title = "The Potcast Productions | ذا بوتكاست بروداكشنز",
    description = "Top-charting podcasts exploring fascinating genres and captivating narratives you won't find anywhere else.",
    ogTitle = "The Potcast Productions | ذا بوتكاست بروداكشنز",
    ogDescription = "Top-charting podcasts exploring fascinating genres and captivating narratives you won't find anywhere else.",
    favicon = '/favicon.ico', // Default value for favicon
    customScripts,
}: HeadProps) => {
    // Default OG image
    const defaultOgImage = "/images/onload.png";

    return (
        <NextHead>
            <title>{title}</title>
            <meta key="title" content={ogTitle || title} property="og:title" />
            <meta content={ogDescription || description} property="og:description" />
            <meta content={description} name="description" />
            {/* Default OG Image */}
            <meta property="og:image" content={defaultOgImage} />
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
            {/* Custom scripts (if any) */}
            {customScripts && customScripts.map((script, index) => (
                <script key={index} dangerouslySetInnerHTML={{ __html: script }} />
            ))}
        </NextHead>
    );
};
