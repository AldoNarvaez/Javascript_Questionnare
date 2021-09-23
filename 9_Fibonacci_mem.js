

function fibonacciNumber(){
    let memory = {0:0, 1:1};

    function fibonacci(n){
        if (n in memory){
            return memory[n];
        }
        else{
            let element = fibonacci(n-1) +fibonacci(n-2);
            memory[n] = element;
            return element;
        }
    }
    return fibonacci;
}

var fib=fibonacciNumber();

console.log(fib(1))