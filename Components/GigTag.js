import Image from "next/image";
import {actions} from "../lib/Constants";

const GigTag = ({value, close, index}) => {
    const [state, dispatch] = close
    return <div className={"bg-primary mr-2 my-1 text-white px-2 rounded-sm flex items-center"}>
      <span>
          {
              value
          }
      </span>
        <button
            onClick={() => {
                dispatch({
                    type: actions.DELETE_SELECTED_TAG,
                    payload: {value, index}
                })
            }}
            className={"ml-1 flex items-center"}>
            <Image
                src={"/images/svg/close_white.svg"}
                width={15}
                height={15}
                alt={"close"}
                className={" "}
            />
        </button>
    </div>
}

export default GigTag