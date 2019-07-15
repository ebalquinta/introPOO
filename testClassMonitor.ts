import Monitor from './class-Monitor';

let monitor1: Monitor = new Monitor(false,"1");

console.log(monitor1);

monitor1.bajarBrillo();
monitor1.bajarBrillo();
monitor1.setOnOff();

console.log(monitor1);