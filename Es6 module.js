// Es6 modules is an External file that contains reuseable code that can be imported into other javascr
//ipt files write reuseable code for many different apps can contain variables,classes,
// functions ...and more introduced as part of EcMa script 2015 update
import{PI,getCircumference,getArea,getVolume}from './mathUtil.js';
console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);


console.log(`${circumference.toFixed(2)}cm^2`);
console.log(`${area.toFixed(2)}cm^3`);
console.log(`${volume.toFixed(2)}cm^3`)