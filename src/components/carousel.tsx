"use client";

import { Children, ReactNode, useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoSliding, setIsAutoSliding] = useState(true); // Controle de autorolagem
  const totalSlides = Children.count(children);

  // Função para mover para o próximo slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  // Função para mover para o slide anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Efeito para rolar automaticamente, reiniciado a cada interação manual
  useEffect(() => {
    if (!isAutoSliding) return;

    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSlide); // Limpa o intervalo ao desmontar o componente
  }, [nextSlide, isAutoSliding]);

  // Função para reiniciar a autorolagem após navegação manual
  const resetAutoSliding = () => {
    setIsAutoSliding(false); // Pausa a autorolagem
    setTimeout(() => {
      setIsAutoSliding(true); // Reinicia a autorolagem após um pequeno delay
    }, 1000); // Espera 1 segundo para reiniciar a autorolagem
  };

  // Função para lidar com início do toque ou clique (arrastar)
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartPosition(clientX);
    setIsDragging(true);
  };

  // Função para terminar o toque ou clique (determinar direção do arraste)
  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - startPosition;

    if (diff > 50) {
      prevSlide(); // deslizou para a direita, vai para o slide anterior
    } else if (diff < -50) {
      nextSlide(); // deslizou para a esquerda, vai para o próximo slide
    }

    setIsDragging(false);
    resetAutoSliding(); // Reinicia a autorolagem após interação manual
  };

  return (
    <div
      className="relative flex w-full flex-col gap-10 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd} // Para garantir que o drag pare se o mouse sair do contêiner
    >
      {/* Contêiner do carrossel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex min-w-full items-center justify-center p-6"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Indicadores de progresso (bolinhas) */}
      <div className="flex w-full justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-green" : "bg-gray"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
