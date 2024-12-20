import { NavbarItem } from "@docusaurus/theme-common";

interface ILinkConfig {
    actions: { label: string; to: string }[];
    navigators: NavbarItem[];
}

export const linksConfig: ILinkConfig = {
    actions: [
        {
            label: "Get Started",
            to: "/docs/overview",
        },
    ],
    navigators: [
        {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
        },
        {
            label: "Contributing",
            position: "right",
            href: "https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/blob/main/CONTRIBUTION.md",
        },
        {
            label: "GitHub",
            position: "right",
            href: "https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero",
        },
    ],
};
