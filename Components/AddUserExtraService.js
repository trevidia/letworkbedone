const AddUserExtraService = () => {
    const gigExtraInput = () => {
        return <div className={" h-max px-4 flex items-center  py-5 "}>
            <div className={"flex w-full items-center"}>
                <span className={"w-1/6  text-gray-700"}>
                    Title
                </span>
                <div className={"w-3/4 ml-4"}>
                    <input type={"text"} className={"input h-8"}/>
                </div>
            </div>
            <div className={"flex w-full items-center"}>
                <span className={"w-1/6  text-gray-700"}>
                    Price
                </span>
                <div className={"w-3/4 ml-4"}>
                    <input type={"number"} step={5} className={"input h-8"}/>
                </div>
            </div>
        </div>
    }
    return <>
        <div className={" h-max px-4 flex items-center py-5 border-b border-gray-300"}>
            <input type={"checkbox"}/>
            <span className={" ml-4"}>Add Extra Service</span>
        </div>
        {gigExtraInput()}
    </>
}

export default AddUserExtraService;