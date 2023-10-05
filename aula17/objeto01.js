let amigo = {nome: 'Breno',
 sexo: 'M', 
 peso: 85.4, 
 engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(2)
console.log(`Meu amigo se chama ${amigo.nome} e pesa ${amigo.peso}`)