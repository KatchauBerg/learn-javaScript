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

  depositar(valor){

    if(valor > 0){

      this.saldo += valor 
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
contaCorrenteRicardo.depositar(100)
