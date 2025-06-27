import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
  // Props ici
}

const Confetti: React.FC<ConfettiProps> = (props) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return null; // Rien à aff
};

export default Confetti;
