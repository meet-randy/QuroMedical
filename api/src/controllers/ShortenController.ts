import { Request, Response } from 'express';
import { ShortenService } from '../services/ShortenService';
import { UnshortenService } from '../services/UnshortenService';

export class ShortenController {
  private shortenService: ShortenService;
  private unshortenService: UnshortenService;

  constructor() {
    this.shortenService = new ShortenService();
    this.unshortenService = new UnshortenService();
  }

  public async shortenUrl(req: Request, res: Response) {
    try {
      const { long_url } = req.body;
      if(this.validateURL(long_url)){
        const shortUrl = await this.shortenService.shortenUrl(long_url);
        res.json({ shortUrl });
      }else{
        res.status(400).json({ error: 'Invalid URL' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async redirect(req: Request, res: Response) {
    try {
      const { redirectUrl } = req.params;
      const long_url = await this.unshortenService.unshortenUrl(redirectUrl);
      if(long_url){
        res.redirect(long_url);
      }
      else{
        res.json("Cannot redirect please try again later.")
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async recent(req: Request, res: Response) {
    try {
      
      const recent = await this.shortenService.recent();
    
      res.json(recent)
      
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public validateURL(input: string): boolean {
    try {
      new URL(input);
      return true;
    } catch (error) {
      return false;
    }
  }
}