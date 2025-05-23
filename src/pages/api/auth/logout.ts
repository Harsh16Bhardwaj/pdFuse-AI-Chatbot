import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Logged out successfully' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}