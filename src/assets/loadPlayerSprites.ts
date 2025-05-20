const frames: Record<'attack' | 'walk', Record<'left' | 'right', HTMLImageElement[]>> = {
  walk: { left: [], right: [] },
  attack: { left: [], right: [] },
};

export function loadPlayerSprites(): Promise<void> {
  return new Promise((resolve) => {
    const states: ('attack' | 'walk')[] = ['attack', 'walk'];
    const directions: ('left' | 'right')[] = ['left', 'right'];
    let loaded = 0;
    const total = states.length * directions.length * 2;

    states.forEach((state) => {
      directions.forEach((dir) => {
        for (let i = 0; i < 2; i++) {
          const img = new Image();
          img.src = `/assets/sprites/${state}_${dir}_${i}.png`;
          img.onload = () => {
            loaded++;
            if (loaded === total) resolve();
          };
          
          frames[state][dir].push(img);
        }
      });
    });
  });
}

export function getPlayerFrames() {
  return frames;
}