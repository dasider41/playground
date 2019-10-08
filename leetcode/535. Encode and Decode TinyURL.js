/*
535. Encode and Decode TinyURL
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/

let urls = [];
const prefix = "http://tinyurl.com/";
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function(longUrl) {
  const key = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  urls[key] = longUrl;
  return `${prefix}${key}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl) {
  const key = shortUrl.replace(prefix, "");
  return urls[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

var longURL = "https://leetcode.com/problems/design-tinyurl";
var shortURL = encode(longURL);
var originalURL = decode(longURL);

console.log(originalURL === longURL);
