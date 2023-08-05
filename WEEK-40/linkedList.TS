class CustomNode{
    public value: number
    public next: CustomNode | null = null;

    constructor(value: number){
        this.value = value;
        // this.next = null;
    }
}

class CustomLinkedList{

    private head: CustomNode | null = null



    add(value: number): void {
        const newNode = new CustomNode(value);

        // if we have an empty list
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    addNewHead(value: number): void{
        const newNode = new CustomNode(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    addModeAtPosition(value: number, position: number){
        if (position < 0)
            throw new Error("Invalid position given");

            const newNode = new CustomNode(value);
            let counter: number = 0;

        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode){
            if (counter === position){
                previousNode!.next = newNode;
                newNode.next = currentNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }


    traverse() {
        if (!this.head)return;
    
    let currentNode = this.head;  
    while (currentNode){
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }

}




function main(){
    const list = new CustomLinkedList();

    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);
    list.addNewHead(-90);
    list.addModeAtPosition(1,3);

    console.log(list);
}

main();

