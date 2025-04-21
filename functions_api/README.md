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