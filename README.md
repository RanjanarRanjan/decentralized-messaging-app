# 📨 Decentralized Messaging dApp (GovMessageApp)

This is a decentralized application (dApp) built using Solidity, Hardhat, React.js (Vite), and MetaMask. It allows an **admin** to approve users who can post messages or alerts on the blockchain. **Everyone can view the messages** publicly.

---

## 🚀 Features

- 🔐 Admin-only user approval
- ✍️ Approved users can post messages
- 👁️ Public can view all messages
- ⛓️ All data stored on Ethereum Sepolia Testnet
- 🦊 MetaMask integration for wallet connection

---

## ⚙️ Requirements

- MetaMask extension
- Alchemy or Infura Sepolia RPC URL
- Sepolia ETH for testing (from [Faucet](https://sepoliafaucet.com/))

---

## 🔐 Setup `.env` in `hardhat/`

```env
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/your_project_id

---

🧾 Smart Contract (Solidity)
✅ Features:
approveUser(address) – admin approves users
postMessage(string) – approved users post messages
getAllMessages() – returns all messages

---

🛠️ Compile & Deploy (Hardhat)
From the hardhat/ directory:

npm install
npx hardhat compile
npx hardhat ignition deploy ignition/modules/messageapp.js --network sepolia

---

🌐 Frontend Setup
From the frontend/ directory:

npm install
npm run dev
---
