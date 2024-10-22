# URL Shortener

This is a simple URL shortener service built using Node.js and Express. It allows you to shorten URLs and retrieve the original URLs using short codes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```
  

2. Install dependencies:
```sh
npm install
```

3. Running the Server
- Start the server:
  ```sh
  node server.js
  ```
The server will be running on `http://localhost:3000`.
### API Endpoints
### POST /api/shorturl
Create a shortened URL.

Request Body
```json
{
  "url": "https://freeCodeCamp.org"
}
```
Response
```json
{
  "original_url": "https://freeCodeCamp.org",
  "short_url": 1
}
```
### GET /api/shorturl/:short_url
Redirect to the original URL.

### Example
If you visit http://localhost:3000/api/shorturl/1, you will be redirected to https://freeCodeCamp.org.

### Error Handling
If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error message.

Example
```json
{
  "error": "invalid URL"
}
```

# Acknowledgments
- Freecodecamp
- Express
- Body-Parser
- dns.lookup

# License
This project is licensed under the MIT License.
```
This README covers the basics of the project, including setup, API endpoints, and example requests. Anything else you’d like to know? Contact me
```
