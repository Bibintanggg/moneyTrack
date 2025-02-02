import { useNavigate } from "react-router-dom"
import DashoardIcon from "../assets/Icons/dashboard.svg"
import InfoIcon from "../assets/Icons/informasi.svg"
import ListIcon from "../assets/Icons/list.svg"
import PemasukanIcon from "../assets/Icons/pemasukan.svg"
import PengeluaranIcon from "../assets/Icons/pengeluaran.svg"

function Sidebar() {
    const menuItems = [
        {title: "Dashboard", icon: DashoardIcon, path: "/"},
        { title: "Pemasukan", icon: PemasukanIcon, path: "/pemasukan"},
        { title: "Pengeluaran", icon: PengeluaranIcon, path: "/pengeluaran"},
        { title: "Informasi", icon: InfoIcon, path: "/informasi" },
        { title: "Wishlist", icon: ListIcon, path: "/wishlist" },
    ]

    const navigate = useNavigate();
    return (
        <aside>
            <div className="w-56 h-screen bg-black fixed">
                <div className="">
                    <section className="flex flex-col items-center p-10">
                        <div className="w-20 h-20 bg-white"></div>
                        <div className="">
                            <h1 className="text-white text-lg font-bold mt-5 font-jakarta">
                                Money Tracker
                            </h1>
                        </div>

                        <div className="w-32 h-1 bg-white mt-8 rounded-full"></div>

                        <section className="mt-10">
                            {menuItems.map((item, index) => (
                                <button 
                                key={index}
                                className="flex items-center gap-5"
                                onClick={() => navigate(item.path)}
                                >
                                    <img src={item.icon} 
                                    className="w-9 h-12"/>
                                    <p className="text-white font-jakarta text-base">{item.title}</p>
                                </button>
                            ))}
                        </section>
                    </section>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar;