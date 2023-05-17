import { ShortenRepository } from '../repositories/ShortenRepository';

export class ShortenService {
  private shortenRepository: ShortenRepository;

  constructor() {
    this.shortenRepository = new ShortenRepository();
  }

  public async shortenUrl(longUrl: string): Promise<string> {
    // Perform URL shortening logic using the shortenRepository
    // ...
    const shortUrl = await this.shortenRepository.createShortUrl(longUrl);
    return shortUrl;
  }
}