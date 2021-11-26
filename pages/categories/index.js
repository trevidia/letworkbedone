import Link from "next/link";
const Categories = ()=>{
    const categoriesJson = [
        {
            id: 0,
            title: "Graphics & Design",
            url: "/categories/graphics_design",
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
        }, {
            index: 1,
            title: "Writing & Translation",
            url: "/categories/writing_translation",
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
        {
            index: 2,
            title: "Video & Animation",
            url: "/categories/video_animation",
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
        {
            index: 3,
            title: "Digital Marketing",
            url: "/categories/digital_marketing",
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
        {
            index: 4,
            title: "Programming & Tech",
            url: "/categories/programming_tech",
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
        {
            index: 5,
            title: "Business",
            url: "/categories/business",
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
        {
            index: 6,
            title: "Fun & Lifestyle",
            url: "/categories/fun_lifestyle",
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
        {
            index: 7,
            title: "Music & Audio",
            url: "/categories/music_audio",
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
            ]}
        ];

    return (
        <>
            <main className={"flex-col-center pb-20 pt-8"}>
                <h1 className={"my-12 text-4xl font-bold text-gray-800"}>LetWorkBeDone Categories</h1>
                <section className={"flex flex-wrap justify-around w-5/6"}>
                    {
                        categoriesJson.map(
                            (element)=>{
                                return <div key={"Cat" + element.index} className={""}>
                                    <Link href={`/categories/${element.title.replace(" & ", "_")
                                        .replace(/ /g, "_").toLowerCase()}`}>
                                        <a>
                                            <h3 className={"text-gray-700 my-4 font-semibold text-2xl"}>{element.title}</h3>
                                        </a>
                                    </Link>
                                    <ul>
                                        {element.subCategories.map((subCat, index)=>{
                                            return <li key={"subCat" + index} className={"text-md text-gray-600"}>
                                                <Link href={`/categories/${element.title.replace(" & ", " ")
                                                    .replace(" ", "_").toLowerCase()}/${subCat.replace(" & ", " ")
                                                    .replace(/ /g, "_").toLowerCase()}`}>
                                                    <a>
                                                        {subCat}
                                                    </a>
                                                </Link>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            }
                        )
                    }
                </section>
            </main>
        </>
    )
}

export default Categories;