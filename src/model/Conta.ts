export abstract class Conta {

    // Modificador privado, apenas essa classe pode ter acesso. Atributos da classe conta.
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Método construtor, cria o objeto da classe; this. recebe o atributo.
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    //Método Get: recupera; Set: altera os atributos. 
	public get numero() {
		return this._numero;
	}

	public get agencia() {
		return this._agencia;
	}

	public get tipo() {
		return this._tipo;
	}

	public get titular() {
		return this._titular;
	}

	public get saldo() {
		return this._saldo;
	}

	public set numero(numero: number) {
		this._numero = numero;
	}

	public set agencia(agencia: number) {
		this._agencia = agencia;
	}


	public set titular(titular: string) {
		this._titular = titular;
	}

	public set saldo(saldo: number) {
		this._saldo = saldo;
	}
    
    // Função c/ condição para sacar.
    public sacar(valor: number): boolean{

        if (this._saldo < valor){
            console.log("\nSaldo insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    // Função depositar
    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    // Função sem retorno dos atributos istanciados.
    public visualizar(): void{
        
    
    // Criando condição do atributo tipo.
        let tipo: string = "";
    
    switch (this._tipo){
        case 1:
            tipo = "Conta corrente";
            break;   
        case 2:
            tipo = "Conta poupança";
            break;
    }

    // Exibindo no console.
        console.log("\n\n*****************************************");
        console.log("Dados da Conta");
        console.log("*****************************************");
        console.log(`Número da conta: ${this._numero}`);
        console.log(`Número da agência: ${this._agencia}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Títular da conta: ${this._titular}`);
        console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`);
    }
}