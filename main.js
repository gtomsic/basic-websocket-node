let ws = new WebSocket('ws://localhost:8000');
console.log(ws);

ws.onopen = () => {
  ws.send('This is coold two way connections!!!');
};

ws.onmessage = (event) => {
  console.log(event.data);
};
ws;
