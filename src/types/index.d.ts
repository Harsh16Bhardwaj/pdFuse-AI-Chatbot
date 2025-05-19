// filepath: chatbot-app/src/types/index.d.ts
interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
}

interface User {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
}

interface Session {
  id: string;
  userId: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

interface PDFUploadResponse {
  success: boolean;
  message?: string;
  data?: {
    url: string;
    size: number;
  };
}