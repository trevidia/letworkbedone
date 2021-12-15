const LoadingSpinner = () => {
    return <div className={"h-10 w-10 overflow-hidden"}>
        <div className={"h-10 w-10 rounded-full border-4 border-blue-800 animate-spin"}>
            <div className={"h-12 w-10 bg-white transform-gpu translate-x-3 translate-y-1/2"}>
            </div>
        </div>
    </div>
}

export default LoadingSpinner