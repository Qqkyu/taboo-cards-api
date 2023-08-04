# Taboo cards API

Server that communicates with a database of around ~2000 taboo cards, each in two languages - English and Polish.

## Base URL

https://www.taboocardsapi.com/api/

## Rate limit

There is a 10000 requests per day API limit to prevent any malicious action. If you were to make more requests than this, you will get an error response with 429 status response (Too Many Requests).

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

There are currently two endpoints. The first endpoint returns all of the cards stored in the database. The response is the array of card objects.

```
/api/cards
```

The second endpoint randomly chooses one card and returns it. The response is a single card object:

```
/api/cards/random
```

## Query parameters

In both of the above endpoints, you can attach the following language and difficulty query parameters.

### Optional `language` query parameter

Attach the `language` query parameter to get cards only in the provided language (either `en` or `pl`):

```
/api/cards?language=en
/api/cards?language=pl
```

Not providing the `language` query parameter is equal to providing `language=en`, so following endpoints are equal:

```
/api/cards                      --> Array of cards in English
/api/cards?language=en          --> Array of cards in English
```

Same applies to the `/random` endpoint:

```
/api/cards/random               --> Random card in English
/api/cards/random?language=en   --> Random card in English
```

### Optional `difficulty` query parameter

Attach the `difficulty` query parameter to get cards only with the provided difficulty (`easy`, `medium`, or `hard`):

```
/api/cards?difficulty=easy
/api/cards?difficulty=medium
/api/cards?difficulty=hard
```

Not providing the `difficulty` query parameter will result in:

```
/api/cards          --> Return all cards with mixed difficulties
/api/cards/random   --> Return one card with any difficulty
```
