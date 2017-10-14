export class CepModel {
    constructor(
        public cep: string,
        public logradouro: string,
        public complemento: string,
        public bairro: string,
        public localidade: string,
        public uf: string,
        public unidade: string,
        public ibge: string,
        public gia: string
    ) { }
}
