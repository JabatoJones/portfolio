export class User {
    
    public _id:string;
    public name: String;
    public pass: String;    
    public surname : String;
    public email : String;
    public aplications : [any];
    public aptitudes : String;
    public logros : String;
    public img : String;

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
