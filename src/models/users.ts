export class User {
    public updated_at: Date;
    constructor(public id: number, public name: string, public email: string, public gender: string, public status: string, public created_at: Date ) {
      this.updated_at = new Date();
  }
}
