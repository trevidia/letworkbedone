import Link from "next/link";
import Image from "next/image";
import DynamicTable from "../../../Components/DynamicTable";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const SellingOrders = () => {
    return <main className={"p-12 "}>
        {/* Header for the page*/}
        <div>
            <h2 className={"text-3xl font-semibold"}>Manage Gigs Orders</h2>
        </div>

        <div className={"mt-8"}>
            <DynamicTable
                headings={["Gig's Title", "Gig's Price", "Views", "Orders"]}
                controllers={[
                    {
                        title: "Active",
                        url: "/active_gigs",
                        amount: 6,
                        columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                        gigs: [
                            {
                                title: "I Will Make a football trading company",
                                price: 30,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will Make the future bright",
                                price: 500,
                                views: "1k",
                                orders: 15,
                            },
                            {
                                title: "I Will Destroy a server for you",
                                price: 90,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will hack into facebook",
                                price: 7000,
                                views: 380,
                                orders: 4,
                            },
                        ]
                    },
                    {
                        title: "Paused Gigs",
                        url: "/paused_gigs",
                        amount: 9,
                        columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                        gigs: [
                            {
                                title: "I Will Make a football trading company",
                                price: 30,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will Make the future bright",
                                price: 500,
                                views: "1k",
                                orders: 15,
                            },
                            {
                                title: "I Will Destroy a server for you",
                                price: 90,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will hack into facebook",
                                price: 7000,
                                views: 380,
                                orders: 4,
                            },
                        ]
                    },
                    {
                        title: "Delivered",
                        url: "/delivered",
                        amount: 2,
                        columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                        gigs: [
                            {
                                title: "I Will Make a football trading company",
                                price: 30,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will Make the future bright",
                                price: 500,
                                views: "1k",
                                orders: 15,
                            },
                            {
                                title: "I Will Destroy a server for you",
                                price: 90,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will hack into facebook",
                                price: 7000,
                                views: 380,
                                orders: 4,
                            },
                        ]
                    },
                    {
                        title: "Completed",
                        url: "/requires_modification",
                        amount: 5,
                        columns: ["Modification GigTitle", "Modification Message"],
                        gigs: []
                    },
                    {
                        title: "Canceled",
                        url: "/drafted_gigs",
                        amount: 8,
                        columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                        gigs: [
                            {
                                title: "I Will Make a football trading company",
                                price: 30,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will Make the future bright",
                                price: 500,
                                views: "1k",
                                orders: 15,
                            },
                            {
                                title: "I Will Destroy a server for you",
                                price: 90,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will hack into facebook",
                                price: 7000,
                                views: 380,
                                orders: 4,
                            },
                        ]
                    },
                    {
                        title: "All",
                        url: "/declined",
                        amount: 6,
                        columns: ["Gig's Title", "Gig's Price", "Views", "Orders"],
                        gigs: [
                            {
                                title: "I Will Make a football trading company",
                                price: 30,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will Make the future bright",
                                price: 500,
                                views: "1k",
                                orders: 15,
                            },
                            {
                                title: "I Will Destroy a server for you",
                                price: 90,
                                views: 200,
                                orders: 2,
                            },
                            {
                                title: "I Will hack into facebook",
                                price: 7000,
                                views: 380,
                                orders: 4,
                            },
                        ]
                    },
                ]}
                action={true}
                actionDropDown={<LoadingSpinner/>}
            />
        </div>

    </main>
}

export default SellingOrders;