import Image from "next/image";
import Link from "next/link";

const HoverDropDown = ({title, subList}) => {
    return <div className={"relative group w-full block h-full"}>
        <div className={"group-hover:text-link flex h-full items-center cursor-pointer"}>
            <span>
                {title}
            </span>
            <Image src={"/images/svg/arrow_drop_down.svg"} width={"20"} height={"30"}/>
        </div>
        <div className={"absolute hidden w-max inset-x-0 bg-white border border-gray-300 py-2 group-hover:inline"}>
            <ul>
                {
                    subList.map((element) => {
                        return <li key={element.title + element.index}
                                   className={"hover:bg-gray-300 hover:text-gray-900 px-3 py-2"}>
                            <Link href={element.url}>
                                <a>
                                    {element.title}
                                </a>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}

export default HoverDropDown;