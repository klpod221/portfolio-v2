import { BsX } from "react-icons/bs";

const MyModal = ({ children, show, onClose }) => {
  return (
    <div
      className={`fixed w-full h-full z-50 transition-all duration-300 bg-black/50 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        className="fixed w-full h-full bg-black/50 transition-all duration-300"
      />
      <div className="relative w-fit h-fit p-10 max-w-[90vw] max-h-[80vh] flex bg-primary top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <button onClick={onClose}>
            <BsX className="text-white text-[24px]" />
          </button>
        </div>
        <div className="container mx-auto overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MyModal;
