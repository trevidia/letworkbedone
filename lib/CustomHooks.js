import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export function useHasUser() {
    const [hasUser, setHasUser] = useState(false);
    const router = useRouter();
    useEffect(
        () => {
            if (router.pathname.includes("users")) {
                setHasUser(true)
            } else {
                setHasUser(false)
            }
        }, [router.pathname]
    );
    return hasUser
}

export function useFetchCategories() {
    const categoriesJson = [
        {
            id: 0,
            title: "Graphics & Design",
            url: "graphics_design",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 1,
            title: "Writing & Translation",
            url: "writing_translation",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 2,
            title: "Video & Animation",
            url: "video_animation",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 3,
            title: "Digital Marketing",
            url: "digital_marketing",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 4,
            title: "Programming & Tech",
            url: "programming_tech",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 5,
            title: "Business",
            url: "business",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 6,
            title: "Fun & Lifestyle",
            url: "fun_lifestyle",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        },
        {
            index: 7,
            title: "Music & Audio",
            url: "music_audio",
            subCategories: [
                {
                    title: "Logo Design",
                    url: "logo_design"
                },
                {
                    title: "Brand Style Guides",
                    url: "brand_style_guides"
                },
                {
                    title: "Business Cards & Stationery",
                    url: "business_cards_stationery"
                },
            ]
        }]
    const [categories, setCategories] = useState(categoriesJson);
    return [categories, setCategories]
}