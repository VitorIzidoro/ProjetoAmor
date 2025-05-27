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
      "Amor, eu estava aqui sem fazer nada e decidi fazer um poema pra você. Esse é meu primeiro poema na vida, ou seja, não vai sair grandes coisas, mas é de coração. É bom se arriscar às vezes, só assim eu vou saber se consigo ou não, então eu espero que você goste dele. \n ------------------------------------------------------------------------------------------ \n Primeiro poema de muitos <3 \n Meu amor, olhos lindos e brilhantes, \n Com um coração radiante, \nUma voz tão doce, como uma melodia, \n Meu coração palpita só te ver você chegar. \n\n\ Seu sorriso é como o sol na minha vida, \n Ilumina o meu dia e a minha noite. \nTeus abraços são como águas plácidas, \n Que me acalma e tranquiliza. \n\nOs seus carinhos é meu refúgio, \nMeu tudo, meu porto seguro. \n Seu carinho é como um lápis, \n Pois é ele que desenha o meu sorriso. \n\n Desde que te conheci, \n meu coração anseia por ti. \n Meu exílio é ficar sem meu grande amor. \n Melhor companhia só pode ser você. \n\n Minha alma se rendeu ao te ver, \n Pois amor mais lindo não se pode ter. \n Meu coração é todo seu. \n------------------------------------------------------------------------------------------",
  },
];

const timeline = [
  { data: "22/09/2024", mensagem: "O grande sim que mudou tudo." },
  {
    data: "25/12/2024",
    mensagem: "Nosso primeiro Natal juntos, cheio de amor.",
  },
  { data: "14/02/2024", mensagem: "O primeiro Dia dos Namorados." },
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
];

const frases = [
  "Você é minha paz.",
  "Amar você é fácil.",
  "Você é meu lugar seguro.",
  "Com você, tudo é melhor.",
  "Você é minha razão de ser.",
  "Sempre vou te amar.",
  "Você é minha escolha de todos os dias.",
  "Você é tudo que eu pedi a Deus.",
];

export default function NotasDeAmor() {
  const [frase, setFrase] = useState("");

  const gerarFrase = () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(aleatoria);
  };

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
      </section>

      <section className="surpresa">
        <h2>Frase surpresa</h2>
        <button onClick={gerarFrase}>Mostrar uma frase de amor</button>
        {frase && <p className="frase">{frase}</p>}
      </section>
    </div>
  );
}
