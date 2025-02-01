import React from 'react';

function Modal({
    open,
    onClose,
    title,
    children,
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>

                <div>{children}</div>
            </div>
        </div>
    );
}

export default Modal;