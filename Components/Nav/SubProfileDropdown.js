import {useState} from "react";
import Link from "next/link";

const SubProfileDropdown = ({title, subList}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    return (
        <>
            <div className={"flex cursor-pointer px-3"} onClick={handleClick}>
                <span>
                    {title}
                </span>
                <img src={"/images/svg/arrow_drop_down.svg"} alt={"icon"}/>
            </div>
            {
                isOpen &&
                <div className={"bg-gray-200 "}>
                    <ul>
                        {subList.map((element) => {
                            return <li key={element.title} className={"py-1 pl-7  hover:bg-gray-100"}>
                                <Link href={element.url}>
                                    <a>
                                        {element.title}
                                    </a>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            }
        </>
    );
}

export default SubProfileDropdown;