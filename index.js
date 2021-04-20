/*
 Okay, a binary heap is a tree where the parent node is always GREATER THAN (max heap) or 
 LESS THAN (min heap) its left or right children, in any order.

 MIN HEAP:
 [0,  2,3  4,5,9,7,  10,12,18,13, 20,19,21,23,     30...  ]
  P   P    P         P                             P
  +0  +1   +2       +4                             +8


  0   1 2  3 4 5 6   7 8  9  10   11 12 13 14      15

Left child is stored at index (i*2) + 1, right child is stored at (i*2) + 2.
 Therefore, parent is stored at Math.floor( (i - 1)/2 )

 */

class MinBinaryHeap{
  constructor(){
    this.values = []
  }
  insert(val){
    this.values.push(val);
    let index = this.values.length - 1;
     //loop until index is at the beginning, or the element is in the right place.
     while(index > 0){

            //find the parent index
            let parentIndex = Math.floor( (index - 1)/2 );

            //store the parent value
            let parentValue = this.values[parentIndex];

            //if the newly inserted value is greater than the parent, you're done!
            if(val >= parentValue) break;

            //if not, swap the two
            this.values[parentIndex] = val;
            this.values[index] = parentValue;

            //make the parent index the new index.
            index = parentIndex;
     }
     return this.values;

  }
}




class PriorityQueue{
  constructor(){
    this.values = []
  }
  enqueue(value,priority){
    let newItem = {value, priority}
    this.values.push(newItem);

    let index = this.values.length - 1;
     //loop until index is at the beginning, or the element is in the right place.
     while(index > 0){

            //find the parent index
            let parentIndex = Math.floor( (index - 1)/2 );

            //store the parent value
            let parentValue = this.values[parentIndex];

            //if the newly inserted value is greater than the parent, you're done!
            if(newItem.value >= parentValue.value) break;

            //if not, swap the two
            this.values[parentIndex] = newItem;
            this.values[index] = parentValue;

            //make the parent index the new index.
            index = parentIndex;
     }
     return this.values;

  }
  dequeue(){

         //store the first value
        const start = this.values[0];

        //store the last value
        const end = this.values.pop();


        this.values[0] = end;

        //if the new list length is 0, you're done.
        if(this.values.length < 1){
            return start;
        }
        //start at the beginning
        let index = 0;

        //store the length
        const length = this.values.length;

        //store the first element
        const element = this.values[0];

        while(true){
            //store the left and right children's index
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            //initialize the variables for left and right children
            let leftChild,rightChild;

            //initialize a swap variable to null
            let swap = null;

            //if the left child index exists...?
            if(leftChildIndex < length){
                //store the left child
                leftChild = this.values[leftChildIndex];

                //if the left child's priority is lower (more important) than the parent, store the left child.
                if(leftChild.priority < element.priority) {
                    //the swap index is the left child index.
                    swap = leftChildIndex;
                }
            }

            //if the right child index exists...?
            if(rightChildIndex < length){
                //store the right child
                rightChild = this.values[rightChildIndex];

                //if:
                // 1. the swap index is null and the right child's priority is more important than the parent
                // 2. or the swap ISN'T null and the right child's priority is more important than the LEFT child
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                // make the swap index the right child index. 
                   swap = rightChildIndex;
                }
            }
            //if the swap index is STILL NULL (meaning that no priorities need to be adjusted), end the loop.
            if(swap === null) break;
            //if not, swap the current index (starting at 0) with the swap index. 
            this.values[index] = this.values[swap];
            this.values[swap] = element;

            //the swap index is assigned to the current index. 
            index = swap;
        }
        return start;
    }
}









