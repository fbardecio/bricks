// TODO: Add or remove properties as needed
export class {{name.pascalCase()}} {
  constructor(
    public id: string,
    public name: string,
    public email: string
  ) {}

  static fromJson(json: any): {{name.pascalCase()}} {
    return new {{name.pascalCase()}}(
      json.id,
      json.name,
      json.email
    );
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      email: this.email
    };
  }
}
