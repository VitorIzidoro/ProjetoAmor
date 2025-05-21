import React from 'react';
import '../style/styleAll.css'
import Imagem11 from '../assets/Imagem11.jpeg';
import Imagem1 from '../assets/Imagem1.jpeg';
import Imagem14 from '../assets/Imagem14.jpeg';

const LoveNotes = () => {
  // Dados de exemplo - substitua pelos seus dados reais
  const aniversario = {
    titulo: "Nosso Primeiro Ano de Amor",
    mensagemBoasVindas: "365 dias de muitas alegrias, aprendizados e amor! Que venham muitos mais!",
    linhaDoTempo: [
      { data: "Setembro de 2024", evento: "O pedido de namoro", foto: Imagem11 },
      { data: "Dezembro de 2024", evento: "Natal Do amor", foto: Imagem14 },
      { data: "Fevereiro de 2025", evento: "Nosso primeiro Passeio Marcante", foto: Imagem1 },
      // Adicione mais momentos aqui
    ],
    nossaHistoria: "Aqui vocês podem escrever um texto mais longo sobre como se conheceram e o primeiro ano juntos.",
    galeriaFotos: [
      "url_da_sua_foto4.jpg",
      "url_da_sua_foto5.jpg",
      "url_da_sua_foto6.jpg",
      // Adicione mais URLs de fotos
    ],
    nossasMusicas: [
      { titulo: "Música 1", artista: "Artista 1", link: "url_da_musica1" },
      { titulo: "Música 2", artista: "Artista 2", link: "url_da_musica2" },
      // Adicione mais músicas
    ],
    mensagemParaMim: "Sua mensagem especial para a pessoa amada.",
    mensagemParaVoce: "A mensagem especial da pessoa amada para você.",
  };

  return (
    <div className='container'>
      <header>
        <h1>{aniversario.titulo}</h1>
        <p>{aniversario.mensagemBoasVindas}</p>
      </header>

      <section>
        <h2>Nossa Linha do Tempo</h2>
        <div className='timelineContainer'>
          {aniversario.linhaDoTempo.map((momento, index) => (
            <div key={index} className='timelineItem'>
              <h3>{momento.data}</h3>
              <img src={momento.foto} alt={momento.evento} className='timelineImage'  />
              <p>{momento.evento}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Nossa História</h2>
        <p>{aniversario.nossaHistoria}</p>
      </section>

      <section>
        <h2>Nossa Galeria de Fotos</h2>
        <div className='galleryContainer'>
          {aniversario.galeriaFotos.map((foto, index) => (
            <img key={index} src={foto} alt={`Foto ${index + 1}`} className='galleryContainer'/>
          ))}
        </div>
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
        <p>Comemorando nosso primeiro ano juntos com muito amor! ❤️</p>
      </footer>
    </div>
  );
};

export default LoveNotes