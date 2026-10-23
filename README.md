PROJETO: Checkout de um e-commerce em colapso

Descrição
Rotina JavaScript de checkout de um e-commerce: calcula o subtotal do carrinho, aplica cupons de desconto e finaliza a compra. O projeto surgiu da situação-problema em que dois desenvolvedores editaram o mesmo arquivo ao mesmo tempo, e um sobrescreveu o trabalho do outro. Aqui usamos Git (branches e merge) para evitar que isso se repita.

Estrutura de pastas

checkout-ecommerce/
|-- README.md
|-- .gitignore
`-- checkout.js


 Como executar
Com o Node.js instalado, rode no terminal, dentro da pasta do projeto:
```
node checkout.js
```

Fluxo de branches
- `main`: versão estável, só recebe código pronto.
- `develop`: onde as funcionalidades são integradas e testadas.
- `feature/carrinho-laco`: seção do carrinho (laços de repetição).
- `feature/validacao-cupom`: seção do cupom (estruturas condicionais).

Cada desenvolvedor trabalha na sua branch e depois fazemos o merge na `develop`.

Como o Git teria evitado o incidente
No incidente, os dois alteraram o mesmo arquivo direto no servidor, sem histórico, e a validação do cupom sobrescreveu o carrinho. Com Git, cada pessoa trabalha em uma branch separada, então uma alteração não apaga a outra. Cada mudança fica registrada em commits, o que permite ver quem mudou o quê e voltar a uma versão anterior. Se os dois mexerem na mesma linha, o Git avisa com um conflito no merge e obriga a resolver manualmente, preservando o código das duas partes.

 Autores
- henrique, manoel e hariany
