
import { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { CONTRACT_ADDRESS, contractABI } from "../constants";
import { useNavigate } from "react-router-dom";

function MessagePage() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const postMessage = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, contractABI.abi, signer);

      const tx = await contract.postMessage(message);
      await tx.wait();
      alert("✅ Message sent successfully!");
      setMessage("");
    } catch (err) {
      console.error("Posting failed", err);
      alert("❌ Failed to post message.");
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
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post a Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        rows={4}
        className="p-2 border border-gray-300 rounded w-full max-w-lg"
      />
      <br />
      <button
        onClick={postMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
      >
        Send
      </button>
    </div>
  );
}

export default MessagePage;

