# Taboo cards API

Server that communicates with a database of around ~2000 taboo cards, each in two languages - English and Polish.

## Base URL

https://www.taboocardsapi.com/api/

## Rate limit

There is a 100 requests per day API limit to prevent any malicious action. If you were to make more requests than this, you will get error response with 429 status response (Too Many Requests). This will likely be increased in the near future.

## Models

Card:

| Attribute      |   Type   | Description                                    |
| -------------- | :------: | ---------------------------------------------- |
| title          |  string  | Word to explain                                |
| forbiddenWords | string[] | Five words that can't be used to explain title |
| difficulty     |  string  | "easy", "medium", or "hard"                    |

## Example cards

English:

```json
{
  "forbiddenWords": ["New York", "torch", "crown", "sculpture", "island"],
  "title": "Statue of Liberty",
  "difficulty": "medium"
}
```

Corresponding card in Polish:

```json
{
  "forbiddenWords": ["Nowy Jork", "Stany Zjednoczone", "prezent", "wyspa", "pochodnia"],
  "title": "Statua Wolności",
  "difficulty": "medium"
}
```

## Endpoints

There are currently two endpoints, both with the language query parameter. Parameter options are "pl" and "en". However, it is optional and will default to "en".

First endpoint returns all of the cards stored in the database.

```
/api/cards
/api/cards?language=en
/api/cards?language=pl
```

In the above example, first two paths will return the same response.

Second one randomly chooses one card and returns it:

```
/api/cards/random
/api/cards/random?language=en
/api/cards/random?language=pl
```

Same as in the first example, first two paths will give the same response.
