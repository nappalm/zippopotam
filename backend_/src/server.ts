import app from './app';

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server is running on port ${BASE_URL}`);
});
