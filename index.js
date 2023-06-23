// Converts the first character of a string to uppercase
function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Converts the first character of each word in a string to uppercase.
function titleizeString(string) {
    return string.replace(/\b\w/g, match => match.toUpperCase());
}

// Converts a string to camel case by removing underscores and capitalizing the following character.
function camelizeString(string) {
    return string.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

// Converts a string to snake case by inserting underscores between words and making it lowercase.
function underscoreString(string) {
    return string.replace(/[A-Z]/g, match => '_' + match.toLowerCase()).replace(/^_/, '');
}

// Converts a string to kebab case by replacing characters that are not alphabets with dashes.
function dasherizeString(string) {
    return string.replace(/_/g, '-');
}

function kebabizeString(string) {
    return string
      .replace(/[^a-zA-Z0-9_]/g, '-')
      .replace(/_/g, '-')
      .toLowerCase();
}

//  Converts an underscored or dasherized string to a human-readable form.
function humanizeString(string) {
    string = string.replace(/[^a-z]+/g, ' ');
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

module.exports = {
    capitalizeString,
    titleizeString,
    camelizeString,
    underscoreString,
    dasherizeString,
    kebabizeString,
    humanizeString,
};