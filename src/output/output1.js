import * as module1 from '../modules/module-1.js';
import { block2 } from '../modules/module-2.js';
import { block3 } from '../modules/module-2.js';

export default function init() {
    module1.block1();
    module1.block2();
    module1.block2();
    	
    block2();

    block3();
}