import type { Load } from "@sveltejs/kit";
import { docsPages } from "../../data/docs";

export const prerender = true;

export const load: Load = async ({ url }) => {
    const path = url.pathname
        .replace(/\/$/gi, "") // remove trailing slash
        .replace("/docs", "") // remove /docs
        .replace("/DuoWOA", ""); // remove /DuoWOA

    const currentPage = docsPages.find(p => p.path === path);

    return {
        props: {
            currentPage
        }
    };
};