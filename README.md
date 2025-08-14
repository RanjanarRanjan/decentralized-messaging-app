# 📨 Decentralized Messaging dApp (GovMessageApp)

This is a decentralized application (dApp) built using **Solidity**, **Hardhat**, **React.js (Vite)**, and **MetaMask**.  
It allows an **admin** to approve users who can post messages or alerts on the blockchain.  
Everyone can view the messages publicly.

---

## 🚀 Features
- 🔐 **Admin-only user approval**
- ✍️ **Approved users can post messages**
- 👁️ **Public can view all messages**
- ⛓️ **All data stored on Ethereum Sepolia Testnet**
- 🦊 **MetaMask integration** for wallet connection

---

## ⚙️ Requirements
- **MetaMask extension**  
- **Alchemy** or **Infura** Sepolia RPC URL  
- **Sepolia ETH** for testing (from a faucet)  

---

## 🔐 Environment Setup
Create a `.env` file inside the `hardhat/` directory:

```
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/your_project_id
```

---

## 🧾 Smart Contract (Solidity)

### ✅ Functions:
- `approveUser(address)` – Admin approves users  
- `postMessage(string)` – Approved users post messages  
- `getAllMessages()` – Returns all messages  

---

## 🛠️ Compile & Deploy (Hardhat)

From the `hardhat/` directory:

```bash
npm install
npx hardhat compile
npx hardhat ignition deploy ignition/modules/messageapp.js --network sepolia
```

---

## 🌐 Frontend Setup

From the `frontend/` directory:

```bash
npm install
npm run dev
```

---

## 📹 Demo Videos

### 🎬 Video 1 – Deploy & Frontend Setup  
Covers smart contract deployment to Sepolia and running the React frontend.  
▶️ [Watch Part 1 on YouTube](https://youtu.be/nN6Q_aoZVPc)

### 🎬 Video 2 – Admin Approval & Message Posting  
Shows the deployer (admin) approving a user, followed by that user posting a message via MetaMask, and then public viewing everything.  
▶️ [Watch Part 2 on YouTube](https://youtu.be/qbq6jVlmmaU)

---

## 📜 License
This project is for educational purposes.
