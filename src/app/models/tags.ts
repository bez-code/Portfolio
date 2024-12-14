export class Tags {

    static readonly Angular = new Tags('Angular', 'red');
    static readonly TypeScript = new Tags('TypeScript', 'green')

    private constructor(private readonly key: string, private readonly color:string){}

    toString(){
        return  this.key;   
    }

    getColor(): string {
        return this.color;
    }
}