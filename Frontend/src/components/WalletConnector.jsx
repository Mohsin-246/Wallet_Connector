import { useState } from 'react';
import { ethers } from 'ethers';
import { sendPaymentResult } from '../services/api';

const WalletConnector = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [result, setResult] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Install MetaMask first');
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
  };

  const simulatePayment = async () => {
    const payload = {
      walletAddress,
      amount: '0.05 ETH',
      status: 'success',
      timestamp: new Date().toISOString(),
    };
    const response = await sendPaymentResult(payload);
    setResult(response);
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {walletAddress && <p>Connected: {walletAddress}</p>}
      <button onClick={simulatePayment} disabled={!walletAddress}>
        Simulate Payment
      </button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default WalletConnector;
