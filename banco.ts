namespace empresa{
    export class Banco{
        private _nome:string;
        private _codBanco:number;

        public getNome(){
            return this._nome;
        }
        public setNome(nome:string){
            this._nome = nome;
        }

        public getCodBanco(){
            return this._codBanco;
        }

        public set codBanco(codigo:number){
            this._codBanco = codigo;
        }
    }
}