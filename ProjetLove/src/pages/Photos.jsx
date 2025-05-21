import '../style/styleAll.css';
import { useState } from 'react';

import Imagem1 from '../assets/Imagem1.jpeg';
import Imagem2 from '../assets/Imagem2.jpeg';
import Imagem3 from '../assets/Imagem3.jpeg';
import Imagem4 from '../assets/Imagem4.jpeg';
import Imagem5 from '../assets/Imagem5.jpeg';
import Imagem6 from '../assets/Imagem6.jpg';
import Imagem7 from '../assets/Imagem7.jpeg';
import Imagem8 from '../assets/Imagem8.jpeg';
import Imagem9 from '../assets/Imagem9.jpeg';
import Imagem10 from '../assets/Imagem10.jpeg';
import Imagem11 from '../assets/Imagem11.jpeg';
import Imagem12 from '../assets/Imagem12.jpeg';
import Imagem13 from '../assets/Imagem13.jpeg';
import Imagem14 from '../assets/Imagem14.jpeg';
import Imagem15 from '../assets/Imagem15.jpeg';
import Imagem16 from '../assets/Imagem16.jpeg';
import Imagem17 from '../assets/Imagem17.jpeg';
import Imagem18 from '../assets/Imagem18.jpeg';
import Imagem19 from '../assets/Imagem19.png';
import Imagem20 from '../assets/Imagem20.png';
import Imagem21 from '../assets/Imagem21.png';
import Imagem22 from '../assets/Imagem22.png';


const imagens = [
  Imagem1, Imagem2, Imagem3, Imagem4, Imagem5,
  Imagem6, Imagem7, Imagem8, Imagem9, Imagem10, Imagem11, 
  Imagem12, Imagem13, Imagem14, Imagem15, Imagem16, Imagem17, Imagem18,
  Imagem19, Imagem20, Imagem21, Imagem22
];

function Photos() {
  const [fotoIndex, setFotoIndex] = useState(null);

  const abrirModal = (index) => {
    setFotoIndex(index);
  };

  const fecharModal = () => {
    setFotoIndex(null);
  };

  const proximaFoto = () => {
    setFotoIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  const fotoAnterior = () => {
    setFotoIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="photos-container">
      <h1>Álbum de fotos</h1>
      <div className="gallery">
        {imagens.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Foto ${index + 1}`}
            className="gallery-photo"
            onClick={() => abrirModal(index)}
          />
        ))}
      </div>

      {fotoIndex !== null && (
        <div className="modal" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={fecharModal}>×</button>
            <button className="nav-button left" onClick={fotoAnterior}>←</button>
            <img src={imagens[fotoIndex]} alt="Foto ampliada" />
            <button className="nav-button right" onClick={proximaFoto}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos;