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
      avaliacoes: "Baseado em 1247 avaliações. Média: 4.8/5.0. ⭐",
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
      avaliacoes: "Baseado em 890 avaliações. Média: 4.5/5.0.",
    },
  },
};

export { PRODUTOS };
