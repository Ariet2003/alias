import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const { Client } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_URL = "postgresql://neondb_owner:npg_pV8elDA0ToNh@ep-falling-haze-a4bnmmt8-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

async function exportWords() {
  const client = new Client({
    connectionString: DATABASE_URL,
  });

  try {
    console.log('Подключение к базе данных...');
    await client.connect();
    console.log('Подключено успешно!');

    console.log('Загрузка слов из таблицы Word...');
    const result = await client.query('SELECT text FROM words ORDER BY text');
    
    const words = result.rows.map(row => row.text);
    console.log(`Найдено слов: ${words.length}`);

    // Создаем временный файл
    const tempFilePath = path.join(__dirname, 'words-export-temp.json');
    const jsonContent = JSON.stringify(words, null, 2);
    
    fs.writeFileSync(tempFilePath, jsonContent, 'utf8');
    console.log(`Слова сохранены в файл: ${tempFilePath}`);
    console.log(`Всего слов: ${words.length}`);

  } catch (error) {
    console.error('Ошибка при экспорте слов:', error);
    process.exit(1);
  } finally {
    await client.end();
    console.log('Соединение с базой данных закрыто.');
  }
}

exportWords();

