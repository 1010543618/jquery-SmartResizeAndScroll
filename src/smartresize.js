import {default as debounce} from './debounce';
export default function(fn, threshold){
  return fn ? this.bind('resize', debounce(fn, threshold)) : this.trigger('smartresize'); 
}