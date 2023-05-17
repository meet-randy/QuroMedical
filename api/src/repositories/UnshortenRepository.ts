import { Pool } from 'pg';

export class UnshortenRepository {
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

  public async getLongUrl(shortUrl: string): Promise<string> {
    var longUrl: string = "";
    // Retrieve the longUrl associated with the shortUrl from the database using the pool connection
    try {
      const result = await this.pool.query('SELECT * FROM urls WHERE short_id = $1', [shortUrl]);
      longUrl  = result.rows[0].long_url.toString(); // Retrieve the longUrl from the database
      // Handle the result as needed
    } catch (error) {
      console.error('Error executing query:', error);
      throw error; // Rethrow the error or handle it according to your application's error handling strategy
    }
   
    return longUrl;
  }
}