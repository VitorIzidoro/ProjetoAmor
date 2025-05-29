import React, { useState } from "react";

const cartas = [
  {
    titulo: "A primeira declaração",
    texto: `E você está me ajudando a passar por isso, porque quando eu converso com você, parece que eu conheço você faz mó tempo, e você me faz muito bem. Me sinto outra pessoa perto de você, me sinto uma pessoa boa. Você pode não acreditar, mas desde que você entrou na minha vida, muita coisa boa vem acontecendo. \n E eu nunca vou esquecer do que você fez na minha vida durante essas três semanas que a gente conversa. \n Te amo muito, mas eu geralmente não consigo expressar isso.`,
  },
  {
    titulo: "Primeiro Texto de amor",
    texto:
      'Maria, eu vou tentar expressar todo o meu amor que sinto por você, mas eu sei que não existem palavras que possam expressar tudo isso. Eu sei que você merece muito mais que isso, mas é o que eu consigo lhe oferecer neste momento. \n Antes de conhecer você, eu nunca achei que iria me apaixonar de novo. Mas o amor que sinto por você, nunca senti por nenhuma garota antes. Nesses últimos dias, você tem sido a única pessoa que consegue me alegrar. Você tem sido um ponto de apoio pra mim, pois, graças às suas dicas e conselhos, eu consigo ser uma pessoa melhor a cada dia. E o seu sorriso, que aliás eu não vejo há um tempo, faz o meu dia mais feliz. O seu olhar me faz pensar que não existe coisa melhor do que estar ao seu lado. O seu olhar me deixa de um jeito que eu não consigo explicar. Você tem sido a causa do meu coração bater mais forte. Antes de conhecer você, eu não tinha planos para o futuro, mas agora que conheci você, não consigo mais planejar os meus projetos nem ver minha vida sem você. \n Às vezes, eu fico me perguntando o quão grande é esse amor que eu sinto por você. É um amor tão grande que eu chego a ficar com medo de você me deixar algum dia, de você parar de gostar de mim por causa das minhas brincadeiras ou do meu jeito. Mas eu confio em você e sei que nunca faria isso comigo. Por causa dessa segurança e fidelidade que você vem mostrando a cada "bom dia" ou a cada "boa noite", eu já sei com quem eu quero passar o resto da minha vida. Com quem eu quero beijar todos os dias e falar o quanto eu amo, sentir aquele calor, sentir o amor. Com quem eu quero abraçar e me sentir seguro e amado. \n Eu também prometo nunca deixar você. Eu vou ficar ao seu lado, mesmo nos momentos bons e nos momentos ruins. Não vou deixar você, e a gente vai passar junto por todas as barreiras que estiverem em nosso caminho, juntos com o nosso Senhor Jesus. \n Bom, eu não tenho mais palavras pra descrever o quanto eu te amo. Não adianta eu escrever um texto pra você ficar lendo por horas, porque, mesmo assim, não é o suficiente pra expressar o meu grande amor por você. \n TE AMO MUITO ❤️',
  },
  {
    titulo: "O Primeiro Poema",
    texto:
      "Amor, eu estava aqui sem fazer nada e decidi fazer um poema pra você. Esse é meu primeiro poema na vida, ou seja, não vai sair grandes coisas, mas é de coração. É bom se arriscar às vezes, só assim eu vou saber se consigo ou não, então eu espero que você goste dele. \n ------------------------------------------------------------------------------------------ \n Primeiro poema de muitos <3 \n Meu amor, olhos lindos e brilhantes, \n Com um coração radiante, \nUma voz tão doce, como uma melodia, \n Meu coração palpita só te ver você chegar. \n\n\ Seu sorriso é como o sol na minha vida, \n Ilumina o meu dia e a minha noite. \nTeus abraços são como águas plácidas, \n Que me acalma e tranquiliza. \n\nOs seus carinhos é meu refúgio, \nMeu tudo, meu porto seguro. \n Seu carinho é como um lápis, \n Pois é ele que desenha o meu sorriso. \n\n Desde que te conheci, \n meu coração anseia por ti. \n Meu exílio é ficar sem meu grande amor. \n Melhor companhia só pode ser você. \n\n Minha alma se rendeu ao te ver, \n Pois amor mais lindo não se pode ter. \n Meu coração é todo seu. \n------------------------------------------------------------------------------------------ \n Eu fiz isso só pra mostrar mais uma vez o quanto eu sou apaixonado por você. Me arrisquei no português só pra te deixar feliz. Eu espero que goste dele. Não é o melhor que você já leu, mas eu fiz do meu jeitinho único e de dentro do coração. \n\n EU TE AMO MUITO MEU AMOR ❤️❤️❤️",
  },
];

const timeline = [
  { data: "29/05/2024", mensagem: "As primeiras linhas de um amor sem fim." },
  { data: "19/06/2024", mensagem: "A primeira declaração de amor." },
  { data: "08/09/2024", mensagem: "Conhecer os avós." },
  { data: "15/09/2024", mensagem: "Conhecendo os sogros." },
  { data: "22/09/2024", mensagem: "O grande sim que mudou tudo." },
  { data: "25/10/2024", mensagem: "O meu aniversário." },
  { data: "01/11/2024", mensagem: "O primeiro poema de amor." },
  { data: "25/12/2024", mensagem: "Nosso primeiro Natal juntos, cheio de amor." },
  { data: "08/03/2025", mensagem: "O Aniversario da gata." },
];

