import LoadingSpinner from "./LoadingSpinner"

const LoadingOverlay = () => {
    return <div className={'absolute w-full z-20 h-full flex justify-center items-center'}>
        <div className={'h-full bg-white w-full bg-opacity-50 flex justify-center items-center flex-col rounded-md'}>
            <div className={'transform-gpu scale-150 mb-8 animate-pulse'}>
                <LoadingSpinner/>
            </div>
            <h3 className={'text-3xl text-blue-800'}>Loading</h3>
        </div>
    </div>
}

export default LoadingOverlay