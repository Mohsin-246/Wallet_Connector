const app = require('./app');
const PORT = process.env.PORT || 5000;

console.log('Preparing to listen...');
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server failed to start:', err);
});
