import { ChatMessage } from '../types'; // Adjust the import based on your types definition

export function summarizeChat(messages: ChatMessage[]): string {
    if (messages.length === 0) {
        return "No messages to summarize.";
    }

    const summary = messages.map(message => {
        return `${message.sender}: ${message.content}`;
    }).join('\n');

    return `Summary of chat:\n${summary}`;
}