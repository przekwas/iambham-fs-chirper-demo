const INSULT = 'idiot';

export const composeValidation = (content: string, userid?: string): string => {
    if (userid === '0' && content.length === 0) {
        return `Fill something out ${INSULT}.`;
    } else if (userid === '0') {
        return `Pick a user ${INSULT}.`;
    } else if (content.length > 241) {
        return `Trim your message down ${INSULT}.`;
    } else if (content.length === 0) {
        return `Write something ${INSULT}.`;
    } else {
        return null;
    }
}