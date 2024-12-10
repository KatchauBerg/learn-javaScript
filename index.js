import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 111122223333

const  cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 999999999999

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001
let valorSacado = 200;
contaCorrenteRicardo.sacar(valorSacado)
contaCorrenteRicardo.depositar(100)
