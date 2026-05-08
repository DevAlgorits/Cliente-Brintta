# Brintta - Serviços Gráficos Premium

Sua marca que vende. Somos especializados em criar identidades visuais, brindes corporativos e soluções gráficas personalizadas que transformam a percepção dos seus clientes sobre seu negócio.

## 🎯 Sobre o Projeto

A Brintta é uma plataforma moderna de serviços gráficos e personalizações voltada para pequenos negócios e empreendedores que entendem o valor de uma marca bem estruturada. 

Oferecemos desde cartões de visita e adesivos personalizados até soluções completas de identidade visual, tudo desenvolvido com atenção ao detalhe e entendimento profundo das necessidades de cada cliente.

## 📋 Serviços Principais

- **Identidade Visual** - Logo, paleta de cores, guia de marca completo
- **Cartões de Visita** - Materiais premium que deixam primeira impressão
- **Brindes Corporativos** - Presentes personalizados que fortalecem parcerias
- **Adesivos e Etiquetas** - Marca presente em cada detalhe
- **Embalagens Personalizadas** - Experiência premium no unboxing
- **Social Media Design** - Conteúdo profissional para suas redes
- **Camisetas e Vestuário** - Personalização com qualidade
- **Papelaria Empresarial** - Comunicação que transmite credibilidade

## 🚀 Características Técnicas

- **Framework**: Next.js 16.2.6 com App Router
- **Styling**: Tailwind CSS com customizações de brand colors
- **Animações**: Framer Motion para transições fluidas
- **Ícones**: React Icons para interface consistente
- **Responsividade**: Design mobile-first adaptado a todos os devices

## 💻 Configuração Local

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

1. Instale as dependências
```bash
npm install
```

2. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

3. Acesse no navegador
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
brintta/
├── app/
│   ├── layout.tsx          # Layout raiz com meta tags
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais e Tailwind
├── components/
│   ├── Navigation.tsx      # Menu de navegação
│   ├── Hero.tsx            # Seção hero principal
│   ├── Services.tsx        # Galeria de serviços
│   ├── HowItWorks.tsx      # Processo de trabalho
│   ├── Differentials.tsx   # Diferenciais da empresa
│   ├── Portfolio.tsx       # Portfólio de projetos
│   ├── SocialProof.tsx     # Depoimentos e prova social
│   ├── Contact.tsx         # Seção de contato
│   ├── Footer.tsx          # Rodapé
│   └── WhatsAppButton.tsx  # Botão flutuante WhatsApp
├── lib/                    # Utilitários e helpers
├── public/
│   └── images/             # Imagens e assets
├── next.config.js          # Configuração Next.js
├── tailwind.config.js      # Customizações Tailwind
├── postcss.config.js       # Configuração PostCSS
└── tsconfig.json           # Configuração TypeScript
```

## 🎨 Customização de Marca

As cores da marca estão configuradas em `tailwind.config.js`:

- **Primary** (Azul): Cor principal da marca, usada em CTAs e destaques
- **Dark** (Cinza/Preto): Paleta de cores escuras para o tema dark

Para alterar as cores, modifique a seção `theme.extend.colors` no arquivo de configuração Tailwind.

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build otimizado para produção
npm start        # Inicia servidor de produção
npm run lint     # Executa verificação de código
```

## 📱 Responsividade

O projeto está totalmente otimizado para diferentes tamanhos de tela:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

Todas as animações e componentes se adaptam automaticamente usando Tailwind CSS breakpoints.

## ⚡ Performance

- Otimização de imagens com Next.js Image
- Carregamento sob demanda de componentes
- CSS crítico inlineado automaticamente
- Animações GPU-aceleradas com Framer Motion

## 📞 Comunicação com Cliente

O site integra WhatsApp como canal principal de contato. O botão flutuante permite que visitantes se conectem instantaneamente com a equipe para orçamentos e dúvidas.

## 🚢 Deploy

O projeto está pronto para ser deployado em plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS**
- Qualquer servidor com suporte a Node.js

### Deployment no Vercel (Recomendado)

1. Push para GitHub
2. Conecte seu repositório no Vercel
3. Deploy automático em cada push

## 📚 Dependências Principais

```json
{
  "next": "^16.2.6",
  "react": "^18.2.0",
  "framer-motion": "^11.0.0",
  "react-icons": "^5.0.0",
  "tailwindcss": "^3.4.19"
}
```

## 🔍 SEO

O projeto implementa:
- Meta tags otimizadas
- Open Graph para compartilhamento social
- Descrição estruturada em português
- URLs amigáveis

## 📝 Notas de Desenvolvimento

- TypeScript está configurado para segurança de tipos
- ESLint configurado com padrões Next.js
- Use `'use client'` em componentes com interatividade
- Componentes são otimizados com memoization quando necessário

## 🤝 Contribuição

    Laura Monteiro - UI/UX

## 📄 Licença

Este projeto é privado e desenvolvido sob medida para seus objetivos específicos.

---
