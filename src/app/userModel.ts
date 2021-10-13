export class UserModel {
    objid:string;
    id:number;
    name:string;
    pwd:string;
    email:string;
    
  

    constructor(objid:string,_id:number,_name:string,_pwd:string,_email:string)
    {
        this.objid = objid;
        this.id = _id;
        this.name = _name;
       
        this.pwd = _pwd;
        this.email = _email
    }
}