// import {useState} from "react";
import Link from "next/link";
import DropDownNav from "./DropDownNav";
// import axios from "axios";
import {useEffect, useState} from "react";

const CategoryNav = () => {
    const categories = ["Graphics & Design", "Writing & Translation", "Video & Animation",
        "Digital Marketing", "Programming & Tech", "Business", "Fun & Lifestyle", "Music & Audio"];
    const [category, setCategory] = useState();

    const categoriesJson = {
        graphics: {
            id: 0,
            title: "Graphics & Design",
            subCategories: ["Logo Design",
                "Brand Style Guides",
                "Business Cards & Stationery",
                "Game Design",
                "Graphics for Streamers",
                "Twitch Store",
                "Illustration",
                "Pattern Design",
                "Tattoo Design",
                "Portraits & Caricatures",
                "Storyboards",
                "Photoshop Editing",
                "Presentation Design",
                "Infographic Design",
                "Infographic Design",
                "Vector Tracing",
                "Book Design",
                "Album Cover Design",
                "Podcast Cover Art",
                "Packaging Design",
                "Web & Mobile Design",
                "Social Media Design",
                "AR Filters & Lenses",
                "Web Banners",
                "Architecture & Interior Design",
                "Landscape Design",
                "Building Information Modeling",
                "Trade Booth Design",
                "Industrial & Product Design",
                "Character Modeling",
                "Flyer Design",
                "Brochure Design",
                "Signage Design",
                "Poster Design",
                "Catalog Design",
                "Menu Design",
                "Postcard Design",
                "Invitation Design",
                "T-Shirts & Merchandise",
                "Other",
                "E-Commerce Marketing"]
        },
        writing: {
            index: 1,
            title: "Writing & Translation",
            subCategories: ["Articles & Blog",
                "Translation",
                "Online Language Lessons",
                "Proofreading & Editing ",
                "Brand Voice & Tone",
                "Resume Writing ",
                "Cover Letters",
                "LinkedIn Profiles",
                "Podcast Writing",
                "White Papers",
                "Case Studies",
                "Sales Copy",
                "Press Releases",
                "Social Media Copy",
                "Transcripts",
                "Book & eBook Writing",
                "Book Editing",
                "Beta Reading",
                "Website Content",
                "Product Descriptions",
                "Product Descriptions",
                "UX Writing",
                "Grant Writing",
                "Technical Writing",
                "Business Names & Slogans",
                "Scriptwriting",
                "Email Copy",
                "Speech writing",
                "Creative Writing",
                "Legal Writing"]
        },
        videoAnimation: {
            index: 2,
            title: "Video & Animation",
            subCategories: [
                "Whiteboard & Animated Explainers",
                "Video Editing",
                "Short Video Ads",
                "Lyric & Music Videos",
                "Animated GIFs",
                "Logo Animation",
                "Logo Animation",
                "Intros & Outros",
                "App & Website Previews",
                "Character Animation",
                "3D Product Animation",
                "Animation for Kids",
                "Animation for Streamers",
                "Live Action Explainers",
                "eLearning Video Production",
                "Spokespersons Videos",
                "Unboxing Videos",
                "Visual Effects",
                "Screencasting Videos",
                "Slideshow Videos",
                "Book Trailers",
                "Real Estate Promos",
                "Product Photography",
                "Local Photography",
                "Article to Video",
            ]
        },
        digital: {
            index: 3,
            title: "Digital Marketing",
            subCategories: [
                "Social Media Marketing",
                "SEO",
                "Marketing Strategy",
                "Public Relations",
                "Content Marketing",
                "Video Marketing",
                "Email Marketing",
                "Crowdfunding",
                "SEM",
                "Surveys",
                "Web Traffic",
                "Web Analytics",
                "Social Media Advertising",
                "Local SEO",
                "Influencer Marketing",
                "Mobile Marketing & Advertising",
                "Podcast Marketing",
                "Book & eBook Marketing",
                "Domain Research",
                "Music Promotion",
            ]
        },
        programmingTech: {
            index: 4,
            title: "Programming & Tech",
            subCategories: [
                "WordPress",
                "Website Builders & CMS",
                "Game Development",
                "Development for Streamers",
                "Web Programming",
                "E-Commerce Development",
                "Mobile Apps",
                "Support & IT",
                "Chatbots",
                "Online Coding Lessons",
                "Cybersecurity & Data Protection",
                "Data Analysis & Reports",
                "Convert Files",
                "Databases",
                "User Testing",
                "QA",
                "Other",
                "Desktop Applications",
            ]
        },
        business: {
            index: 5,
            title: "Business",
            subCategories: [
                "E-Commerce Management",
                "Virtual Assistant",
                "Data Entry",
                "Market Research",
                "Project Management",
                "Career Counseling",
                "HR Consulting",
                "Financial Consulting",
                "Business Consulting",
                "Presentations",
                "Flyer Distribution",
                "Lead Generation",
                "Business Plans",
                "Branding Services",
                "Legal Consulting",
            ]
        },
        funLifestyle: {
            index: 6,
            title: "Fun & Lifestyle",
            subCategories: [
                "Gaming",
                "Online Lessons",
                "Astrology & Readings",
                "Spiritual & Healing",
                "Fitness Lessons",
                "Personal Stylists",
                "Cooking Lessons",
                "Craft Lessons",
                "Arts & Crafts",
                "Relationship Advice",
                "Health, Nutrition & Fitness",
                "Family & Genealogy",
                "Greeting Cards & Videos",
                "Your Message On...",
                "Viral Videos",
                "Celebrity Impersonators",
                "Collectibles",
                "Traveling",
            ]
        },
        musicAudio: {
            index: 7,
            title: "Music & Audio",
            subCategories: [
                "Voice Over",
                "Producers & Composers",
                "Subtitles & Captions",
                "Singers & Vocalists",
                "Mixing & Mastering",
                "Session Musicians",
                "Podcast Editing",
                "Songwriters",
                "Audiobook Production",
                "Audio Ads Production",
                "Sound Design",
                "Jingles & Intros",
                "DJ Drops & Tags",
                "Dialogue Editing",
                "Music Transcription",
                "Vocal Tuning",
                "Online Music Lessons",
            ]
        }

    };
    /*
        Controls the dropdown of the navigation menu to
        feed the child the appropriate sub categories
     */
    const handleMouseEnter = (e) => {
        for (const category in categoriesJson) {
            if (categoriesJson[category].title === e.target.innerText) {
                setCategory(categoriesJson[category]);
            }
        }
    }
    return (
        <>
            <nav className={"h-10 border-t border-gray-300 border-b hidden lg:block"}>
                <div className={"h-full text-sm"}>
                    <ul className={"flex justify-around w-full px-4 h-full"}>
                        {categories.map((categoryTitle, index) => {
                            return (
                                <li className={"block group relative h-full "} key={index}>
                                    <Link href={`/categories/${categoryTitle.replace(" & ", "_")
                                        .replace(" ", "_").toLowerCase()}`}>
                                        <a className={"border-b-2 group-hover:border-pink-600 px-2  border-transparent h-full items-center inline-flex"}
                                           onMouseEnter={handleMouseEnter}>
                                            {categoryTitle}
                                        </a>
                                    </Link>
                                    {
                                        category && <DropDownNav data={category}/>
                                    }
                                </li>)
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default CategoryNav;