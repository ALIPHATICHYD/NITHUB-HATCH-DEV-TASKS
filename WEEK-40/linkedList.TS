class CustomNode{
    public value: number
    public next: CustomNode | null;

    constructor(value: number){
        this.value = value;
    }
}

class CustomLinkedList{

    private head: CustomNode | null



    add(value: number): void {
        const newNode = new CustomNode(value);

        // if we have an empty list
        if(this.head === null){
            this.head = newNode;
        }

        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

}




function main(){
    const list = new CustomLinkedList();

    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);

    console.log(list);
}

main();

