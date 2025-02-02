import React from 'react';
import { useModal } from "../../context/Modal";

function DeleteModal({ onConfirm}) {
    const { closeModal } = useModal();

    const handleConfirm = () => {
      onConfirm(); // Execute the delete action
      closeModal(); // Close the modal
    };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-semibold mb-4">Confirm Deletion</h1>
        <p className="mb-6">Are you sure you want to delete this CEC Partner?</p>
        <div className="flex justify-between">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Yes (Delete)
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-all"
          >
            No (Keep Partner)
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
