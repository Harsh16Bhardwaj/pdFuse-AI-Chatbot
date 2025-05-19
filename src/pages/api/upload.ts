import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import pdfParser from '../../../utils/pdfParser';

export default async function uploadHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    try {
      // Parse the PDF file
      const parsedData = await pdfParser(file);

      // Save the parsed data to Supabase or perform any other logic
      const { data, error } = await supabase
        .from('uploads')
        .insert([{ content: parsedData }]);

      if (error) {
        throw error;
      }

      return res.status(200).json({ message: 'File uploaded successfully', data });
    } catch (error) {
      return res.status(500).json({ error: 'Error uploading file', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}