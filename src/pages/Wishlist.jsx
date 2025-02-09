import Sidebar from "../components/Sidebar"

function Wishlist() {
    return (
        <section className="relative min-h-screen flex">
            <Sidebar/>

            <div className="p-8 ml-56 w-full">
                <div className="flex justify-between text-left">
                    <h1 className="text-base font-semibold font-jakarta pt-2">
                        Pengeluaran
                    </h1>
                    <div className="text-right">
                        <h2 className="text-base font-semibold font-jakarta">
                            Hello, User!
                        </h2>
                        <p className="-translate-y-2 font-jakarta">
                            Role &gt; Admin
                        </p>
                    </div>
                </div>
                <div className="w-full h-0.5 mx-auto opacity-25 bg-black"></div>
            </div>
        </section>
    )
}

export default Wishlist