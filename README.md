
## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- **Next.js**: Framework React para desenvolvimento web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **shadcn**: Componentes de interface reutilizáveis e estilizados.
- **Framer Motion**: Biblioteca para animações de interfaces fluidas e dinâmicas.

## Configurando Variáveis de Ambiente para o Projeto

Este guia irá ajudá-lo a configurar as variáveis de ambiente necessárias para executar este projeto. Siga as instruções abaixo com atenção.

### 1. Configurando DISCORD_CLIENT_ID e DISCORD_CLIENT_SECRET

Para obter essas credenciais, siga os passos abaixo:

1. Acesse o site [Discord Developer Portal](https://discord.com/developers/applications).
2. Clique em **"New Application"**.
3. Dê um nome para sua aplicação (exemplo: "Meu Site Auth").
4. Vá até a seção **OAuth2** no menu lateral.
5. Copie o **"Client ID"**. Este será o valor para `DISCORD_CLIENT_ID`.
6. Copie o **"Client Secret"**. Este será o valor para `DISCORD_CLIENT_SECRET`.
7. Em **Redirects**, adicione a URL: `http://localhost:3000/api/auth/callback/discord`.

### Exemplo de configuração no arquivo `.env`:
```env
DISCORD_CLIENT_ID=seu_client_id
DISCORD_CLIENT_SECRET=seu_client_secret
```

## 2. Configurando NEXTAUTH_SECRET

Siga os passos abaixo para gerar um segredo seguro para sua aplicação:

1. Abra o terminal.
2. Execute o comando a seguir para gerar uma string aleatória:
   ```bash
   openssl rand -base64 32
   ```
3. Copie o resultado gerado. Este será o valor para `NEXTAUTH_SECRET`.

### Exemplo de configuração no arquivo `.env`:
```env
NEXTAUTH_SECRET=string_gerada_pelo_comando
```

## 3. Configurando NEXTAUTH_URL

Defina a URL base para o seu ambiente de desenvolvimento ou produção:

- **Para desenvolvimento local:** `http://localhost:3000`
- **Para produção:** Substitua pelo domínio do seu site, por exemplo: `https://seu-dominio.com`

### Exemplo de configuração no arquivo `.env`:
```env
NEXTAUTH_URL=http://localhost:3000
```

Se estiver implantando em produção, ajuste a variável para refletir o domínio real do seu site.

---

Após configurar todas as variáveis, sua aplicação estará pronta para ser executada!

## Iniciando o projeto

- Instalar as dependências usando um gerenciador de pacotes, o usado no projeto foi o NPM.

```
npm install
```

- Para iniciar o projeto na sua máquina usando o NPM.

```
npm run dev
```

- Para construir o projeto usando o NPM.

```
npm run build
```

- Para executar o projeto em produção usando o NPM.

```
npm run start


## Licença

Este projeto é licenciado sob a licença MIT.
