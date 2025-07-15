exports.handlePayment = (req, res) => {
  const { walletAddress, amount, status, timestamp } = req.body;

  // Simulate saving or logging to DB
  console.log('Payment Received:', req.body);

  res.status(200).json({
    message: 'Payment simulation successful',
    received: { walletAddress, amount, status, timestamp }
  });
};
