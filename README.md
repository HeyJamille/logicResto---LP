# LogicRestô — Landing page

Página de vendas do LogicRestô, separada do painel (`../frontend`). Next.js (App Router) +
TypeScript + Tailwind CSS, com os mesmos tokens visuais do painel (só o tema claro).

## Como rodar

```bash
npm install
cp .env.example .env.local   # ajuste o link de contato
npm run dev
```

Sobe em **`http://localhost:3002`** (o painel usa a 3001 e a API a 3000).

## Configuração

| Variável                  | Uso                                                    |
| ------------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_CONTACT_URL` | Link dos botões "Quero conhecer" (WhatsApp ou e-mail)  |

O conteúdo (recursos, diferenciais, perguntas) fica em listas no topo de `src/app/page.tsx`.

## Fotos

As fotos em `public/img` são do [Unsplash](https://unsplash.com/license) (uso livre, inclusive
comercial, sem exigir crédito). IDs originais, caso precise trocar ou creditar:

| Arquivo              | Foto no Unsplash                         |
| -------------------- | ---------------------------------------- |
| `garcom.jpg`         | `photo-1653643629459-d7ed043ad799`       |
| `pizzaiolo.jpg`      | `photo-1647483684830-7ddde27dcf4d`       |
| `garcom-bandeja.jpg` | `photo-1574178777538-854a7fd44747`       |
| `cozinheira.jpg`     | `photo-1778634304534-6629b945ee26`       |
| `caixa.jpg`          | `photo-1753351054379-9577966546ba`       |
| `cozinha.jpg`        | `photo-1622021142947-da7dedc7c39a`       |
| `hamburguer.jpg`     | `photo-1561758033-d89a9ad46330`          |
| `balcao.jpg`         | `photo-1594392175506-29798601d67e`       |

O ideal é trocar por fotos reais de restaurantes clientes, quando houver.
