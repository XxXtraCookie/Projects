const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.on('myCustomEvent', (data) => {
  console.log(data);
});

emitter.emit('myCustomEvent', { name: 'Pesho' });
