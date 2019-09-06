///<reference path="pessoa.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="cliente.ts"/>
var empresa;
(function (empresa) {
    var cliente = new empresa.Cliente();
    cliente.setNome("Maria");
    cliente.setCodCliente(1);
    cliente.setCpf("000.000.000-00");
    cliente.setIdade(30);
    cliente.setCredito(2000);
    document.getElementById("nome").textContent = cliente.getNome();
    document.getElementById("idade").textContent = cliente.getIdade.toString();
    document.getElementById("cpf").textContent = cliente.getCpf();
    document.getElementById("codigo").textContent = cliente.getCodCliente().toString();
    document.getElementById("credito").textContent = cliente.getCredito().toString();
})(empresa || (empresa = {}));
