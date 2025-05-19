import pdf from 'pdf-parse';

export const parsePDF = async (fileBuffer: Buffer) => {
  try {
    const data = await pdf(fileBuffer);
    return {
      text: data.text,
      numpages: data.numpages,
      info: data.info,
    };
  } catch (error) {
    throw new Error('Error parsing PDF: ' + error.message);
  }
};