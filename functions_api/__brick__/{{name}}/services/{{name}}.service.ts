{{#add_firestore_crud}}
import { getFirestore, Firestore, CollectionReference } from 'firebase-admin/firestore';
{{/add_firestore_crud}}
import { {{name.pascalCase()}} } from '../models/{{name}}.model';
import { Create{{name.pascalCase()}}Dto } from '../dtos/create-{{name}}.dto';
import { Update{{name.pascalCase()}}Dto } from '../dtos/update-{{name}}.dto';

export class {{name.pascalCase()}}Service {
  {{#add_firestore_crud}}private db: Firestore;
  private collection: CollectionReference<{{name.pascalCase()}}>;

  constructor(db?: Firestore) {
    this.db = db ?? getFirestore();

    this.collection = this.db
      .collection('{{collection_name}}')
      .withConverter<{{name.pascalCase()}}>({
        toFirestore: (data: {{name.pascalCase()}}) => data,
        fromFirestore: (snap) => snap.data() as {{name.pascalCase()}},
      });
  }
  {{/add_firestore_crud}}

  async findAll(): Promise<{{name.pascalCase()}}[]> {
    {{#add_firestore_crud}}
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => doc.data());
    {{/add_firestore_crud}}
    {{^add_firestore_crud}}
    // TODO: Implement findAll logic
    return [];
    {{/add_firestore_crud}}
  }

  async findById(id: string): Promise<{{name.pascalCase()}} | null> {
    {{#add_firestore_crud}}
    const doc = await this.collection.doc(id).get();
    return doc.exists ? doc.data() : null;
    {{/add_firestore_crud}}
    {{^add_firestore_crud}}
    // TODO: Implement findById logic
    return null;
    {{/add_firestore_crud}}
  }

  async create(data: Create{{name.pascalCase()}}Dto): Promise<{{name.pascalCase()}}> {
    {{#add_firestore_crud}}
    const ref = await this.collection.add(data as {{name.pascalCase()}});
    const doc = await ref.get();
    return doc.data()!;
    {{/add_firestore_crud}}
    {{^add_firestore_crud}}
    // TODO: Implement create logic
    return {} as {{name.pascalCase()}};
    {{/add_firestore_crud}}
  }

  async update(id: string, data: Update{{name.pascalCase()}}Dto): Promise<{{name.pascalCase()}} | null> {
    {{#add_firestore_crud}}
    const ref = this.collection.doc(id);
    await ref.update(data);
    const updated = await ref.get();
    return updated.exists ? updated.data()! : null;
    {{/add_firestore_crud}}
    {{^add_firestore_crud}}
    // TODO: Implement update logic
    return null;
    {{/add_firestore_crud}}
  }

  async remove(id: string): Promise<boolean> {
    {{#add_firestore_crud}}
    await this.collection.doc(id).delete();
    return true;
    {{/add_firestore_crud}}
    {{^add_firestore_crud}}
    // TODO: Implement remove logic
    return true;
    {{/add_firestore_crud}}
  }
}
