# API Documentation

This document outlines the endpoints available in the API along with their functionality and usage.

## Base URL

The base URL for all API endpoints is: `http://localhost:5000`

## Endpoints

### Create an Account

- **URL:** `/account`
- **Method:** `POST`
- **Description:** Create a new account entry.
- **Request Body:**
  ```json
  {
    "name": "Name of the account",
    "industry": "Industry of the account",
    "website": "Website URL of the account",
    "address": "Address of the account",
    "notes": "Additional notes about the account"
  }


### Update an Account
- **URL**: /account/:id
- Method: PUT
- Description: Update an existing account entry by ID.
- Request Parameters:
id: ID of the account to be updated
Request Body:

```json
{
  "name": "Updated name of the account",
  "industry": "Updated industry of the account",
  "website": "Updated website URL of the account",
  "address": "Updated address of the account",
  "notes": "Updated additional notes about the account"
}
```

### Retrieve All Accounts
- **URL**: /account
- Method: GET
- Description: Retrieve all existing account entries.
- Response:
- Status Code: 200 OK
- Body: Returns an array of account objects.