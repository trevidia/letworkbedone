import {useReducer, useRef, useState} from "react";
import {useFetchCategories} from "../../lib/CustomHooks";
import GigTag from "../GigTag";
import {actions} from "../../lib/Constants";

const initialState = {tags: []}

function reducer(state, action) {
    switch (action.type) {
        case actions.CREATE_TAG:
            return {tags: [...state.tags, action.payload]}
        case actions.DELETE_LAST_TAG:
            return {tags: state.tags.filter(element => element !== state.tags[state.tags.length - 1])}
        case actions.DELETE_SELECTED_TAG:
            return {tags: state.tags.filter((element, index) => index !== action.payload.index)}
        default:
            throw new Error("Not a valid action");
    }
}

const Overview = () => {
    const focusRef = useRef()
    const sizeRef = useRef()
    const [categories, setCategories] = useFetchCategories();
    const [subCategory, setSubCategory] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [currentValue, setCurrentValue] = useState('');
    const [title, setTitle] = useState('');

    const handleTags = (e) => {
        if (state.tags.length !== 5) {
            e.target.style.width = (sizeRef.current.clientWidth) + "px"
            setCurrentValue(e.target.value)
        }
    }

    const onEnter = (e) => {
        // if enter key is pressed
        if (e.keyCode === 13 && state.tags.length !== 5) {
            dispatch({
                type: actions.CREATE_TAG,
                payload: currentValue,
            }) // change to dispatch
            setCurrentValue('');
            if (e.keyCode === 13 && state.tags.length >= 4) {
                focusRef.current.style.width = "2px";
                focusRef.current.style.visibility = "hidden";
            }
            // This is when the backspace is pressed. keycode 8
        } else if (e.keyCode === 8 && state.tags.length !== 0 && currentValue.length === 0) {
            dispatch({
                type: actions.DELETE_LAST_TAG
            })
        }
    }
    return (
        <>
            <main className={"py-20 bg-gray-100 px-32"}>
                <section>
                    <div className={"w-screen-60 bg-white h-max border border-gray-300 rounded-md py-8 px-14"}>
                        <div className={"flex"}>
                          <span className={"text-gray-700  w-1/6  font-serif"}>
                              Gig Title
                          </span>
                            <div className={"w-3/4 ml-8"}>
                          <textarea
                              value={"I Will " + title}
                              onChange={e => {
                                  if (!(e.target.value.length <= 6) && (title.length < 81)) {
                                      setTitle(e.target.value.replace("I Will ", ''))
                                  }
                              }}
                              maxLength={87}
                              className={"input h-24 resize-none py-1"}
                          />
                                <span className={"float-right text-gray-400 text-sm"}>
                                  {title.length} / 80 max
                              </span>
                            </div>
                        </div>
                        <div className={"flex mt-3"}>
                          <span className={"text-gray-700 w-1/6 font-serif"}>
                              CATEGORY
                          </span>
                            <div className={"w-3/4 ml-8 flex"}>
                                <select
                                    name={"categories"}
                                    defaultValue={"default"}
                                    onChange={(e) => {
                                        setSubCategory(categories.find(element => element.title === e.target.value).subCategories)
                                    }}
                                    className={"h-10 text-gray-700 mr-4 bg-white border border-gray-300 text-sm px-2 focus:ring ring-blue-200 focus:border-blue-400 focus:outline-none"}
                                >
                                    <option hidden disabled value={"default"}> Select A Category</option>
                                    {
                                        categories.map((element) => {
                                            return <option
                                                value={element.title}
                                                key={element.title + "gig_title"}
                                            >{element.title}</option>
                                        })
                                    }
                                </select>
                                <select
                                    name={"subCategories"}
                                    defaultValue={"default"}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                    }}
                                    className={"h-10 text-gray-700 ml-4 w-full bg-white border border-gray-300 text-sm px-2 focus:ring ring-blue-200 focus:border-blue-400 focus:outline-none"}
                                >
                                    <option hidden disabled value={"default"}> Select A Category</option>
                                    {
                                        subCategory.length !== 0 &&
                                        subCategory.map(
                                            (e, index) => {
                                                return <option value={e.title}
                                                               key={e.title + index}>{e.title}</option>
                                            }
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={"flex  mt-3"}>
                              <span className={"text-gray-700 w-1/6 font-serif"}>
                              TAGS
                              </span>
                            <div className={"w-3/4 ml-8"}>
                                <div
                                    onClick={() => {
                                        if (state.tags.length < 5) {
                                            focusRef.current.style.visibility = "visible";
                                        }
                                        focusRef.current.focus()
                                    }}
                                    className={" border cursor-text border-gray-300 w-full py-1 flex flex-wrap items-center px-3"}>
                                    {
                                        state.tags.map((element, index) => <GigTag close={[state, dispatch]}
                                                                                   index={index} key={element + index}
                                                                                   value={element}/>)
                                    }
                                    <div className={"relative"}>
                                        <input
                                            type={"text"}
                                            ref={focusRef}
                                            onChange={handleTags}
                                            value={currentValue}
                                            className={"focus:outline-none h-10 w-2"}
                                            onKeyDownCapture={onEnter}
                                        />
                                    </div>

                                    <div className={"invisible absolute w-max px-2 top-10"} ref={sizeRef}>
                                        {currentValue}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"text-gray-400 text-xs px-3 flex justify-end mt-2"}>
                            5 tags maximum. Use letters and numbers only.
                        </div>
                    </div>

                    {/*Cancel Gig creation and save and continue*/}
                    <div className={"flex justify-between w-screen-60 mt-8"}>
                        <button className={"h-10 w-32 bg-white rounded-md hover:bg-gray-200 shadow-md"}>
                            Cancel
                        </button>
                        <button
                            className={"h-10 w-max text-white bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-500 ring-red-200 ring-1 rounded-md "}>
                            Save And Continue
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Overview;


