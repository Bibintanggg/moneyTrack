/* eslint-disable react/prop-types */
import Modal from "./Modal";

function DetailView({ open, onClose, fields, data }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Detail Data"
            showViewIcon={true}
        >
            <div className="space-y-4">
                {fields.map((field, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="font-bold">
                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </span>
                        {field === "foto" ? (
                            <img
                                src={data ? data[field] : ""}
                                alt="Foto Kegiatan"
                                className="object-cover w-16 h-16 rounded"
                            />
                        ) : (
                            <span>{data ? data[field] : "-"}</span>
                        )}
                    </div>
                ))}
            </div>
        </Modal>
    );
}

export default DetailView;