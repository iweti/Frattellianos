export type DailyVerse = {
  id: string;
  text: string;
  reference: string;
  translation: "NAA";
};

export const dailyVerses = [
  {
    id: "joao-3-16",
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
    translation: "NAA",
  },
  {
    id: "salmos-23-1",
    text: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
    translation: "NAA",
  },
  {
    id: "isaias-41-10",
    text: "Não tema, porque eu estou com você; não fique com medo, porque eu sou o seu Deus. Eu lhe dou forças; sim, eu o ajudo; sim, eu o seguro com a mão direita da minha justiça.",
    reference: "Isaías 41:10",
    translation: "NAA",
  },
  {
    id: "romanos-12-12",
    text: "Alegrem-se na esperança, sejam pacientes na tribulação e perseverem na oração.",
    reference: "Romanos 12:12",
    translation: "NAA",
  },
  {
    id: "1-corintios-13-13",
    text: "Agora, pois, permanecem a fé, a esperança e o amor, estes três; porém o maior deles é o amor.",
    reference: "1 Coríntios 13:13",
    translation: "NAA",
  },
  {
    id: "filipenses-4-6",
    text: "Não fiquem preocupados com coisa alguma, mas, em tudo, sejam conhecidos diante de Deus os pedidos de vocês, pela oração e pela súplica, com ações de graças.",
    reference: "Filipenses 4:6",
    translation: "NAA",
  },
  {
    id: "romanos-15-13",
    text: "E o Deus da esperança encha vocês de toda alegria e paz na fé que vocês têm, para que sejam ricos de esperança no poder do Espírito Santo.",
    reference: "Romanos 15:13",
    translation: "NAA",
  },
] as const satisfies readonly DailyVerse[];
