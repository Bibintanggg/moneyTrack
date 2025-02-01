import { AreaChart } from "recharts";
import IncomeChart from "../components/IncomeChart"
import OutcomeChart from "../components/OutcomeChart"
import PemasukanIcon from "../assets/Icons/pemasukan.svg";
import PengeluaranIcon from "../assets/Icons/pengeluaran.svg"
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";

function Dashboard() {
    const info = [
        { title: "Pemasukan", Icon: PemasukanIcon },
    ];
    const Pengeluaran = [
        { title: "Pengeluaran", Icon: PengeluaranIcon },
    ]

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <section className="relative min-h-screen">
            <Sidebar />
            <div className="ml-56 p-8">
                <div className="flex justify-between text-left">
                    <h1 className="text-base font-semibold font-jakarta pt-2">
                        Dashboard
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

                <div className="flex gap-4 w-full pt-10">
                    <div className="flex-1 min-w-[300px]">
                        <CardInfo
                            info={info}
                            ChartComponent={IncomeChart}
                            onDetailClick={() => handleNavigate("/pemasukan")}
                        />
                    </div>
                    <div className="flex-1 min-w-[300px]">
                        <CardInfo
                            info={Pengeluaran}
                            ChartComponent={OutcomeChart}
                            onDetailClick={() => handleNavigate("/pengeluaran")}
                        />
                    </div>
                </div>

                </div>

        </section>
    );
}

export default Dashboard;