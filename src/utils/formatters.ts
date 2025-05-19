export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

export function formatString(input: string): string {
    return input.trim().replace(/\s+/g, ' ');
}

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString();
}

export function formatTime(date: Date): string {
    return date.toLocaleTimeString();
}