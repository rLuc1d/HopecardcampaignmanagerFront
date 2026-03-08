import { X } from "lucide-react";
import { useState } from "react";
import { CustomAlert } from "./custom-alert";

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CampaignModal({ isOpen, onClose }: CampaignModalProps) {
  const [showAlert, setShowAlert] = useState(false);
  
  if (!isOpen) return null;

  const handleCreateCampaign = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative bg-[#E8D5D5] rounded-3xl p-8 w-[500px] shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#4A1F1F] hover:text-[#A63939] transition-colors"
          >
            <X size={24} />
          </button>

          {/* Modal Header */}
          <h2 className="text-[#4A1F1F] text-3xl font-bold mb-6 text-center">
            Create New Campaign
          </h2>

          {/* Form */}
          <div className="space-y-5">
            {/* Campaign Name */}
            <div>
              <label className="block text-[#4A1F1F] font-semibold mb-2 text-sm">
                Campaign Name
              </label>
              <input
                type="text"
                placeholder="Enter campaign name"
                className="w-full bg-white text-[#4A1F1F] placeholder-gray-400 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-[#A63939] border border-[#A63939]/30"
              />
            </div>

            {/* Beneficiary Details */}
            <div>
              <label className="block text-[#4A1F1F] font-semibold mb-2 text-sm">
                Beneficiary Details
              </label>
              <textarea
                placeholder="Enter beneficiary details"
                rows={4}
                className="w-full bg-white text-[#4A1F1F] placeholder-gray-400 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-[#A63939] border border-[#A63939]/30 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-[#4A1F1F] font-semibold rounded-lg py-3 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCampaign}
                className="flex-1 bg-[#A63939] hover:bg-[#8E2F2F] text-white font-semibold rounded-lg py-3 transition-colors"
              >
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      </div>

      <CustomAlert 
        isOpen={showAlert}
        message="Wait for Admin Approval"
        onClose={handleAlertClose}
      />
    </>
  );
}