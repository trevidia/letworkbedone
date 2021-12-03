const Dashboard = () => {
    return (
        <>
            <button onClick={() => {

            }}>
                Dashboard
            </button>
        </>
    )
}

export default Dashboard;

export const getServerSideProps = async () => {

    return {
        props: {
            mate: "fish"
        },
    }
}