import React from "react";
import "../style/styleAll.css";
import Imagem11 from "../assets/Imagem11.jpeg";
import Imagem1 from "../assets/Imagem1.jpeg";
import Imagem14 from "../assets/Imagem14.jpeg";
import  { useState } from "react";


const LoveNotes = () => {
  const frasesProntas = [
    "Você é a razão do meu sorriso todos os dias. ❤️",
    "Te encontrar foi o melhor presente que a vida me deu.",
    "Com você, tudo faz sentido.",
    "Seu abraço é meu lugar favorito no mundo.",
    "Te amar é tão natural quanto respirar.",
    "Você transforma meus dias comuns em momentos incríveis.",
    "Cada segundo ao seu lado é precioso.",
    "Meu coração é completamente seu.",
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

  const aniversario = {
    titulo: "Nosso Primeiro Ano de Amor",
    mensagemBoasVindas:
      "365 dias de muitas alegrias, aprendizados e amor! Que venham muitos mais!",
    linhaDoTempo: [
      {
        data: "Setembro de 2024",
        evento: "O pedido de namoro",
        foto: Imagem11,
      },
      { data: "Dezembro de 2024", evento: "Natal Do amor", foto: Imagem14 },
      {
        data: "Fevereiro de 2025",
        evento: "Nosso primeiro Passeio Marcante",
        foto: Imagem1,
      },
      // Adicione mais momentos aqui
    ],
    nossaHistoria: `Era um dia comum na escola, daqueles que a gente não espera nada demais… até que o destino resolveu brincar de amor. Era dia de SENAI, e entre idas e vindas pelos corredores, eu e ela, eu e meu amor, minha princesa, meu doce encanto, trocamos mais que olhares. Trocas sutis, mas que diziam muito. Algo ali já brilhava no ar. A verdade é que nossos olhos já se procuravam há um tempo. Aquele olhar dela, tímido e curioso, já fazia meu coração bater diferente. E naquele dia, foi como se o universo sussurrasse: é ela, o amor da sua vida.\nO tempo foi passando, e o que a gente sentia só aumentava, como algo raro que se cuida com carinho e muita paciência. No dia 22 de setembro, bateu aquele nervosismo bom no peito, eu juntei toda minha coragem, o coração acelerado e algumas palavras sinceras pra pedir, o meu grande Amor, minha amada, meu anjo, em namoro. E ela disse sim. Foi ali que nossa verdadeira jornada tinha acabado de se iniciar.\nEm um ano, vivemos o que muita gente levaria anos pra entender. Descobrimos juntos lugares novos, sabores, risos… e até alguns silêncios que dizem muita coisa. Cada abraço, cada beijo, cada troca de carinho virou parte de um laço que se fortalece a cada dia.\nJá me perguntaram o que eu amo nela, mas é impossível escolher só uma coisa. Amo o jeito dela, ela é muito carinhosa, atenciosa, cheia de vida. Amo seu sorriso, aquele que ilumina meu dia sem esforço. Amo seus olhos, que falam comigo mesmo quando estão quietos. Seus abraços são meu refúgio, e seus beijos... ah, eles têm gosto de casa, familia, amor e muito carinho. Mas o que mais me toca é o coração lindo que ela tem. Um coração puro, bom, que me faz querer ser melhor todos os dias.\NEU TE AMO MARIA CLARA DUARTE DIONYSIO ❤️❤️❤️❤️!!!!!!!!!!`,

    nossasMusicas: [
      { titulo: "Música 1", artista: "Artista 1", link: "url_da_musica1" },
      { titulo: "Música 2", artista: "Artista 2", link: "url_da_musica2" },
      // Adicione mais músicas
    ],
    mensagemParaMim: "Sua mensagem especial para a pessoa amada.",
    mensagemParaVoce: "A mensagem especial da pessoa amada para você.",
  };

  return (
    <div className="container">
      <header>
        <h1>{aniversario.titulo}</h1>
        <p>{aniversario.mensagemBoasVindas}</p>
      </header>

      <section>
        <h2>Nossa Linha do Tempo</h2>
        <div className="timelineContainer">
          {aniversario.linhaDoTempo.map((momento, index) => (
            <div key={index} className="timelineItem">
              <h3>{momento.data}</h3>
              <img
                src={momento.foto}
                alt={momento.evento}
                className="timelineImage"
              />
              <p>{momento.evento}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Nossa História</h2>
        <p style={{ whiteSpace: "pre-line" }}>{aniversario.nossaHistoria}</p>
      </section>

      <section>
        <h2>Mensagens Especiais</h2>
        <div>
          <h3>Para Mim</h3>
          <p>{aniversario.mensagemParaMim}</p>
        </div>
        <div>
          <h3>Para Você</h3>
          <p>{aniversario.mensagemParaVoce}</p>
        </div>
      </section>

      <footer>
        <p style={{textAlign : "left"}}>
          Hoje, comemoramos um ano. Um ano de amor, de parceria, de aprendizados
          e sonhos. Um ano onde cada momento valeu a pena. E o melhor de tudo?
          Isso é só o começo. Feliz 1 ano de nós, minha Mulher. Que venham muitos
          outros, com mais risos, mais planos, mais amor. Porque com você, a
          vida é muito mais bonita.</p>
          <p> Com todo o meu amor, Teu Vitor, teu namorado, teu eterno apaixonado. 💌
        </p>
      </footer>

    </div>
  );
};


export default LoveNotes;
