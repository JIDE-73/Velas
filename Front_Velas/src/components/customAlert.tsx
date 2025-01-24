const CustomAlert = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col items-center justify-center">
      <h1 className="text-center">{message}</h1>
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 bg-orange-400 text-center text-white rounded-md hover:bg-yellow-500"
      >
        ¡Gracias!
      </button>
    </div>
  );
};

export default CustomAlert;
