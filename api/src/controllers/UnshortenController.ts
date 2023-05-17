import { Request, Response } from 'express';
import { UnshortenService } from '../services/UnshortenService';

export class UnshortenController {
  private unshortenService: UnshortenService;

  constructor() {
    this.unshortenService = new UnshortenService();
  }

  public async unshortenUrl(req: Request, res: Response) {
    try {
      const { shortUrl } = req.params;
      const longUrl = await this.unshortenService.unshortenUrl(shortUrl);
      res.json({ longUrl });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}