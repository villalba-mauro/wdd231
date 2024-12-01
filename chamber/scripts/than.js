function formatTimestamp(timestamp) {
    try {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
        }).format(date);
    } catch (error) {
        console.error('Invalid timestamp:', error);
        return 'Invalid date';
    }
}