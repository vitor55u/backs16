O projeto SecureFlow estabelece um plano de segurança fundamental para uma API de gestão de pedidos criada em Node.js com Express. A finalidade é salvaguardar as informações e limitar o acesso somente ao front-end oficial da organização.

Primeiramente, o CORS foi configurado para permitir somente o domínio http://frontend.secureflow.com. Essa medida assegura que apenas o site autorizado possa utilizar a API, impedindo acessos de fontes externas.

A autenticação por token foi implementada para proteger os endpoints sensíveis. Para acessar os pedidos, o cliente deve fornecer o token adequado no cabeçalho Authorization. Isso distingue a autenticação (confirmar a identidade do usuário) da autorização (determinar o que o usuário pode acessar). Dessa forma, apenas usuários autenticados têm acesso à consulta dos dados.
Também foi implementado um sistema básico de monitoramento, que registra todas as solicitações recebidas em logs. Registros são feitos de tentativas de acesso não autorizado, o que possibilita a identificação de atividades suspeitas e potenciais ataques. Durante os testes, acessos sem token ou com token inválido foram rejeitados com erro 401, ao passo que acessos com token válido foram aceitos sem problemas.

Com essas camadas de segurança — CORS restrito, autenticação/autorização e monitoramento — a API se torna mais robusta e capaz de identificar e minimizar riscos.
