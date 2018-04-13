class Node {
	constructor ( data = null ){
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(){
		this.head = new Node();
	}

	add( item ){
		let current = this.head;
		let newNode = new Node(item)
		while( current.next !== null ){
			current = current.next;
		}
		current.next = newNode;
		return true;
	}

	remove(){

	}

	length() {
		let size = 0;
		let current = this.head;
		while( current.next !== null ){
			size++
			current = current.next;
		}
		return size;
	}

	isEmpty(){

	}

	display(){

	}
}
