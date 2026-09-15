export type DailyVerse = {
  id: string;
  text: string;
  reference: string;
  translation: "NVI";
};

export const dailyVerses = [
  {
    id: "joao-3-16",
    text: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
    translation: "NVI",
  },
  {
    id: "salmos-23-1",
    text: "O Senhor é o meu pastor; de nada terei falta.",
    reference: "Salmos 23:1",
    translation: "NVI",
  },
  {
    id: "isaias-41-10",
    text: "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
    reference: "Isaías 41:10",
    translation: "NVI",
  },
  {
    id: "romanos-12-12",
    text: "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.",
    reference: "Romanos 12:12",
    translation: "NVI",
  },
  {
    id: "1-corintios-13-13",
    text: "Assim, permanecem agora estes três: a fé, a esperança e o amor. O maior deles, porém, é o amor.",
    reference: "1 Coríntios 13:13",
    translation: "NVI",
  },
  {
    id: "filipenses-4-6",
    text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
    reference: "Filipenses 4:6",
    translation: "NVI",
  },
  {
    id: "romanos-15-13",
    text: "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.",
    reference: "Romanos 15:13",
    translation: "NVI",
  },
] as const satisfies readonly DailyVerse[];
