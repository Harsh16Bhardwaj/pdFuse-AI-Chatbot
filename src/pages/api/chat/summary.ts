import type { NextApiRequest, NextApiResponse } from 'next';
import { summarizeChat } from '../../../utils/summarizer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    try {
      const summary = await summarizeChat(sessionId);
      return res.status(200).json({ summary });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to summarize chat' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}