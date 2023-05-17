import shortid from 'shortid';
import { Pool } from 'pg';

export class ShortenRepository {
  private pool: Pool;

  constructor() {
    // Initialize the Postgres database connection
    this.pool = new Pool({
        connectionString: 'postgresql://url_shortener_h433_user:SCFFmiZdtD0wbMqbafyPAC94BbhooX7t@dpg-chie1bl269vf5qdpvb60-a.frankfurt-postgres.render.com/url_shortener_h433',
        ssl: {
          rejectUnauthorized: false, // Set to `true` if your SSL/TLS certificate is trusted
        },
      });
  }
  
  public async createShortUrl(long_url: string): Promise<string> {
    const shortId = shortid.generate(); // Generate a unique short ID
    const shortUrl = `https://api.meetrandy.co.za/${shortId}`;
    // Save the shortUrl and longUrl in the database using the pool connection
    try {
      await this.pool.query('INSERT INTO urls (short_id, long_url) VALUES ($1, $2) RETURNING *', [shortId, long_url]);
      // Handle the result as needed
    } catch (error) {
      console.error('Error executing query:', error);
      throw error; // Rethrow the error or handle it according to your application's error handling strategy
    }
    return shortUrl;
  }
}