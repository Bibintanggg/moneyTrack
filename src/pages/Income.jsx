// Income.js
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AddView from "../components/Modal/AddView";
import EditView from "../components/Modal/EditView";
import DeleteView from "../components/Modal/DeleteView";
import DetailView from "../components/Modal/DetailView";

function Income() {
    const fields = ["sumber", "nominal", "tanggal"];
    const storageKey = "incomeActivities";

    const [incomeActivities, setIncomeActivities] = useState(() => {
        const storedData = localStorage.getItem(storageKey);
        return storedData ? JSON.parse(storedData) : [];
    });

    const [open, setOpen] = useState({ 
        add: false, 
        edit: false, 
        delete: false, 
        view: false 
    });
    
    const [currentActivity, setCurrentActivity] = useState(null);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(incomeActivities));
    }, [incomeActivities]);

    const getNextId = () => {
        return incomeActivities.length === 0 ? 1 : Math.max(...incomeActivities.map((a) => a.id)) + 1;
    };

    const handleAdd = (newActivity) => {
        const formattedDate = new Date(newActivity.tanggal); // Pastikan ini objek Date

        if (isNaN(formattedDate.getTime())) {
            alert("Format tanggal tidak valid!");
            return;
        }

        setIncomeActivities([...incomeActivities, {
            ...newActivity,
            tanggal: formattedDate.toISOString().split("T")[0], 
            id: getNextId()
        }]);

        setTimeout(() => {
            window.dispatchEvent(new Event("storage")); // Supaya chart update langsung
        }, 500);

        setOpen({ ...open, add: false });
    };




    const handleEdit = (updatedActivity) => {
        setIncomeActivities(
            incomeActivities.map((activity) => (activity.id === updatedActivity.id ? updatedActivity : activity))
        );
        window.dispatchEvent(new Event("storage"));
        setOpen({ ...open, edit: false });
    };

    const handleDelete = (id) => {
        setIncomeActivities(incomeActivities.filter((activity) => activity.id !== id));
        window.dispatchEvent(new Event("storage"));
        setOpen({ ...open, delete: false });
    };

    return (
        <section className="relative min-h-screen flex">
            <Sidebar />
            <div className="ml-56 p-8 w-full">
                <div className="flex justify-between text-left">
                    <h1 className="text-base font-semibold font-jakarta pt-2">Informasi</h1>
                    <div className="text-right">
                        <h2 className="text-base font-semibold font-jakarta">Hello, User!</h2>
                        <p className="-translate-y-2 font-jakarta">Role &gt; Admin</p>
                    </div>
                </div>
                <div className="w-full h-0.5 mx-auto opacity-25 bg-black"></div>
                <h1 className="text-2xl font-bold">Pemasukan</h1>
                <table className="min-w-full mt-4 bg-white rounded shadow">
                    <thead>
                        <tr className="text-left bg-gray-200">
                            <th className="p-4 rounded-tl-lg">Id</th>
                            {fields.map((field) => <th key={field} className="p-4">{field.charAt(0).toUpperCase() + field.slice(1)}</th>)}
                            <th className="p-4 rounded-tr-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incomeActivities.map((activity) => (
                            <tr key={activity.id} className="border-b">
                                <td className="p-4">{activity.id}</td>
                                {fields.map((field) => <td key={field} className="p-4">{activity[field]}</td>)}
                                <td className="flex p-4 space-x-2">
                                    <button className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={() => { setCurrentActivity(activity); setOpen({ ...open, edit: true }); }}>Edit</button>
                                    <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => { setCurrentActivity(activity); setOpen({ ...open, delete: true }); }}>Delete</button>
                                    <button className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600" onClick={() => { setCurrentActivity(activity); setOpen({ ...open, view: true }); }}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="fixed p-4 text-white bg-green-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-700" onClick={() => setOpen({ ...open, add: true })}>+</button>
                <AddView 
                open={open.add} 
                onClose={() => setOpen({ ...open, add: false })} 
                onSubmit={handleAdd} 
                fields={fields} />

                <EditView 
                open={open.edit} 
                onClose={() => setOpen({ ...open, edit: false })} 
                onSubmit={handleEdit} fields={fields} 
                activity={currentActivity} />

                <DeleteView 
                open={open.delete} onClose={() => setOpen({ ...open, delete: false })} 
                onSubmit={() => handleDelete(currentActivity.id)} 
                activity={currentActivity} />

                <DetailView 
                open={open.view} 
                onClose={() => setOpen({ ...open, view: false })} 
                fields={fields} 
                data={currentActivity} />
            </div>
        </section>
    );
}
export default Income;
