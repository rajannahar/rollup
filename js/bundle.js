function block1 () {
	console.log("this is module 1, block 1");
}

function block2 () {
	console.log("this is module 1, block 2");
}

function block2$1 () {
	console.log("this is module 2, block 2");
}

function block3$1 () {
	console.log("this is module 2, block 3");
}

function init() {
    block1();
    block2();
    block2();
    	
    block2$1();

    block3$1();
}

export default init;
