"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnshortenRepository = void 0;
const pg_1 = require("pg");
class UnshortenRepository {
    constructor() {
        // Initialize the Postgres database connection
        this.pool = new pg_1.Pool({
            connectionString: 'postgresql://localhost/url_shortener'
        });
    }
    async getLongUrl(shortUrl) {
        // Retrieve the longUrl associated with the shortUrl from the database using the pool connection
        const result = await this.pool.query('SELECT * FROM urls WHERE short_id = $1', [shortUrl]);
        const longUrl = result.rows[0].long_url.toString(); // Retrieve the longUrl from the database
        return longUrl;
    }
}
exports.UnshortenRepository = UnshortenRepository;
//# sourceMappingURL=UnshortenRepository.js.map