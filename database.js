const { Client } = require('pg');

const sslConfig = process.env.NODE_ENV === 'production' ? {
  ssl: {
    rejectUnauthorized: false
  }
} : {};

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ...sslConfig
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
