class List {
    constructor(value) {
        this.head = null;
        this.length = 0;
    };
    addToHead(value){
        const newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    };
    find(value){
        let founded = this.head;
        while(founded.value !== value){
            founded = founded.next;
        }
        return founded;
    };
    removeElement(value){//chi exnm ?? this_i mej grel
        let elem = this.head;
        while(elem.next.value !== value){
            elem = elem.next;
        }
        let deletedElem = elem.next;
        let takiMnacac = elem.next.next;
        while(takiMnacac.next !== null ){
            takiMnacac = takiMnacac.next
        }
        elem.next = elem.next.next;
        elem.next.next = takiMnacac;
        this.length--;
        console.log(deletedElem);
    };
    removeHead(){
        let node = this.head;
        this.head = node.next;
        this.length--;
        return node;
    };
    get isEmpty(){
        if (this.length === 0) {
            return true
        }else{
            return false
        }
    };
    remove(){
        this.head = null;
        this.length = 0;
        this.addToHead();
    };
};


//const list = {
//    head: {
//        value: "chors"
//        next: {
//            value: "ereq"
//            next: {
//                value: "erku"
//                next: {
//                  value: "mek"
//                  next: null
//                }
//            }
//        }
//    }
//};


let tr = new List("mek");
tr.addToHead("erku");
tr.addToHead("ereq");
tr.addToHead("chors");




//console.log(tr.find("erku"),"ira next@")


// tr.removeElement("mek")

//console.log(tr,"jnjvec mek@ erevi");