const ProgressBar = ({percent}) => {
    return <div className={" flex items-center "}>
        <div className={"h-2.5 overflow-hidden rounded-full w-14 " + (percent >= 50 ? "bg-blue-200" : "bg-red-200")}>
            <div className={"h-full rounded-l-full " + (percent >= 50 ? "bg-blue-500" : "bg-red-500")}
                 style={{width: `${percent}%`}}>
            </div>
        </div>
        <span className={"ml-4 w-10 text-right " + (percent >= 50 ? "text-gray-700" : "text-red-500")}>
          {percent}%
      </span>
    </div>
}

export default ProgressBar