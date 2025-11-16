/**
 * Examples of what the new ESLint plugins detect and fix
 * This file intentionally contains "bad" code to demonstrate the linting rules
 */

// ❌ Unicorn: prefer-node-protocol
import fs from "fs";
// ✅ Should be: import fs from "node:fs";

// ❌ Unicorn: no-array-for-each
const items = [1, 2, 3];
items.forEach((item) => {
  console.log(item);
});
// ✅ Should use: for (const item of items) { console.log(item); }

// ❌ Unicorn: prefer-array-find
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const firstUser = users.filter((user) => user.id === 1)[0];
// ✅ Should be: const firstUser = users.find(user => user.id === 1);

// ❌ Unicorn: prefer-at
const lastItem = items[items.length - 1];
// ✅ Should be: const lastItem = items.at(-1);

// ❌ SonarJS: no-duplicate-string
const config = {
  apiUrl: "https://api.example.com",
  backupUrl: "https://api.example.com",
  fallbackUrl: "https://api.example.com",
};
// ✅ Should extract to a constant: const API_URL = "https://api.example.com";

// ❌ SonarJS: no-identical-functions
const addOne = (x: number): number => {
  return x + 1;
};
const incrementByOne = (x: number): number => {
  return x + 1;
};
// ✅ Should merge identical functions

// ❌ SonarJS: no-redundant-boolean
const isValid = (value: boolean): boolean => {
  if (value === true) {
    return true;
  }
  return false;
};
// ✅ Should be: return value;

// ❌ SonarJS: cognitive-complexity (too complex)
const complexFunction = (a: number, b: number, c: number): number => {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        for (let i = 0; i < a; i++) {
          if (i % 2 === 0) {
            if (b % 2 === 0) {
              return a + b + c;
            }
          }
        }
      }
    }
  }
  return 0;
};
// ✅ Should be refactored into smaller functions

// ❌ Security: detect-unsafe-regex
const emailRegex = /^([a-zA-Z0-9]+)*@example\.com$/;
// ✅ This regex is vulnerable to ReDoS attacks

// ❌ Security: detect-eval-with-expression
const userInput = "1 + 1";
const result = eval(userInput);
// ✅ Never use eval() - security risk

// ❌ Promise: catch-or-return
const fetchData = async (): Promise<void> => {
  fetch("https://api.example.com/data").then((response) => {
    console.log(response);
  });
  // ✅ Missing .catch() or return statement
};

// ❌ Promise: no-nesting
const nestedPromises = (): Promise<void> => {
  return fetch("https://api.example.com/users")
    .then((users) => {
      return fetch("https://api.example.com/posts").then((posts) => {
        console.log(users, posts);
      });
    })
    .catch(console.error);
};
// ✅ Should use Promise.all() or async/await

// ❌ Promise: always-return
const missingReturn = (): Promise<void> => {
  return Promise.resolve().then(() => {
    console.log("Done");
    // Missing return statement
  });
};
// ✅ Should return a value or explicitly return undefined

// ✅ GOOD EXAMPLES:

// ✅ Unicorn: prefer-node-protocol
import path from "node:path";

// ✅ Unicorn: prefer-array-find
const foundUser = users.find((user) => user.id === 1);

// ✅ Unicorn: prefer-at
const last = items.at(-1);

// ✅ SonarJS: extract constants
const API_URL = "https://api.example.com";
const goodConfig = {
  apiUrl: API_URL,
  backupUrl: API_URL,
  fallbackUrl: API_URL,
};

// ✅ Promise: proper error handling
const fetchDataCorrectly = async (): Promise<void> => {
  try {
    const response = await fetch("https://api.example.com/data");
    console.log(response);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

// ✅ Promise: avoid nesting with async/await
const properPromises = async (): Promise<void> => {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://api.example.com/users"),
      fetch("https://api.example.com/posts"),
    ]);
    console.log(usersResponse, postsResponse);
  } catch (error) {
    console.error(error);
  }
};

export {};
