class Cliente {

  nome
  cpf
}

class ContaCorrente{

  agencia
  saldo


  sacar(valor){

    if(this.saldo >= valor){

      this.saldo -= valor 
    }

    return valor
  }
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 111122223333

const  cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 999999999999

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.saldo = 10

let valorSacado = 200;
contaCorrenteRicardo.sacar(valorSacado)

console.log(contaCorrenteRicardo.saldo)
console.log(cliente1)
console.log(cliente2)
