import app from './app.js'
import { createConnection, port } from './database.js';


createConnection();
app.listen(port);
console.log(`Server running on http://localhost:${port}`);