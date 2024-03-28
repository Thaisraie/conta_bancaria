import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    
    let opcao: number;

    
    // objeto da classe conta corrente (teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Thais", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(200);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    
    // objeto da classe conta poupança (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Thais Raie", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


    // Menu com as opções da conta 
    while (true) {

        console.log(colors.bg.black, colors.fg.cyan,                      
            "**************************************************");
        console.log("                                                    ");
        console.log("                     BANCO RAIE                     ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");
        console.log("            1 - Criar conta                         ");
        console.log("            2 - Listar todas as Contas              ");
        console.log("            3 - Buscar Conta por Numero             ");
        console.log("            4 - Atualizar Dados da Conta            ");
        console.log("            5 - Apagar Conta                        ");
        console.log("            6 - Sacar                               ");
        console.log("            7 - Depositar                           ");
        console.log("            8 - Transferir valores entre Contas     ");
        console.log("            9 - Sair                                ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                     ",
                colors.reset);

        console.log(colors.fg.cyan, "Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco RAIE - Seu dinheiro disponivél para você!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1: 
                console.log("\n\nCriar Conta\n\n");

            break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
            
            break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

            break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

            break;
            case 5:
                console.log("\n\nApagar uma conta\n\n");

            break;
            case 6:
                console.log("\n\nSaque\n\n");

            break;
            case 7:
                console.log("\n\nDepósito\n\n");

            break;
            case 8: 
                console.log("\n\nTransferência entre Contas\n\n");

            keyPress()            
            break;
            default:
                console.log("\nOpção inválida!\n");

            keyPress()
            break;
        }
    }
}

// função com os dados da pessoa desenvolvedora 
function sobre(): void {
    console.log("****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Thais Siqueira");
    console.log("https://github.com/Thaisraie   ");
    ("****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();