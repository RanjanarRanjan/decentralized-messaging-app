import contractABI from "../assets/GovMessageApp.json";
import deployedAddresses from "../assets/deployed_addresses.json";

// Replace with your actual deployed contract address from deployedAddresses file
const CONTRACT_ADDRESS = deployedAddresses["GovMessageAppModule#GovMessageApp"];
                                            
// Replace with the real admin address (usually the deployer's address)
const adminAddress = "0x6fb5C265d29d2bE28a9Ee23226d373b9361F011e"
//"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export { contractABI, CONTRACT_ADDRESS, adminAddress };
