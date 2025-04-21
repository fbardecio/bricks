# Mason bricks 🧱

[Mason][mason_link] reusable bricks.

## Bricks ✨

### Functions API
This brick scaffolds a modular CRUD API layer for Firebase Cloud Functions, inspired by the NestJS structure. It's designed to accelerate backend development using TypeScript and Firestore.

#### ✨ Features
- ✅ Generate a modular folder structure:

    - controllers/ – Cloud Function HTTP handlers.

    - services/ – Logic layer (class-based), optionally with Firestore integration.

    - models/ – Type-safe entity definitions.

    - dtos/ – Input validation structures for creation and updates.

- 🔥 Optional Firestore integration using withConverter for full type safety.

- 🧱 Inspired by NestJS module organization but built for Firebase Functions.


## Getting started 🚀

### Adding a brick 🧱️

To add a brick, use any of the following commands:

```sh
# add from git url
mason add <BRICK_NAME> --git-url https://github.com/fbardecio/bricks --git-path path/to/<BRICK_NAME>

# add from git url (global)
mason add -g <BRICK_NAME> --git-url https://github.com/fbardecio/bricks --git-path path/to/<BRICK_NAME>

# example to add flutter_package brick
mason add -g flutter_package --git-url https://github.com/fbardecio/bricks --git-path flutter_package/
```

_Note: Be sure to replace `<BRICK_NAME>` with one of the bricks mentioned_

### Useful Links 🚀

- [Functions API Brick][1]
- [Official Mason Documentation][2]
- [Observable Flutter: Building a Mason brick][3]
- [mason_link][4]
- [dart_package][5]

[1]: https://github.com/fbardecio/bricks/functions_api
[2]: https://docs.brickhub.dev
[3]: https://youtu.be/o8B1EfcUisw
[4]: https://pub.dev/packages/mason
[5]: https://github.com/gianfrancopapa/bricks/tree/main/dart_package
