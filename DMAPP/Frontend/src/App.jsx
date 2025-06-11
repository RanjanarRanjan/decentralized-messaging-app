
import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { useNavigate } from "react-router-dom";
import { CONTRACT_ADDRESS, contractABI, adminAddress } from "./constants/index.js";
import { FaUser, FaClock } from "react-icons/fa";


function App() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const contract = new Contract(CONTRACT_ADDRESS, contractABI.abi, provider);
      const msgs = await contract.getAllMessages();
      setMessages(msgs);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  const connectMetaMask = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();

      if (userAddress.toLowerCase() === adminAddress.toLowerCase()) {
        navigate("/admin");
        return;
      }

      const contract = new Contract(CONTRACT_ADDRESS, contractABI.abi, provider);
      const approved = await contract.isUserApproved(userAddress);

      if (approved) {
        navigate("/message");
      } else {
        alert("Not an approved user");
        navigate("/");
      }
    } catch (err) {
      console.error("Connection failed", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-blue-100 via-white to-blue-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900">📢 GovMessage App</h2>
        <button
          onClick={connectMetaMask}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg shadow"
        >
          Login with MetaMask
        </button>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">📬 All Public Messages</h3>

        {messages.length === 0 ? (
          <p className="text-gray-600 text-center">No messages found.</p>
        ) : (
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg shadow flex flex-col"
              >
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-blue-600" />
                    {msg.sender}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-blue-600" />
                    {new Date(Number(msg.timestamp) * 1000).toLocaleString()}
                  </span>
                </div>
                <p className="text-blue-900 text-lg font-semibold flex items-center gap-2">
                  📢 <span>{msg.content}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
