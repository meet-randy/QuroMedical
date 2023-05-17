import { Pool } from 'pg';

export class UnshortenRepository {
  private pool: Pool;

  constructor() {
    // Initialize the Postgres database connection
    this.pool = new Pool({
        connectionString: 'postgresql://localhost/url_shortener'
      });
  }

  public async getLongUrl(shortUrl: string): Promise<string> {
    // Retrieve the longUrl associated with the shortUrl from the database using the pool connection
    const result = await this.pool.query('SELECT * FROM urls WHERE short_id = $1', [shortUrl]);
    const longUrl  = result.rows[0].long_url.toString(); // Retrieve the longUrl from the database
    return longUrl;
  }
}