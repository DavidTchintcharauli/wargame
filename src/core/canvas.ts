const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (!ctx) throw new Error("Canvas context not supported");

export { canvas, ctx };
