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

# DB Documentation
```sql
CREATE TABLE accounts (
    id INT NOT NULL PRIMARY KEY auto_increment,
     name VARCHAR(255) NOT NULL,
    industry VARCHAR(255),
    website VARCHAR(255),
    address TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
## Accounts Table
The accounts table is designed to store information about various accounts. Below is the schema of the accounts table:

- id (INT, Primary Key, Auto Increment): Unique identifier for each account.
- name (VARCHAR(255), Not Null): Name of the account. It is a required field.
- industry (VARCHAR(255)): Industry of the account.
- website (VARCHAR(255)): Website URL of the account.
- address (TEXT): Address of the account.
- notes (TEXT): Additional notes or comments about the account.
- created_at (TIMESTAMP, Default: Current Timestamp): Timestamp indicating when the account was created.
- updated_at (TIMESTAMP, Default: Current Timestamp): Timestamp indicating when the account was last updated.