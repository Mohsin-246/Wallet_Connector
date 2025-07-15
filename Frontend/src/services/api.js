export const sendPaymentResult = async (payload) => {
  try {
    const res = await fetch('http://localhost:5000/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (err) {
    console.error('API Error:', err);
    return { error: 'Failed to send payment data' };
  }
};
