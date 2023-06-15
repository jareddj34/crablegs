export function isValidUsername(username) {
    const allowedCharacters = /^[a-zA-Z0-9\-_.]+$/;

    if (!allowedCharacters.test(username)) {
        return false;
    }

    if (username.length < 3 || username.length > 20) {
        return false;
    }

    return true;
}