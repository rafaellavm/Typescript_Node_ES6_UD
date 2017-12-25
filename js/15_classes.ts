interface IInterface{

    soma(a,b): number;
}

interface IInterface2{

    sub(a,b): number;
}


class nomeDaClasse implements IInterface,IInterface2{

    private atributo: number;
    private atributo2: string;
    private atributo3: Object;

    constructor(parametros:string){
        this.atributo2 = parametros;
    }

    imprimir(message:string) :void{
        console.log(message);
    }

    soma(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
}

const novo = new nomeDaClasse("Rafaela");
novo.imprimir(novo.soma(1,2));

export default nomeDaClasse;