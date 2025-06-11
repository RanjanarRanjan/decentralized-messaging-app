

import { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { CONTRACT_ADDRESS, contractABI } from "../constants";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const [userAddress, setUserAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const approveUser = async () => {
    if (!userAddress || userAddress.length !== 42) {
      alert("❌ Please enter a valid Ethereum address.");
      return;
    }

    try {
      setIsLoading(true);
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, contractABI.abi, signer);

      const tx = await contract.approveUser(userAddress);
      await tx.wait();

      alert("✅ User approved successfully!");
      setUserAddress("");
    } catch (err) {
      console.error("❌ Approval failed", err);
      alert("❌ Approval failed. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-blue-100 via-white to-blue-200">
      <button
        className="mb-4 text-blue-600 underline"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter user wallet address"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full max-w-lg"
        />
        <button
          onClick={approveUser}
          disabled={isLoading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-fit"
        >
          {isLoading ? "Approving..." : "Approve User"}
        </button>
      </div>
    </div>
  );
}

export default AdminHome;