const coisasQueAmo = [
  "Seu sorriso que ilumina tudo.",
  "O jeitinho que você me olha.",
  "Como você cuida de mim.",
  "Seu abraço que é meu lugar favorito.",
  "Seu coração gigante.",
  "Seu amor que me faz sentir em casa.",
  "Seu jeito de me fazer rir.",
  "Seus beijos que me fazem sentir vivo.",
  "Seu amor que me faz querer ser melhor.",
  "Seu carinho que me faz sentir amado.",
  "Amo como você sempre me motiva a não desistir.",
  "Seu amor que me faz sentir seguro.",
  "Amo o seu jeito de me fazer sentir especial.",
  "Seu jeito doce e delicado.",
  "Amo cada segundo ao seu lado.",
  "Sua doce voz",
  "Sua companhia de todos os dias.",
  "Amo quando você me faz mostra o melhor caminho.",
  "Seu amor que aquece o meu coração.",
  "Quando você me ajuda a resolve todos os meus problemas.",
];




function NotasDeAmor() {
   const frasesProntas = [
      "1 - Você é a razão do meu sorriso todos os dias. ❤️",
      "2 - Te encontrar foi o melhor presente que a vida me deu.",
      "3 - Com você, tudo faz sentido.",
      "4 - Seu abraço é meu lugar favorito no mundo.",
      "5 - Te amar é tão natural quanto respirar.",
      "6 - Você transforma meus dias comuns em momentos incríveis.",
      "7 - Cada segundo ao seu lado é precioso.",
      "8 - Meu coração é completamente seu.",
      "9 - Você é minha paz.",
      "10 - Amar você é fácil.",
      "11 - Você é meu lugar seguro.",
      "12 - Com você, tudo é melhor.",
      "13 - Você é minha razão de ser.",
      "14 - Sempre vou te amar.",
      "15 - Você é minha escolha de todos os dias.",
      "16 - Você é tudo que eu pedi a Deus.",
      "17 - Amo como você cuida de mim mesmo sem perceber",
      "18 - Você é minha inspiração.",
      "19 - Você é minha luz.",
      "20 - Você é minha vida.",
      "21 - Amo quando você me chama de 'meu amor' com tanta verdade.",
      "22 - Você é minha melhor amiga.",
      "23 - Amo sua determinação.",
      "24 - Você é minha força.",
      "25 - Você é minha razão de viver.",
      "26 - Amo seu cheirinho que me faz sentir saudade quando você não está.",
      "27 - Amo o jeito como você me faz sentir amado.",
      "28 - Amo simplesmente... tudo em você.",
      "29 - Amo como você é intensa, verdadeira e doce.",
      "30 - Amo o jeito que você fica quando está apaixonada.",

    ];
  
    const [indice, setIndice] = useState(0);
  
    const mostrarProximaFrase = () => {
      if (indice < frasesProntas.length - 1) {
        setIndice(indice + 1);
      } else {
        alert("Você já viu todas as frases. 💖");
      }
    };
  
    const mostrarFraseAnterior = () => {
      if (indice > 0) { 
        setIndice(indice - 1);
        } else {
          alert("Você já viu a primeira frase. 😊");
    }
    }
  

  return (
    <div className="notas-page">
      <h1>Notas de Amor 💌</h1>

      <section className="cartas">
        <h2>Cartas para Você</h2>
        <div className="cartas-grid">
          {cartas.map((carta, index) => (
            <details className="carta" key={index}>
              <summary>{carta.titulo}</summary>
              <p style={{ whiteSpace: "pre-line" }}>{carta.texto}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>Nossa Linha do Amor</h2>
        <ul>
          {timeline.map((item, index) => (
            <li key={index}>
              <strong>{item.data}</strong> — {item.mensagem}
            </li>
          ))}
        </ul>
      </section>

      <section className="coisas">
        <h2>Coisas que eu amo em você</h2>
        <ul>
          {coisasQueAmo.map((coisa, index) => (
            <li key={index}>❤️ {coisa}</li>
          ))}
        </ul>
        <p>Eu poderia passar cada segundo da minha vida te elogiando, dizendo o quanto te admiro e o quanto você é especial pra mim.<br></br>Eu te amo muito❤️</p>
      </section>

      <section>
      <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Notas de Amor 💌</h2>

      <p
        style={{
          fontStyle: "italic",
          fontSize: "1.2rem",
          backgroundColor: "#fce4ec",
          padding: "15px",
          borderRadius: "8px",
          color: "#880e4f",
        }}
      >
        {frasesProntas[indice]}
      </p>
<div className="button-group">

      <button className="buttonNext"
        onClick={mostrarFraseAnterior}
        >
        Ver frase Anterior 💬
      </button>

      <button className="buttonBefore"
        onClick={mostrarProximaFrase} 
        >
        Ver próxima frase 💬
      </button>
          </div>

    </div>
      </section>

    </div>
  );
}

export default NotasDeAmor