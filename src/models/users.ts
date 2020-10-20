export class User {
    public id: number;
    public name: string;
    public email: string;
    public gender: string;
    public status: string;
    public created_at: Date;
    public updated_at: Date;
    constructor(user: Person) {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
      this.gender = user.gender;
      this.status = user.status;
      this.created_at = user.created_at;
      this.updated_at = new Date();
  }
}

export type Person = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
