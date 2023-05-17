"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnshortenService = void 0;
const UnshortenRepository_1 = require("../repositories/UnshortenRepository");
class UnshortenService {
    constructor() {
        this.unshortenRepository = new UnshortenRepository_1.UnshortenRepository();
    }
    async unshortenUrl(shortUrl) {
        // Perform URL unshortening logic using the unshortenRepository
        // ...
        const longUrl = await this.unshortenRepository.getLongUrl(shortUrl);
        return longUrl;
    }
}
exports.UnshortenService = UnshortenService;
//# sourceMappingURL=UnshortenService.js.map