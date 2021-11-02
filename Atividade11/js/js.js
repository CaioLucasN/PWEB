
function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcArea = calcArea;

  function calcArea() {
    var area = base * altura;
    return area
  }
}
var retangulo = new Retangulo(9,4);
alert("Área do Retangulo: " + retangulo.calcArea());





function Conta() {
  var nome, banco, numConta, saldo;

  this.getNome = function() {
    return nome;
  }
  this.getBanco = function() {
    return banco;
  }
  this.getNumConta = function() {
    return numConta;
  }
  this.getSaldo = function() {
    return saldo;
  }
  this.setNome = function(value) {
    nome = value;
  }
  this.setBanco = function(value) {
    banco = value;
  }
  this.setNumConta = function(value) {
    numConta = value;
  }
  this.setSaldo = function(value) {
    saldo = value;
  }
}

function Corrente() {
  var saldoEspecial;
  this.getSaldoEspecial = function() {
    return saldoEspecial;
  }
  this.setSaldoEspecial = function(value) {
    saldoEspecial = value;
  }
}

function Poupanca() {
  var juros, dataVencimento;
  this.getJuros = function() {
    return juros;
  }
  this.getDataVencimento = function() {
    return dataVencimento;
  }
  this.setJuros = function(value) {
    juros = value;
  }
  this.setDataVencimento = function(value) {
    dataVencimento = value;
  }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

contaCorrente = new Corrente();
contaCorrente.setNome("Caio Lucas");
contaCorrente.setBanco("Itaú");
contaCorrente.setNumConta("139111-1");
contaCorrente.setSaldo(10000);
contaCorrente.setSaldoEspecial(2000);

contaPoupanca = new Poupanca();
contaPoupanca.setNome("Lucas Caio");
contaPoupanca.setBanco("Inter");
contaPoupanca.setNumConta("913111-1");
contaPoupanca.setSaldo(50000);
contaPoupanca.setJuros(0.15);
contaPoupanca.setDataVencimento("20");


alert("Conta Corrente:" +
  "\nNome do Correntista: " + contaCorrente.getNome() +
  "\nBanco: " + contaCorrente.getBanco() +
  "\nN° Conta: " + contaCorrente.getNumConta() +
  "\nSaldo: " + contaCorrente.getSaldo() +
  "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());

  alert("CONTA POUPANÇA:" +
      "\nNome do Correntista: " + contaPoupanca.getNome() +
      "\nBanco: " + contaPoupanca.getBanco() +
      "\nN° Conta: " + contaPoupanca.getNumConta() +
      "\nSaldo: " + contaPoupanca.getSaldo() +
      "\nJuros: " + contaPoupanca.getJuros() +
      "\nData Vencimento: Todo dia " + contaPoupanca.getDataVencimento());
