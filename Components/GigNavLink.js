import Link from "next/link";
import Image from "next/image";

const GigNavLink = ({title, active, link, position}) => {
    return (
        <>
            {
                active ? <Link href={link}>
                    <a>
                        <div className={"flex items-center"}>
                            <span className={active ? "circle_active" : "circle_nonactive"}>{position}</span>
                            <span>{title}</span>
                            <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                                   alt={"icon nav"}/>
                        </div>
                    </a>
                </Link> : <div className={"flex items-center cursor-pointer"}>
                    <span className={active ? "circle_active" : "circle_nonactive"}>{position}</span>
                    <span>{title}</span>
                    <Image src={"/images/svg/navigate_next.svg"} width={20} height={20}
                           alt={"icon nav"}/>
                </div>
            }
        </>
    )
}

export default GigNavLink