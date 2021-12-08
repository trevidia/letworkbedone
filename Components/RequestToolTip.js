import style from "../styles/card.module.css";
import Image from "next/image";

const RequestToolTip = ({description, example, title}) => {
    return <div className={"flex justify-end absolute left-2/3"}>
        <div className={"group-hover:flex hidden pl-10 w-96 " + style.card}>
            <div
                className={"text-sm w-3/4 bg-blue-200 py-3 px-4 "}>
                <div className={"flex"}>
                    <div>
                        <Image src={"/images/comp/light-bulb.png"} width={32} height={32}
                               quality={100}/>
                    </div>
                    <h5 className={"font-semibold ml-2 text-xl"}>{title}</h5>
                </div>
                <div>
                    {description}
                </div>
                {
                    example && <div className={"mt-3 px-4 py-2 border border-gray-400 rounded-md"}>
                    <span className={"text-blue-500"}>
                        For example:
                    </span>{example}
                    </div>
                }

            </div>
        </div>
    </div>
}

export default RequestToolTip