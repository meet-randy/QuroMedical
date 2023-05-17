"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenRepository = void 0;
const shortid_1 = __importDefault(require("shortid"));
const pg_1 = require("pg");
class ShortenRepository {
    constructor() {
        // Initialize the Postgres database connection
        this.pool = new pg_1.Pool({
            connectionString: 'postgresql://localhost/url_shortener'
        });
    }
    async createShortUrl(long_url) {
        const shortId = shortid_1.default.generate(); // Generate a unique short ID
        const shortUrl = `http://localhost:3000/${shortId}`;
        // Save the shortUrl and longUrl in the database using the pool connection
        const result = await this.pool.query('INSERT INTO urls (short_id, long_url) VALUES ($1, $2) RETURNING *', [shortId, long_url]);
        return shortUrl;
    }
}
exports.ShortenRepository = ShortenRepository;
//# sourceMappingURL=ShortenRepository.js.map