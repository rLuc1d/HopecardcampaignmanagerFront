import backgroundImage from "../../assets/Background.png";
import logoImage from "../../assets/Logo.png";
import { PlusCircle, Calendar, DollarSign, Users } from "lucide-react";
import { useState } from "react";
import { CampaignModal } from "../components/campaign-modal";

// Mock campaign data
const mockCampaigns = [
  {
    id: 1,
    name: "Children's Education Fund",
    beneficiary: "Local Schools",
    status: "Active",
    raised: "$12,500",
    goal: "$50,000",
    donors: 145,
    date: "Jan 15, 2026"
  },
  {
    id: 2,
    name: "Healthcare Support",
    beneficiary: "Community Hospital",
    status: "Pending",
    raised: "$8,200",
    goal: "$30,000",
    donors: 89,
    date: "Feb 1, 2026"
  },
  {
    id: 3,
    name: "Emergency Relief",
    beneficiary: "Disaster Victims",
    status: "Active",
    raised: "$25,800",
    goal: "$40,000",
    donors: 312,
    date: "Dec 20, 2025"
  },
  {
    id: 4,
    name: "Food Bank Initiative",
    beneficiary: "City Food Bank",
    status: "Completed",
    raised: "$20,000",
    goal: "$20,000",
    donors: 256,
    date: "Nov 10, 2025"
  },
  {
    id: 5,
    name: "Animal Shelter Support",
    beneficiary: "Local Animal Shelter",
    status: "Active",
    raised: "$15,300",
    goal: "$25,000",
    donors: 178,
    date: "Feb 10, 2026"
  },
  {
    id: 6,
    name: "Clean Water Project",
    beneficiary: "Rural Communities",
    status: "Active",
    raised: "$32,500",
    goal: "$60,000",
    donors: 421,
    date: "Jan 5, 2026"
  },
  {
    id: 7,
    name: "Youth Sports Program",
    beneficiary: "Community Center",
    status: "Pending",
    raised: "$5,800",
    goal: "$15,000",
    donors: 67,
    date: "Feb 20, 2026"
  },
  {
    id: 8,
    name: "Senior Care Initiative",
    beneficiary: "Retirement Home",
    status: "Active",
    raised: "$18,900",
    goal: "$35,000",
    donors: 203,
    date: "Dec 15, 2025"
  },
  {
    id: 9,
    name: "Arts & Culture Fund",
    beneficiary: "Local Theater",
    status: "Completed",
    raised: "$12,000",
    goal: "$12,000",
    donors: 134,
    date: "Oct 5, 2025"
  },
  {
    id: 10,
    name: "Environmental Conservation",
    beneficiary: "Nature Reserve",
    status: "Active",
    raised: "$28,400",
    goal: "$45,000",
    donors: 289,
    date: "Jan 28, 2026"
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header with Logo and Create Button */}
      <header className="bg-[#E8D5D5] shadow-md py-4 px-8 flex items-center justify-between">
        <img src={logoImage} alt="Logo" className="h-12" />
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#A63939] hover:bg-[#8E2F2F] text-white font-semibold rounded-lg py-3 px-6 flex items-center gap-2 transition-colors shadow-md"
        >
          <PlusCircle size={20} />
          <span>Create New Campaign</span>
        </button>
      </header>

      {/* Main Content - Dashboard */}
      <div className="flex-1 p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Dashboard Title */}
          <div className="mb-6 bg-[#E8D5D5] rounded-lg shadow-md p-6 flex-shrink-0">
            <h1 className="text-4xl font-bold text-[#4A1F1F] mb-2">My Campaigns</h1>
            <p className="text-[#6B3535]">Manage and track all your campaigns</p>
          </div>

          {/* Campaign Grid - Scrollable */}
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              {mockCampaigns.map((campaign) => (
                <div 
                  key={campaign.id}
                  className="bg-[#E8D5D5] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  {/* Campaign Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#4A1F1F] mb-1">
                        {campaign.name}
                      </h3>
                      <p className="text-[#6B3535] text-sm">
                        Beneficiary: {campaign.beneficiary}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === 'Active' ? 'bg-green-500 text-white' :
                      campaign.status === 'Pending' ? 'bg-yellow-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>

                  {/* Campaign Stats */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-[#4A1F1F]">
                      <DollarSign size={18} className="text-[#A63939]" />
                      <span className="font-semibold">{campaign.raised}</span>
                      <span className="text-sm text-[#6B3535]">raised of {campaign.goal}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-[#D5C2C2] rounded-full h-2">
                      <div 
                        className="bg-[#A63939] h-2 rounded-full transition-all"
                        style={{ 
                          width: `${(parseInt(campaign.raised.replace(/[$,]/g, '')) / parseInt(campaign.goal.replace(/[$,]/g, ''))) * 100}%` 
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-[#4A1F1F]">
                        <Users size={16} className="text-[#A63939]" />
                        <span>{campaign.donors} donors</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6B3535]">
                        <Calendar size={16} />
                        <span>{campaign.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-[#D5C2C2]">
                    <button className="flex-1 bg-[#A63939] hover:bg-[#8E2F2F] text-white font-semibold rounded-lg py-2 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-[#A6B9C8] hover:bg-[#8FA3B2] text-[#4A1F1F] font-semibold rounded-lg py-2 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CampaignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}