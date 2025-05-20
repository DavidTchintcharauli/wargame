export const keys: { [key: string]: boolean } = {};

window.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

export function isDirectionPressed(): boolean {
  return keys['arrowup'] || keys['w'] ||
         keys['arrowdown'] || keys['s'] ||
         keys['arrowleft'] || keys['a'] ||
         keys['arrowright'] || keys['d'];
}

export function isRunPressed(): boolean {
  return keys['shift'];
}

export function isAttackHeld(): boolean {
  return keys['v'] || keys[' ']; 
}
