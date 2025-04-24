# Mason bricks 🧱

[Mason][mason_link] reusable bricks.

## Bricks ✨

| name                                       | description                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------- |
| [`functions_api`][functions_api]           | Scaffolds a modular CRUD API layer for Firebase Cloud Functions, inspired by the NestJS structure.             |
| [`rules_template`][rules_template]         | Creates a rules template for Firebase Firestore security rules.             |



## Getting started 🚀

### Adding a brick 🧱️

To add a brick, use any of the following commands:

```sh
# add from git url
mason add <BRICK_NAME> --git-url https://github.com/fbardecio/bricks --git-path path/to/<BRICK_NAME>

# add from git url (global)
mason add -g <BRICK_NAME> --git-url https://github.com/fbardecio/bricks --git-path path/to/<BRICK_NAME>

# example to add flutter_package brick
mason add -g functions_api --git-url https://github.com/fbardecio/bricks --git-path functions_api
```

_Note: Be sure to replace `<BRICK_NAME>` with one of the bricks mentioned_

### Useful Links 🚀

- [Official Mason Documentation][1]
- [Observable Flutter: Building a Mason brick][2]


[1]: https://docs.brickhub.dev
[2]: https://youtu.be/o8B1EfcUisw

[//]: # "links."
[functions_api]: https://github.com/fbardecio/bricks/tree/develop/functions_api
[rules_template]: https://github.com/fbardecio/bricks/tree/develop/rules_template
[mason_link]: https://pub.dev/packages/mason
