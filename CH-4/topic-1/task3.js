// https://small-ear-9a7.notion.site/Comparison-and-Logical-Condition-e9326217f5464a72b3ab205b4ceaa1ef

const firstName = "Tron";
const lastName = "";

const test = !lastName
    ? `Hello, ${firstName}!`
    : `${firstName ? `Hello, ${firstName} ` : 'Hello, '}${lastName}!`;

console.log(test);
