import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import AddView from "../components/Modal/AddView";

function Wishlist() {
    const [wishlists, setWishlists] = useState(() => {
        const storedData = localStorage.getItem("wishlists");
        return storedData ? JSON.parse(storedData) : [];
    })

    const [open, setOpen] = useState({
        add: false
    })

    const [currentWishlists, setCurrentWishlists] = useState(null)

    useEffect(() => {
        localStorage.setItem("wisthlisths", JSON.stringify(wishlists));
    }, [wishlists])

    const getNextId = () => {
        if(wishlists.length === 0) return 1;
        const maxId = Math.max(...wishlists.map((wish) => wish.id));
        return maxId + 1;
    }

    const handleAdd = (newWish) => {
        const updatedWishlists = [
            ...wishlists,
            {...newWish, 
                id: getNextId(),
                savedAmount: 0, //ini saat belum menabung
                progress: 0, //ini progress awalnya
            },
        ];
        setWishlists(updatedWishlists);
        setOpen({...open, add:false});
    }

    const handleDelete = (id) => {
        setWishlists(wishlists.filter((wish) => wish.id !== id))
        setOpen({ ...open, delete: false })
    }

    const handleMoney = (id, amount) => {
        const updatedWishlists = wishlists.map((wish) => {
            if(wish.id === id) {
                const newSavedAmount = wish.saved + amount;
                const newProgress = Math.min((newSavedAmount / wish.targetPrice) * 100, 100);
                return { ...wish, savedAmount: newSavedAmount, progress: newProgress}
            }
            return wish;
        });
        setWishlists(updatedWishlists)
    };


    return (
        <section className="relative min-h-screen flex">
            <Sidebar />

            <div className="p-8 ml-56 w-full">
                <div className="flex justify-between text-left">
                    <h1 className="text-base font-semibold font-jakarta pt-2">
                        Wishlist
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

                <div className="grid grid-cols-3 gap-4 mt-4">
                    {wishlists.map((wish) => (
                        <div key={wish.id} className="p-6 bg-white shadow rounded-lg">
                            <div
                                className="radial-progress mx-auto text-xl font-bold"
                                style={{
                                    "--value": wish.progress,
                                    "--size": "8rem",
                                    "--thickness": "1rem",
                                }}
                                role="progressbar"
                            >
                                {Math.round(wish.progress)}%
                            </div>
                            <h2 className="text-center text-lg font-semibold mt-4">
                                {wish.title}
                            </h2>
                            <p className="text-center text-sm text-gray-500">
                                Ditabung: Rp {wish.savedAmount.toLocaleString()} / Rp {wish.targetPrice.toLocaleString()}
                            </p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-400 transition-all duration-200"
                                    onClick={() => {
                                        const amount = parseInt(prompt("Masukkan jumlah tabungan:", "10000"));
                                        if (!isNaN(amount) && amount > 0) {
                                            handleSaveMoney(wish.id, amount);
                                        }
                                    }}
                                >
                                    Tambah Tabungan
                                </button>
                                <button
                                    className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-600 transition-all duration-200"
                                    onClick={() => handleDelete(wish.id)}
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="fixed p-4 text-white bg-green-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-700"
                    onClick={() => setOpen({ ...open, add: true })}
                >
                    +
                </button>

                <AddView
                    open={open.add}
                    onClose={() => setOpen({ ...open, add: false })}
                    onSubmit={handleAdd}
                    fields={["title", "targetPrice"]}
                />
            </div>
        </section>
    )
}

export default Wishlist