export class User {
    
    private _id:string;
    private name: String;
    private pass: String;    
    private surname : String;
    private email : String;
    private aplications : [any];
    private aptitudes : String;
    private logros : String;
    private img : String;

   constructor(userResponse) {
       this._id = userResponse._id;
       this.name = userResponse.name;
       this.pass = userResponse.pass;
       this.surname = userResponse.surname;
       this.email = userResponse.email;
       this.aplications = userResponse.aplications;
       this.aptitudes = userResponse.aptitudes;
       this.logros = userResponse.logros;
       this.img = userResponse.img;
    }
}
