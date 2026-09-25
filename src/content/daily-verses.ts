import verse01 from "./daily-verses/references/joao/3-16";
import verse02 from "./daily-verses/references/salmos/23-1";
import verse03 from "./daily-verses/references/isaias/41-10";
import verse04 from "./daily-verses/references/romanos/12-12";
import verse05 from "./daily-verses/references/1-corintios/13-13";
import verse06 from "./daily-verses/references/filipenses/4-6";
import verse07 from "./daily-verses/references/romanos/15-13";
import verse08 from "./daily-verses/references/salmos/119-105";
import verse09 from "./daily-verses/references/proverbios/3-5";
import verse10 from "./daily-verses/references/mateus/11-28";
import verse11 from "./daily-verses/references/filipenses/4-13";
import verse12 from "./daily-verses/references/salmos/46-1";
import verse13 from "./daily-verses/references/salmos/37-5";
import verse14 from "./daily-verses/references/1-pedro/5-7";
import verse15 from "./daily-verses/references/hebreus/13-8";
import verse16 from "./daily-verses/references/joao/14-6";
import verse17 from "./daily-verses/references/2-corintios/5-17";
import verse18 from "./daily-verses/references/galatas/5-22-23";
import verse19 from "./daily-verses/references/mateus/6-33";
import verse20 from "./daily-verses/references/romanos/8-28";
import verse21 from "./daily-verses/references/josue/1-9";
import verse22 from "./daily-verses/references/salmos/34-8";
import verse23 from "./daily-verses/references/salmos/51-10";
import verse24 from "./daily-verses/references/salmos/56-3";
import verse25 from "./daily-verses/references/salmos/118-24";
import verse26 from "./daily-verses/references/salmos/121-1-2";
import verse27 from "./daily-verses/references/salmos/147-3";
import verse28 from "./daily-verses/references/proverbios/4-23";
import verse29 from "./daily-verses/references/proverbios/16-3";
import verse30 from "./daily-verses/references/proverbios/17-17";
import verse31 from "./daily-verses/references/eclesiastes/3-1";
import verse32 from "./daily-verses/references/isaias/40-31";
import verse33 from "./daily-verses/references/isaias/43-2";
import verse34 from "./daily-verses/references/jeremias/29-11";
import verse35 from "./daily-verses/references/lamentacoes/3-22-23";
import verse36 from "./daily-verses/references/mateus/5-14";
import verse37 from "./daily-verses/references/mateus/7-7";
import verse38 from "./daily-verses/references/mateus/19-26";
import verse39 from "./daily-verses/references/marcos/9-23";
import verse40 from "./daily-verses/references/lucas/1-37";
import verse41 from "./daily-verses/references/joao/8-12";
import verse42 from "./daily-verses/references/joao/16-33";
import verse43 from "./daily-verses/references/romanos/8-31";
import verse44 from "./daily-verses/references/romanos/10-17";
import verse45 from "./daily-verses/references/1-corintios/10-31";
import verse46 from "./daily-verses/references/2-corintios/12-9";
import verse47 from "./daily-verses/references/galatas/6-9";
import verse48 from "./daily-verses/references/efesios/4-32";
import verse49 from "./daily-verses/references/filipenses/4-4";
import verse50 from "./daily-verses/references/colossenses/3-23";
import verse51 from "./daily-verses/references/1-tessalonicenses/5-16-18";
import verse52 from "./daily-verses/references/salmos/27-14";
import verse53 from "./daily-verses/references/romanos/12-21";
import verse54 from "./daily-verses/references/1-tessalonicenses/5-21";
import verse55 from "./daily-verses/references/mateus/5-9";
import verse56 from "./daily-verses/references/tiago/1-19";
import verse57 from "./daily-verses/references/salmos/27-13";
import verse58 from "./daily-verses/references/romanos/12-18";
import verse59 from "./daily-verses/references/1-tessalonicenses/5-22";
import verse60 from "./daily-verses/references/mateus/5-7";
import verse61 from "./daily-verses/references/lucas/6-36";
import verse62 from "./daily-verses/references/romanos/12-9";
import verse63 from "./daily-verses/references/romanos/12-10";
import verse64 from "./daily-verses/references/romanos/12-11";
import verse65 from "./daily-verses/references/romanos/12-13";
import verse66 from "./daily-verses/references/romanos/12-14";
import verse67 from "./daily-verses/references/romanos/12-15";
import verse68 from "./daily-verses/references/romanos/12-17";
import verse69 from "./daily-verses/references/1-tessalonicenses/5-6";
import verse70 from "./daily-verses/references/1-tessalonicenses/5-11";
import verse71 from "./daily-verses/references/1-tessalonicenses/5-19";
import verse72 from "./daily-verses/references/1-tessalonicenses/5-20";
import verse73 from "./daily-verses/references/1-tessalonicenses/5-25";
import verse74 from "./daily-verses/references/1-tessalonicenses/5-28";
import verse75 from "./daily-verses/references/mateus/5-3";
import verse76 from "./daily-verses/references/mateus/5-4";
import verse77 from "./daily-verses/references/mateus/5-5";
import verse78 from "./daily-verses/references/mateus/5-6";
import verse79 from "./daily-verses/references/mateus/5-8";
import verse80 from "./daily-verses/references/mateus/5-10";
import verse81 from "./daily-verses/references/tiago/1-4";
import verse82 from "./daily-verses/references/tiago/1-5";
import verse83 from "./daily-verses/references/tiago/1-16";
import verse84 from "./daily-verses/references/tiago/1-20";
import verse85 from "./daily-verses/references/tiago/1-22";
import verse86 from "./daily-verses/references/proverbios/15-1";
import verse87 from "./daily-verses/references/proverbios/15-3";
import verse88 from "./daily-verses/references/proverbios/15-13";
import verse89 from "./daily-verses/references/proverbios/15-17";
import verse90 from "./daily-verses/references/proverbios/15-22";
import verse91 from "./daily-verses/references/proverbios/15-23";

export type DailyVerse = {
  id: string;
  text: string;
  reference: string;
  translation: "NAA";
};

export const dailyVerses = [
  verse01,
  verse02,
  verse03,
  verse04,
  verse05,
  verse06,
  verse07,
  verse08,
  verse09,
  verse10,
  verse11,
  verse12,
  verse13,
  verse14,
  verse15,
  verse16,
  verse17,
  verse18,
  verse19,
  verse20,
  verse21,
  verse22,
  verse23,
  verse24,
  verse25,
  verse26,
  verse27,
  verse28,
  verse29,
  verse30,
  verse31,
  verse32,
  verse33,
  verse34,
  verse35,
  verse36,
  verse37,
  verse38,
  verse39,
  verse40,
  verse41,
  verse42,
  verse43,
  verse44,
  verse45,
  verse46,
  verse47,
  verse48,
  verse49,
  verse50,
  verse51,
  verse52,
  verse53,
  verse54,
  verse55,
  verse56,
  verse57,
  verse58,
  verse59,
  verse60,
  verse61,
  verse62,
  verse63,
  verse64,
  verse65,
  verse66,
  verse67,
  verse68,
  verse69,
  verse70,
  verse71,
  verse72,
  verse73,
  verse74,
  verse75,
  verse76,
  verse77,
  verse78,
  verse79,
  verse80,
  verse81,
  verse82,
  verse83,
  verse84,
  verse85,
  verse86,
  verse87,
  verse88,
  verse89,
  verse90,
  verse91,
] as const satisfies readonly DailyVerse[];
