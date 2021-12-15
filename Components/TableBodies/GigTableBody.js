import Image from "next/image";

const GigTableBody = ({data}) => {
    return data.map((gig, index) => {
        return <tr key={gig.title + index} className={`border-gray-300 ${index !== gig.length - 1 && "border-b"}`}>
            <td colSpan={4} className={"border-r border-gray-300 h-14"}>
                <p className={"px-2 "}>
                    {
                        gig.title
                    }
                </p>
            </td>
            <td className={"border-r border-gray-300"}>
                <p className={"text-blue-800 px-2"}>
                    ${gig.price}
                </p>
            </td>
            <td className={"border-r border-gray-300"}>
                <p className={" px-2"}>
                    {gig.views}
                </p>
            </td>
            <td className={"border-r border-gray-300"}>
                <p className={" px-2"}>
                    {gig.orders}
                </p>
            </td>
            <td>
                <div className={"flex  justify-center h-full items-center"}>
                    <div className={"bg-blue-800 w-max h-8 flex items-center rounded-md"}>
                        <Image src={"/images/svg/arrow_drop_down_white.svg"} width={30} height={40} alt={"arrow"}/>
                    </div>
                </div>
            </td>
        </tr>
    })
}

export default GigTableBody