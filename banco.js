var empresa;
(function (empresa) {
    var Banco = /** @class */ (function () {
        function Banco() {
        }
        Banco.prototype.getNome = function () {
            return this._nome;
        };
        Banco.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Banco.prototype.getCodBanco = function () {
            return this._codBanco;
        };
        Object.defineProperty(Banco.prototype, "codBanco", {
            set: function (codigo) {
                this._codBanco = codigo;
            },
            enumerable: true,
            configurable: true
        });
        return Banco;
    }());
    empresa.Banco = Banco;
})(empresa || (empresa = {}));
