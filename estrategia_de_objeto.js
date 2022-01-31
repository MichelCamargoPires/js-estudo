 //usando a notacao literal 
 const obj1 = {}
 console.log(obj1)

 //funcao em JS
 console.log(typeof Object , typeof new Object)
 const obj2 = new Object
 console.log(obj2)

 //funcao contrutora 
 function produto(nome, preco, desc) {
     this.nome = nome
     this.getPresoComDesconto = () =>{
         return preco * ( 1 - desc )
     }
 }

 const p1 = new produto('canta', 7.99, 0.15 )
 const p2 = new produto('notbook', 2998.99, 0.99)
console.log(p1.getPresoComDesconto(), p2.getPresoComDesconto()) 

//funcao factoty
function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('joao', 7980, 4)
const f2 = criarFuncionario ('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
