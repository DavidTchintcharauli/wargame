const ballFrames: HTMLImageElement[] = [];

export function loadBallSprites(): Promise<void> {
  return new Promise((resolve) => {
    const normal = new Image();
    const puffed = new Image();

    let loaded = 0;
    const check = () => {
      loaded++;
      if (loaded === 2) resolve();
    };

    normal.src = '/assets/sprites/ball_normal_right.png';
    puffed.src = '/assets/sprites/ball_puffed_right.png';

    normal.onload = check;
    puffed.onload = check;

    ballFrames.push(normal, puffed);
  });
}

export function getBallFrames() {
  return ballFrames;
}
