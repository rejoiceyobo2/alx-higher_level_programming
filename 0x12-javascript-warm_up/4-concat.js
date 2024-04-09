#!/usr/bin/env node

// Print two arguments passed to the script in the following format: "is"

const argument1 = process.argv[2];
const argument2 = process.argv[3];

console.log(`${argument1 || 'is' } ${argument2 || 'undefined'}`);
