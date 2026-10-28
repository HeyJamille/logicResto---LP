# LogicRestô — Landing page

Página de vendas do LogicRestô, separada do painel (`../frontend`). Next.js (App Router) +
TypeScript + Tailwind CSS, com os mesmos tokens visuais do painel (só o tema claro).

## Como rodar

```bash
npm install
cp .env.example .env.local   # ajuste o link de contato e o endereço do painel
npm run dev
```

Sobe em **`http://localhost:3002`** (o painel usa a 3001 e a API a 3000).

## Configuração

| Variável                  | Uso                                                    |
| ------------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_APP_URL`     | Endereço do painel; os botões "Entrar" vão para `/login` |
| `NEXT_PUBLIC_CONTACT_URL` | Link dos botões "Quero conhecer" (WhatsApp ou e-mail)  |

O conteúdo (recursos, diferenciais, perguntas) fica em listas no topo de `src/app/page.tsx`.
