<div class='title'>
<h2>Next-Auth & Autenticação Azure</h2>
<hr class='solid'>
</div>

Merecendo um tópico próprio, todavia ainda se tratando de tecnologias usadas temos o **Next-Auth**. Ele é configurado pensando nos fatores de autenticação **Microsoft/Azure**, que assegura e hospeda o domínio eletrônico da Cassol hoje (*@cassol.ind.br*).
Para utilizar o Datasol, é **necessário** ter uma conta neste domínio. Logando pela primeira vez, é criado um **registro local** com os dados recebidos pela Microsoft, assim o acesso pode ser feito localmente localmente também caso desejado.

<div class='note'>

>⚠️ ***É impossível logar no Datasol sem uma conexão com a Internet!***
> *A única versão disponível offline é o Datasol em ambiente dev (localhost).*

</div>

A partir desta autenticação, podemos saber **quem está acessando** naquela sessão, o que esta pessoa **tem dreito a fazer** no aplicativo, como *ler, editar ou gerenciar*, e também com **quais elementos ela pode interagir**. Isto nos garante políticas de acessso sólidas, assim gerando confidencialidade de informações por **pessoa, permissão e setor.**

<div class='end'>