import Link from "next/link";
import {useLayoutEffect, useRef} from "react";

const DropDownNav = ({data}) => {
    // The gets the dropdowns reference in the dom and then
    // applies a layout effect to reposition the dropdown before it is rendered
    const dropDown = useRef(null);
    useLayoutEffect(() => {
        const screenWidth = window.screen.width;
        const currentTargetWidth = dropDown.current.getBoundingClientRect().right;

        /*
             If the drop down is extending more than the size of the screen width then
             the dropdown would be resized to fit the screen
         */
        if (screenWidth < currentTargetWidth) {
            dropDown.current.style.left = `${screenWidth - currentTargetWidth - 50}px`
        }
    }, [data])
    return <ul ref={dropDown} className="absolute m-auto left-0 w-max px-4 py-7
    bg-white shadow-md border-t border-gray-300 z-20 group-hover:grid grid-rows-6 grid-flow-row grid-cols-3 auto-rows-auto gap-x-3 gap-y-1  h-max text-lg hidden right-auto">
        {
            data.subCategories.map((element, index) => {
                return <li key={index} className={"w-60"}>
                    <Link href={`/categories/${data.title.replace(" & ", "_")
                        .replaceAll(" ", "_").toLowerCase()}/${element.replace(" & ", "_")
                        .replaceAll(" ", "_").toLowerCase()}`}>
                        <a className={"hover:border-green-600 hover:text-gray-700"}>
                            {element}
                        </a>
                    </Link>
                </li>
            })

        }
    </ul>

}

export default DropDownNav;