import { CheckCircle2, Clock, Heart, Sparkles } from "lucide-react";

export interface Service {
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
}


export type ServiceCategory = {
  title: string;
  services: Service[];
};

export const services: ServiceCategory[] = [
  {
    title: "Laserová epilácia",
    services: [
      {
        title: "Laserová epilácia - Horná pera",
        desc: "Odstránenie chĺpkov v oblasti hornej pery.",
        price: "15€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Brada",
        desc: "Efektívne odstránenie chĺpkov v oblasti brady.",
        price: "25€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Celá tvár",
        desc: "Kompletné ošetrenie celej tváre.",
        price: "45€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Podpazušie",
        desc: "Hladká pokožka bez podráždenia.",
        price: "45€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Ruky po lakte",
        desc: "Odstránenie chĺpkov na rukách po lakte.",
        price: "55€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Celé ruky",
        desc: "Kompletné ošetrenie rúk.",
        price: "65€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Brucho",
        desc: "Ošetrenie oblasti brucha.",
        price: "40€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Bikiny",
        desc: "Úprava oblasti bikín.",
        price: "55€",
        icon: <Heart className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Hlboké bikiny",
        desc: "Intímna epilácia pre maximálnu hladkosť.",
        price: "90€",
        icon: <Heart className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Nohy po kolená",
        desc: "Ošetrenie dolnej časti nôh.",
        price: "70€",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        title: "Laserová epilácia - Celé nohy",
        desc: "Kompletné ošetrenie nôh.",
        price: "90€",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        title:
          "Laserová epilácia - Balík (hlboké bikiny + celé nohy + podpazušie)",
        desc: "Výhodný balík pre kompletnú starostlivosť.",
        price: "196€",
        icon: <CheckCircle2 className="w-6 h-6" />,
      },
    ],
  },
  {
    title: "Kozmetológia",
    services: [
      {
        title: "Ošetrenie pleti + čistenie + peeling",
        desc: "Podľa typu pleti pre zdravý vzhľad.",
        price: "70€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Hĺbkové čistenie pleti + maska",
        desc: "Dôkladné čistenie s výživnou maskou.",
        price: "60€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Masáž tváre a dekoltu + maska",
        desc: "Relaxačné ošetrenie pre pleť.",
        price: "60€",
        icon: <Heart className="w-6 h-6" />,
      },
      {
        title: "Ošetrenie aknóznej pleti",
        desc: "Diagnostika, čistenie a profesionálne ošetrenie.",
        price: "80€",
        icon: <CheckCircle2 className="w-6 h-6" />,
      },
    ],
  },
  {
    title: "Aparatívna kozmetológia",
    services: [
      {
        title: "Fotoomladenie tváre",
        desc: "Zlepšenie kvality pleti pomocou svetla.",
        price: "80€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Fotoomladenie krku",
        desc: "Omladenie pokožky krku.",
        price: "50€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Fotoomladenie dekoltu",
        desc: "Zlepšenie vzhľadu dekoltu.",
        price: "50€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Odstránenie rosacey",
        desc: "Redukcia začervenania a cievok.",
        price: "79€",
        icon: <Heart className="w-6 h-6" />,
      },
      {
        title: "Odstránenie pigmentácie",
        desc: "Zjednotenie tónu pleti.",
        price: "79€",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        title: "Odstránenie cievok (10 cm)",
        desc: "Cielené odstránenie drobných cievok.",
        price: "45€",
        icon: <CheckCircle2 className="w-6 h-6" />,
      },
    ],
  },
];