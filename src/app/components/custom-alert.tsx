interface CustomAlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export function CustomAlert({ isOpen, message, onClose }: CustomAlertProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Alert Box */}
      <div className="relative bg-[#E8D5D5] rounded-2xl p-8 w-[400px] shadow-2xl">
        <p className="text-[#4A1F1F] text-lg mb-6 text-center">
          {message}
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#A6B9C8] hover:bg-[#8FA3B2] text-[#4A1F1F] font-semibold rounded-full py-2 px-8 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
