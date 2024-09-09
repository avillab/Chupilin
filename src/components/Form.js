import React, { useState } from "react";
import Question from "./Question";
import ContentPage from "./ContentPage";
import MemoryGame from "./MemoryGame";
import FinalStep from "./FinalStep";
import ProposalPage from "./ProposalPage";
import Paper from "@mui/material/Paper";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles.css";

const flow = [
  {
    id: 1,
    type: "content",
    text: "¡Bienvenido a este cuestionario sobre Sabores! 🍕🍣🍫\
        Nos encanta la comida, y queremos saber más sobre tus gustos culinarios. A través de estas preguntas, exploraremos tus preferencias de sabores, platos favoritos y experiencias en la cocina.\
        Relájate y disfruta de este viaje por tus gustos gastronómicos. ¡Porque no hay nada mejor que compartir nuestra pasión por la buena comida!",
  },
  { id: 3, type: "text", text: "¿Qué plato te recuerda a tu infancia?" },

  {
    id: 4,
    type: "multiple-choice",
    text: "¿Eres más de cocinar en casa o de comer fuera?",
    options: [
      "Cocinar en casa",
      "Comer fuera",
      "Ambos",
      "Depende de la ocasión",
    ],
  },
  {
    id: 5,
    type: "content",
    text: "Dato curioso: ¡El chocolate se considera un alimento afrodisíaco!",
    image: "/images/chocolat.jpeg",
  },

  { id: 6, type: "text", text: "¿Cuál es tu postre favorito y por qué?" },
  {
    id: 7,
    type: "multiple-choice",
    text: "¿Cómo tomas tu café?",
    options: ["Solo", "Con leche", "Con azúcar", "No tomo café"],
  },
  {
    id: 8,
    type: "text",
    text: "Describe tu comida ideal para una noche especial.",
  },
  {
    id: 9,
    type: "multiple-choice",
    text: "Si solo pudieras comer un tipo de comida el resto de tu vida, ¿cuál sería?",
    options: ["Italiana", "Japonesa", "Mexicana", "Mediterránea"],
  },
  {
    id: 11,
    type: "text",
    text: "¿Hay algún alimento que nunca probarías? ¿Cuál y por qué?",
  },
  {
    id: 12,
    type: "multiple-choice",
    text: "¿Qué tanto te gusta probar comidas nuevas?",
    options: [
      "Me encanta",
      "Depende del platillo",
      "Prefiero lo conocido",
      "No me gusta probar cosas nuevas",
    ],
  },
  {
    id: 13,
    type: "text",
    text: "Si pudieras aprender a cocinar cualquier platillo a la perfección, ¿cuál elegirías?",
  },
  {
    id: 14,
    type: "multiple-choice",
    text: "¿Cuál es tu bebida favorita para acompañar una buena comida?",
    options: ["Agua", "Bebidas gaseosas", "Vino", "Cerveza"],
  },
  {
    id: 15,
    type: "multiple-choice",
    text: "¿Algúna vez te han agarrado, pegado, azotado tus papás por no comer?",
    options: ["Si", "No"],
  },
  {
    id: 16,
    type: "text",
    text: "¿Si comiste 7000 calorías, y vas al gym a las 4 de la mañana ( a una temperatura de 7 grados celcius) , cuánto te demoras en quemarlas?",
  },
  {
    id: 17,
    type: "multiple-choice",
    text: " ¿Te tirarías un pedo ácido frente a tu pareja?",
    options: ["Si", "No","No, uno dulce"],
  },
  {
    id: 18,
    type: "content",
    text: "Tirarse pedos frente a la pareja es saludable, y ayuda a comprender el gusto del otro.",
    image: "/images/chikisfart.jpeg",
  },
  {
    id: 19,
    type: "multiple-choice",
    text: "¿Quién es la niña más linda e inteligente del mundo?",
    options: ["Mi chikis", "La Reyna de Monaco","Mi chikis otra vez"],
  },
  {
    id: 20,
    type: "multiple-choice",
    text: "¿Cuándo fué nuestra primera cita?",
    options: ["2024-05-27", "20204-03-06","2024-03-07"],
  },
  {
    id: 21,
    type: "content",
    text: "Mi chikis y yo nos amamos musho",
    image: "/images/eche4.jpg",
  },
  {
    id: 22,
    type: "multiple-choice",
    text: "¿Porqué cuando mi chikis me ama mucho me quiere espichar?",
    options: ["Nos amamos", "Nos amamos musho","Nos amamos musho musho","Sólo me quiere espichar"],
  },
  {
    id: 23,
    type: "content",
    text: "Me encantas demasiado demasiado",
    image: "/images/gif.gif",
  },
  {
    id: 24,
    type: "content",
    text: "Eres espectacular, no existe nadie como tú en este mundo. Nadie.",
    image: "/images/image1.jpg",
  },
  {
    id: 25,
    type: "content",
    text: "Amo a tu familia, me hacen sentir como si fuera la mía, y lo serán.",
    image: "/images/chikisfamilia.jpg",
    
  },
  {
    id: 31,
    type: "content",
    text: "Foto de la nevera porque cómo no la voy a poner aquí",
    image: "/images/chikisnevera.jpg",
  },
  { id: 3, type: "memory-game" },
  {
    id: 26,
    type: "content",
    text: "Contigo cualquier cosa que pasa, se vuelve lo mejor del mundo. Me haces muy felí",
    image: "/images/image3.jpg",
  },
  {
    id: 27,
    type: "content",
    text: "Hasta comer tajá con mi chikis es lo mejor.",
    image: "/images/chikiscomiendo.jpg",
  },
  {
    id: 28,
    type: "content",
    text: "Mi chikis y yo, yo y mi chikis",
    image: "/images/image7.jpg",
  },
  {
    id: 29,
    type: "content",
    text: "Amandonos forever and ever",
    image: "/images/image10.jpg",
  },
  {
    id: 30,
    type: "content",
    text: "Nuestra primera foto :)",
    image: "/images/primerafoto.jpg",
  },
  {
    id: 31,
    type: "content",
    text: "Eres la cosita más tierna del mundo mundial",
    image: "/images/chikisriendose.png",
  },
  {
    id: 32,
    type: "content",
    text: "TE AMO",
  },
  
];

function Form() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProposal, setShowProposal] = useState(false);

  const handleNext = () => {
    if (currentIndex + 1 === flow.length) {
      setShowProposal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleYes = () => {
    // Handle the "Yes" response - this could be an alert, transition to a final step, etc.
    alert("Casi que no jeje");
    handleNext();
  };

  if (showProposal) {
    return <ProposalPage onYes={handleYes} />;
  }

  const currentItem = flow[currentIndex];

  return (
    <Paper
      elevation={3}
      style={{
        padding: "40px 20px",
        margin: "20px auto",
        maxWidth: "500px",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TransitionGroup>
        {currentIndex < flow.length ? (
          <CSSTransition key={currentIndex} timeout={500} classNames="fade">
            {currentItem.type === "content" ? (
              <ContentPage content={currentItem} onNext={handleNext} />
            ) : currentItem.type === "memory-game" ? (
              <MemoryGame onGameComplete={handleNext} />
            ) : (
              <Question question={currentItem} onNext={handleNext} />
            )}
          </CSSTransition>
        ) : (
          <CSSTransition timeout={500} classNames="fade">
            <FinalStep />
          </CSSTransition>
        )}
      </TransitionGroup>
    </Paper>
  );
}

export default Form;
