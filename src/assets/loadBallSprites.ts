const frames: Record<'left' | 'right', HTMLImageElement[]> = {
  left: [],
  right: [],
};

export function loadBallSprites(): Promise<void> {
  return new Promise((resolve) => {
    const directions: ('left' | 'right')[] = ['left', 'right'];
    let loaded = 0;

    directions.forEach((dir) => {
      for (let i = 0; i < 2; i++) {
        const img = new Image();
        img.src = `/assets/sprites/ball_${dir}_${i}.png`;
        img.onload = () => {
          loaded++;
          if (loaded === 4) resolve();
        };
        frames[dir].push(img);
      }
    });
  });
}

export function getBallFrames() {
  return frames;
}
