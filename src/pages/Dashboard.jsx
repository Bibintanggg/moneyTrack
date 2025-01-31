import { AreaChart } from "recharts";
import IncomeChart from "../components/IncomeChart"
import OutcomeChart from "../components/OutcomeChart"
import PemasukanIcon from "../assets/Icons/pemasukan.svg";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";

function Dashboard() {
    const info = [
        { title: "Pemasukan", Icon: PemasukanIcon }
    ];

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


                <CardInfo
                info={info}
                ChartComponent={IncomeChart}
                onDetailClick={() => handleNavigate("/pemasukan")}/>

                <CardInfo
                info={info}
                ChartComponent={OutcomeChart}
                onDetailClick={() => handleNavigate("/pengeluaran")}/>
                </div>

        </section>
    );
}

export default Dashboard;