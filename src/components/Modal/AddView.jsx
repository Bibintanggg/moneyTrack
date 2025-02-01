import { useEffect, useState } from "react";
import Modal from "./Modal";
import Swal from "sweetalert2"; 

function AddView({ open, onClose, onSubmit, fields, activity }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
            acc[field] = "";
            return acc;
        }, {})
    );

    useEffect(() => {
        if (activity) {
            setFormData(activity); 
        }
    }, [activity]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = fields.every((field) => formData[field]);
        if (isValid) {
            onSubmit(formData);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil menambahkan data",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Pastikan semua input terisi dengan benar!",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Tambah Data"
        >
            <form className="space-y-4" onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <input
                        key={index}
                        type="text"
                        name={field}
                        placeholder={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                ))}
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default AddView;