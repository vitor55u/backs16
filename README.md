O projeto SecureFlow estabelece um plano fundamental de proteção para uma API que lida com pedidos, desenvolvida usando Node.js e Express. O intuito é salvaguardar as informações e limitar o acesso exclusivamente ao front-end da organização.

Para iniciar, as configurações do CORS foram modificadas para aceitar apenas o domínio http://frontend.secureflow.com. Essa decisão assegura que apenas o site autorizado tenha acesso à API, impedindo tentativas de conexão de fontes não permitidas.

Foi adotada uma autenticação baseada em token para proteger os endpoints mais sensíveis. Para que o cliente tenha permissão para acessar os pedidos, é imprescindível que ele forneça o token correto no cabeçalho Authorization. Essa abordagem separa a autenticação (verificação da identidade do usuário) da autorização (determinação do que o usuário pode acessar). Dessa forma, somente os usuários que se autenticaram têm permissão para consultar os dados.

Além disso, foi desenvolvido um sistema de monitoramento básico que registra todas as requisições realizadas e as documenta em logs. Isso abrange tentativas de acessos não autorizados, facilitando a identificação de atividades suspeitas e possíveis invasões. Durante os testes, acessos sem token ou com token inválido foram rejeitados com o erro 401, enquanto acessos que apresentaram token válido foram processados normalmente.

Com a implementação dessas medidas de segurança — CORS restrito, autenticação e autorização, além de um sistema de monitoramento — a API se torna mais robusta, o que eleva sua capacidade de reconhecer e mitigar riscos.
