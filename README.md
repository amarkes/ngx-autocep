# NGX CEP AUTOCOMPLETE

Uma biblioteca para ser ultilizada para pesquisa de cep

# Required

- node vv8.4.0 or up
- npm 5.4.2 or up
- @angular/cli: 1.4.4

# Usando

instale a biblioteca usando npm 

```sh
npm i --save ngx-cepautocomplete
```

importe o `NgxAutoCepModule`

```typescript

import { NgxAutoCepModule } from 'ngx-cepautocomplete';

@NgModule({
  imports: [
    NgxAutoCepModule
  ]
})
export class AppModule {}
```
aponte o evento `cepEvent` para sua função

```html
<input type="text" ngxAutoCep (cepEvent)="autocomplete($event)">
```

```typescript
import { CepModel } from 'ngx-cepautocomplete';
autocomplete(event: CepModel): void {
    this.form.get('logradouro').setValue(event.logradouro)
}
```

# CepModel

```typescript
cep: string,
logradouro: string,
complemento: string,
bairro: string,
localidade: string,
uf: string,
unidade: string,
ibge: number,
gia: string
```

# Configurando proxy

abra o arquivo proxy.conf.json e insira o json dentro dele

```json
{
    "/ws/*": {
        "target": "https://viacep.com.br",
        "secure": false,
        "changeOrigin": true,
        "xfwd": true,
        "logLevel": "debug"
    }
}
````

se não tiver configurado o proxy veja este artigo

Criamos um arquivo ao lado do pacote do nosso package.json chamado proxy.conf.json com o conteúdo

```json
{
    "/ws/*": {
        "target": "https://viacep.com.br",
        "secure": false,
        "changeOrigin": true,
        "xfwd": true,
        "logLevel": "debug"
    }
}
````

Podemos então editar o script de início do arquivo package.json para ser

```sh
"start": "ng serve --proxy-config proxy.conf.json",
```

Depois para compilar o projeto usamos

```sh
npm start
```