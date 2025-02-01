import Swal from "sweetalert2"; 
import Modal from "./Modal";

function DeleteView({ open, onClose, activityName, onSubmit }) {
    const handleDelete = () => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: `Anda akan menghapus data ${activityName || "ini"}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                onSubmit();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data berhasil dihapus!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Hapus Data"
        >
            <div className="space-y-4">
                <p>
                    Apakah Anda yakin ingin menghapus data{" "}
                    <strong>{activityName || "ini"}</strong>?
                </p>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete} // Panggil handleDelete saat tombol Delete diklik
                        className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteView;