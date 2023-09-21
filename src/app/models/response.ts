import { Books } from "./books";
import { User } from "./user";

export class Response {
    constructor(
        public error:boolean,
        public code:number,
        public message:string,
        public data?:Books[],
        public data_book?: Books,
        public dataUser?:User,
        public dataU?:User[]
        ){}
}
