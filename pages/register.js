const Register = ({user}) => {
    return <>
        <main className={"flex flex-col items-center py-20"}>
            <h3 className={"text-3xl font-semibold"}>
                Onboarding...
            </h3>
            {/*    Card for setting username*/}
            <div className={"w-screen-40 h-max rounded-md shadow-md border border-gray-200 py-6 px-4"}>
                <div className={"w-full flex justify-center"}>
                    {/*    Profile Picture */}

                    <img src={user.picture} className={"h-max w-max rounded-full"} alt={"Profile Picture"}/>
                </div>
            </div>
        </main>
    </>
}

export default Register;

export const getServerSideProps = ({req}) => {
    const user = JSON.parse(req.cookies.user)
    return {
        props: {
            user
        }
    }
}