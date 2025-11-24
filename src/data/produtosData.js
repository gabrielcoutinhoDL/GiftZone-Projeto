const PRODUTOS = {
  steam: {
    nome: "Steam Gift Card",
    avaliacao: "4.8 (1247)",
    valoresDisponiveis: ["R$ 25,00", "R$ 50,00", "R$ 100,00", "R$ 150,00"],
    imagemUrl: "/images/steam-card.jpg",
    conteudosAbas: {
      descricao:
        "Cartão presente da Steam para usar em qualquer jogo ou conteúdo disponível na plataforma. Código enviado instantaneamente após a compra.",
      comoUsar:
        "1. Acesse sua conta Steam. 2. Clique no menu 'Jogos' > 'Ativar um código de produto'. 3. Insira o código enviado por e-mail.",
      avaliacoes: "Baseado em 1247 avaliações. Média: 4.8/5.0",
    },
  },
  xbox: {
    nome: "Xbox Live Gift Card",
    avaliacao: "4.5 (890)",
    valoresDisponiveis: ["R$ 50,00", "R$ 75,00", "R$ 120,00", "R$ 200,00"],
    imagemUrl: "/images/xbox-card.jpg",
    conteudosAbas: {
      descricao:
        "Cartão presente da Xbox Live para comprar jogos e conteúdos na Microsoft Store.",
      comoUsar:
        "1. Acesse sua conta Xbox. 2. Vá para 'Resgatar código'. 3. Insira o código.",
      avaliacoes: "Baseado em 890 avaliações. Média: 4.5/5.0",
    },
  },
  netflix: {
    nome: "Netflix Gift Card",
    avaliacao: "4.9 (2780)",
    valoresDisponiveis: ["R$ 20,00", "R$ 50,00", "R$ 75,00", "R$ 100,00"],
    imagemUrl: "/images/net-card.webp",
    conteudosAbas: {
      descricao:
        "Cartão presente da Netflix, ideal para pagar a assinatura ou presentear. Acesse milhares de filmes e séries originais. Envio do código por e-mail.",
      comoUsar:
        "1. Acesse netflix.com/redeem ou vá para a seção 'Conta'. 2. Insira o código PIN de 11 dígitos enviado por e-mail ou impresso no cartão.",
      avaliacoes: "Baseado em 2780 avaliações. Média: 4.9/5.0",
    },
  }, 
  nuvem: {
    nome: "Nuvem Gift Card",
    avaliacao: "5.0 (444)",
    valoresDisponiveis: ["R$ 50,00", "R$ 75,00", "R$ 120,00", "R$ 200,00"],
    imagemUrl: "/images/nuuvem-card.jpg",
    conteudosAbas: {
      descricao:
        "Cartão presente para expansão de armazenamento em serviços de nuvem. Perfeito para guardar fotos, vídeos e documentos com segurança e liberar espaço no seu dispositivo.",
      comoUsar:
        "1. Acesse a área de 'Planos e Assinaturas' do seu provedor de nuvem. 2. Selecione a opção 'Resgatar Código' ou 'Adicionar Créditos'. 3. Insira o código enviado por e-mail para creditar o valor.",
      avaliacoes: "Baseado em 444 avaliações. Média: 5.0/5.0",
    },
  }
};

export { PRODUTOS };
