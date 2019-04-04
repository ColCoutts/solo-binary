const buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write('i am a string');
console.log(buff1);
console.log(buff1.toString());

const buff2 = Buffer.from('hello there');
console.log(buff2.toString());

const alteredBuff = buff2.map(x => x = 666);
console.log(alteredBuff.toString());

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile);
console.log(smile.toString());
console.log(smile.toString('hex'));
console.log(smile.toString('binary'));

const emojiBuff = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log('emojis whaaat', emojiBuff.readUInt32BE(0).toString(16));
console.log('emojis whaaat', emojiBuff.readUInt32LE(0).toString(16));