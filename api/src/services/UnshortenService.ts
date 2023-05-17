import { UnshortenRepository } from '../repositories/UnshortenRepository';

export class UnshortenService {
  private unshortenRepository: UnshortenRepository;

  constructor() {
    this.unshortenRepository = new UnshortenRepository();
  }

  public async unshortenUrl(shortUrl: string): Promise<string> {
    // Perform URL unshortening logic using the unshortenRepository
    // ...
    const longUrl = await this.unshortenRepository.getLongUrl(shortUrl);
    return longUrl;
  }
}