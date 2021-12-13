const Notifications = ()=> {
    return (
        <main className={"py-20 px-10"}>
            <h2 className={"text-gray-900 text-3xl font-semibold mb-3"}>Notifications</h2>
            <section>
                <div className={"shadow-md w-full border border-gray-300 py-3"}>
                    <h4 className={"text-xl px-2 py-8 font-semibold"}>All Notifications</h4>
                    <table className={"w-full table-fixed"}>
                        <thead>
                        <tr className={"text-lg text-gray-600  border-t border-b border-gray-300"}>
                            <th className={"py-4"}>Sender</th>
                            <th className={"border-l border-gray-300"}>Date</th>
                            <th className={"border-l border-gray-300"}>Message</th>
                            <th className={"border-l border-gray-300"}>Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                    <p className={"w-full flex justify-center text-xl items-center py-8"}>
                        You have no notifications at the moment.
                    </p>
                </div>

            </section>
        </main>
    )
}

export default Notifications;