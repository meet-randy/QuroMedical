import shortid from 'shortid';
import { Pool } from 'pg';

export class ShortenRepository {
  private pool: Pool;

  constructor() {
    // Initialize the Postgres database connection
    this.pool = new Pool({
        connectionString: 'postgresql://localhost/url_shortener'
      });
  }
  
  public async createShortUrl(long_url: string): Promise<string> {
    const shortId = shortid.generate(); // Generate a unique short ID
    const shortUrl = `http://localhost:3000/${shortId}`;
    // Save the shortUrl and longUrl in the database using the pool connection
    const result = await this.pool.query('INSERT INTO urls (short_id, long_url) VALUES ($1, $2) RETURNING *', [shortId, long_url]);
    return shortUrl;
  }
}