import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

 
    const contas: ContaController = new ContaController();


    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Yasmine Lamark", 500000, 1000)
    contas.cadastrar(contaCorrente);


    const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Victor", 1000, 10);
    contas.cadastrar(contaPoupanca);

    while (true) {

        console.log(colors.bg.black, colors.fg.cyan,    
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                     BANCO RAIE                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Buscar Conta por Titular             ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nBanco RAIE - Cuidamos do seu dinheiro para você!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log("Digite o Número da Agência: ")
                agencia = readlinesync.questionInt("")

                console.log("Digite o Nome do Titular: ")
                titular = readlinesync.question("")

                console.log("Informe o tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da Conta: ")
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                // Chamada do Método listarTodas() da Classe ContaController
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log("Digite o Número da Agência: ")
                    agencia = readlinesync.questionInt("")

                    console.log("Digite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    tipo = conta.tipo

                    console.log("Digite o Saldo da Conta: ")
                    saldo = readlinesync.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta: ")
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta: ")
                            aniversario = readlinesync.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                } else {
                    console.log("A Conta não foi Encontrada!")
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o valor do Saque: ")
                valor = readlinesync.questionFloat("")

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o valor do Depósito: ")
                valor = readlinesync.questionFloat("")

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("Digite o Número da Conta de Origem: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o Número da Conta de Destino: ")
                numeroDestino = readlinesync.questionInt("")

                console.log("Digite o valor do Depósito: ")
                valor = readlinesync.questionFloat("")

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            case 9:
                console.log("\n\nConsultar conta por titular\n\n");

                    console.log("Digite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    contas.procurarPorTitular(titular);

                    keyPress();
            break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Thais Siqueira - thaisdivino21@gmail.com");
    console.log("https://github.com/Thaisraie");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();