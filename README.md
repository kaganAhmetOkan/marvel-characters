A NextJS 13 app to browse your favorite Marvel heroes and villains.

# Get Started
Clone the repository to your machine.
Create `.env.local` in root directory inside of which you'll need 3 variables:
```
PUBLIC_KEY="publickey"
PRIVATE_KEY="privatekey"
BASE_URL=https://gateway.marvel.com:443/v1/public
LIMIT=20
```

- You need to get the public and private keys from [Marvel.com](https://developer.marvel.com) by creating an account.
- `BASE_URL` is used for API fetches.
- `LIMIT` is used for limiting the amount of items returned by fetch. It cannot exceed 100 as Marvel won't allow more than that in their APIs. It defaults to 20 so it need not be defined for the app to work.

Make sure you have installed all dependencies by running `yarn` in root directory.
Then run `yarn dev` and visit [localhost:3000](http://localhost:3000) to see the application in action.

## marvel-clone
This app is an indirect upgrade from [marvel-clone](https://github.com/kaganAhmetOkan/marvel-clone). This version utilizes SSR and search parameters, and uses the new [App Router](https://nextjs.org/docs/app). It also features auto theme detection from OS theme.