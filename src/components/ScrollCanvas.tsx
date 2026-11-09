"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface VideoCanvasProps {
  totalFrames?: number;
  speed?: number; // Frames por segundo de avanço (calibrado para slow-motion)
  loop?: boolean;
}

export function ScrollCanvas({
  totalFrames = 76,
  speed = 10.5, // Slow-motion cinematográfico profissional (aprox. 7.2s por rotação completa)
  loop = true,
}: VideoCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedFramesRef = useRef<boolean[]>([]);

  // Posição temporal contínua float para interpolação suave
  const currentPosRef = useRef<number>(1);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const [initialLoaded, setInitialLoaded] = useState(false);

  // Helper para URL com encoding seguro
  const getFrameUrl = useCallback((index: number) => {
    return `/imagens/img (${index}).png`;
  }, []);

  // Helper para encontrar o frame carregado mais próximo no cache
  const getNearestLoaded = useCallback(
    (index: number) => {
      const safe = Math.max(1, Math.min(totalFrames, Math.round(index)));
      if (loadedFramesRef.current[safe] && imagesRef.current[safe]) {
        return imagesRef.current[safe];
      }
      let nearestDist = Infinity;
      let nearestIdx = -1;
      for (let i = 1; i <= totalFrames; i++) {
        if (loadedFramesRef.current[i] && imagesRef.current[i]) {
          const dist = Math.abs(i - safe);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestIdx = i;
          }
        }
      }
      return nearestIdx !== -1 ? imagesRef.current[nearestIdx] : null;
    },
    [totalFrames]
  );

  // Renderiza a cena com slow-motion profissional, cross-fade e nitidez 8K
  const renderFrameBlend = useCallback(
    (position: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const frameAIndex = Math.floor(position);
      let frameBIndex = frameAIndex + 1;
      if (frameBIndex > totalFrames) {
        frameBIndex = loop ? 1 : totalFrames;
      }

      const blendAlpha = position - frameAIndex; // 0 a 1 entre os frames

      const imgA = getNearestLoaded(frameAIndex);
      const imgB = getNearestLoaded(frameBIndex);

      if (!imgA || !imgA.complete || imgA.naturalWidth === 0) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const clientW = canvas.clientWidth;
      const clientH = canvas.clientHeight;

      const targetW = Math.round(clientW * dpr);
      const targetH = Math.round(clientH * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Fundo preto puro
      ctx.fillStyle = "#05020a";
      ctx.fillRect(0, 0, clientW, clientH);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const imgW = imgA.naturalWidth || 1280;
      const imgH = imgA.naturalHeight || 720;

      // Modo cover total para preencher a tela inteira sem bordas ou cortes
      const scale = Math.max(clientW / imgW, clientH / imgH);
      const drawW = imgW * scale;
      const drawH = imgH * scale;

      const isMobile = clientW < 768;

      let offsetX = (clientW - drawW) / 2;
      let offsetY = (clientH - drawH) / 2;

      if (!isMobile) {
        offsetX += clientW * 0.05;
      }

      // 1. Desenha o Frame A base
      ctx.globalAlpha = 1.0;
      ctx.drawImage(imgA, offsetX, offsetY, drawW, drawH);

      // 2. Mescla suavemente o Frame B (Cross-fade cinematográfico para slow motion macio)
      if (imgB && imgB.complete && imgB.naturalWidth > 0 && blendAlpha > 0.02) {
        ctx.globalAlpha = blendAlpha;
        ctx.drawImage(imgB, offsetX, offsetY, drawW, drawH);
      }

      // Restaura alfa para gradientes
      ctx.globalAlpha = 1.0;

      // 3. Gradientes cinematográficos de integração
      if (!isMobile) {
        const leftFade = ctx.createLinearGradient(0, 0, clientW * 0.55, 0);
        leftFade.addColorStop(0, "rgba(5, 2, 10, 0.92)");
        leftFade.addColorStop(0.35, "rgba(5, 2, 10, 0.75)");
        leftFade.addColorStop(0.75, "rgba(5, 2, 10, 0.3)");
        leftFade.addColorStop(1, "rgba(5, 2, 10, 0)");
        ctx.fillStyle = leftFade;
        ctx.fillRect(0, 0, clientW * 0.55, clientH);
      } else {
        const mobileFade = ctx.createLinearGradient(0, 0, 0, clientH * 0.55);
        mobileFade.addColorStop(0, "rgba(5, 2, 10, 0.88)");
        mobileFade.addColorStop(0.6, "rgba(5, 2, 10, 0.5)");
        mobileFade.addColorStop(1, "rgba(5, 2, 10, 0)");
        ctx.fillStyle = mobileFade;
        ctx.fillRect(0, 0, clientW, clientH * 0.55);
      }

      const topFade = ctx.createLinearGradient(0, 0, 0, 110);
      topFade.addColorStop(0, "rgba(5, 2, 10, 0.85)");
      topFade.addColorStop(1, "rgba(5, 2, 10, 0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, clientW, 110);

      const bottomFade = ctx.createLinearGradient(0, clientH - 240, 0, clientH);
      bottomFade.addColorStop(0, "rgba(5, 2, 10, 0)");
      bottomFade.addColorStop(0.6, "rgba(5, 2, 10, 0.65)");
      bottomFade.addColorStop(1, "rgba(5, 2, 10, 0.95)");
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, clientH - 240, clientW, 240);

      ctx.restore();
    },
    [totalFrames, loop, getNearestLoaded]
  );

  // Pré-carregamento de todos os frames
  useEffect(() => {
    imagesRef.current = new Array(totalFrames + 1).fill(null);
    loadedFramesRef.current = new Array(totalFrames + 1).fill(false);

    // Carrega Frame 1 para visualização imediata
    const frame1 = new Image();
    frame1.src = getFrameUrl(1);
    imagesRef.current[1] = frame1;

    frame1.onload = () => {
      loadedFramesRef.current[1] = true;
      setInitialLoaded(true);
      renderFrameBlend(1);
    };

    // Fila paralela de pré-carregamento
    const queue: number[] = [];
    for (let i = 2; i <= totalFrames; i++) {
      queue.push(i);
    }

    const CONCURRENCY = 8;
    let indexInQueue = 0;

    const loadNext = () => {
      if (indexInQueue >= queue.length) return;

      const batch = queue.slice(indexInQueue, indexInQueue + CONCURRENCY);
      indexInQueue += CONCURRENCY;

      batch.forEach((frameIdx) => {
        const img = new Image();
        img.src = getFrameUrl(frameIdx);
        imagesRef.current[frameIdx] = img;

        img.onload = () => {
          loadedFramesRef.current[frameIdx] = true;
          loadNext();
        };

        img.onerror = () => {
          loadNext();
        };
      });
    };

    loadNext();
    loadNext();

    return () => {
      imagesRef.current = [];
      loadedFramesRef.current = [];
    };
  }, [totalFrames, getFrameUrl, renderFrameBlend]);

  // =========================================================================
  // LOOP DE SLOW-MOTION CINEMATOGRÁFICO A 60 FPS COM BLEND SUAVE
  // =========================================================================
  useEffect(() => {
    let active = true;

    const animateSlowMotion = (timestamp: number) => {
      if (!active) return;

      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const deltaSeconds = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Avança de acordo com o delta de tempo multiplicado pela velocidade de slow-motion
      let nextPos = currentPosRef.current + deltaSeconds * speed;

      if (nextPos >= totalFrames) {
        nextPos = loop ? 1 + (nextPos - totalFrames) : totalFrames;
      }

      currentPosRef.current = nextPos;
      renderFrameBlend(nextPos);

      animationFrameIdRef.current = requestAnimationFrame(animateSlowMotion);
    };

    animationFrameIdRef.current = requestAnimationFrame(animateSlowMotion);

    const onResize = () => {
      renderFrameBlend(currentPosRef.current);
    };

    window.addEventListener("resize", onResize);

    return () => {
      active = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener("resize", onResize);
    };
  }, [speed, totalFrames, loop, renderFrameBlend]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden bg-[#05020a]">
      <canvas
        ref={canvasRef}
        className="w-full h-full block canvas-8k"
        style={{
          width: "100%",
          height: "100%",
          opacity: initialLoaded ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}