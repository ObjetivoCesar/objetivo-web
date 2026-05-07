import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function verifyDB() {
  const testId = 'direct-test-123';
  const testData = JSON.stringify({ title: 'Direct DB Test' });
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Testing direct save to MySQL...');
    await connection.execute(`
      INSERT INTO cotizaciones (id, data) 
      VALUES (?, ?) 
      ON DUPLICATE KEY UPDATE 
      data = VALUES(data), 
      updated_at = CURRENT_TIMESTAMP
    `, [testId, testData]);
    console.log('Save successful.');
    
    console.log('Testing direct retrieval from MySQL...');
    const [rows]: any = await connection.execute('SELECT data FROM cotizaciones WHERE id = ? LIMIT 1', [testId]);
    console.log('Retrieved data:', rows[0]?.data);
    
    if (rows[0] && rows[0].data) {
      console.log('✅ DATABASE VERIFICATION PASSED');
    } else {
      console.log('❌ DATABASE VERIFICATION FAILED');
    }
    await connection.end();
  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    process.exit(0);
  }
}

verifyDB();
