import React, { useEffect } from "react";

const MIN_SPEED = 0.2;
const MAX_SPEED = 1.8;

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

class Blob {
  el: HTMLElement;
  size: number;
  initialX: number;
  initialY: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
  constructor(el: HTMLElement) {
    this.el = el;
    const boundingRect = this.el.getBoundingClientRect();
    this.size = boundingRect.width;
    this.initialX = randomNumber(0, window.innerWidth - this.size);
    this.initialY = randomNumber(0, window.innerHeight - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;
    this.vx =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size;
      this.vx *= -1;
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size;
      this.vy *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${
      this.y - this.initialY
    }px)`;
  }
}

function initBlobs() {
  const blobEls = document.querySelectorAll(".bouncing-blob");
  const blobs = Array.from(blobEls).map(
    (blobEl) => new Blob(blobEl as HTMLElement)
  );

  function update() {
    requestAnimationFrame(update);
    blobs.forEach((blob) => {
      blob.update();
      blob.move();
    });
  }

  requestAnimationFrame(update);
}

const Background = () => {
  useEffect(() => {
    initBlobs();
  }, []);

  return (
    <div className="w-screen">
      <div className="bouncing-blobs-container w-screen">
        <div className="bouncing-blobs-glass"></div>

        <div className="bouncing-blobs">
          <div className="bouncing-blob bouncing-blob--blue"></div>

          <div className="bouncing-blob bouncing-blob--orange"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
