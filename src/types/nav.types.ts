export interface Navigation {
    title: string;
    link?: string;
}

export interface ArrowLinkInterface extends Navigation {
    arrowLinks?: Navigation[];
}

export interface NavLinksInterface extends Navigation {
    hoverLinks?: ArrowLinkInterface[];
}

export type PropsNavbar = {
    location: boolean;
};