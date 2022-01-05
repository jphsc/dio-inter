function validaArray(arr, numero){
    try{
        if(!arr && !numero) throw new ReferenceError("Envie os parâmetros");
        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
        if(typeof numero !== 'number') throw new TypeError('Array precisa ser do tipo number');
        if(typeof arr.lenght !== numero) throw new RangeError(`O array precisa ser do tamanho de ${numero}`);

        return arr;
    } catch(e){
        if(e instanceof ReferenceError){
            console.log('Erro do tipo ReferenceError')
            console.log(e.name);
            console.log(e.stack)
        } else if(e instanceof TypeError){
            console.log('Erro do tipo TypeError');
            console.log(e.name);
            console.log(e.stack)
        } else if(e instanceof RangeError){
            console.log('Este erro é to tipo RangeError');
            console.log(e.name);
            console.log(e.stack)
        } else{
            console.log('Ocorreu um erro inesperado:'+ e);
        }
    }
}

console.log(validaArray([],5));