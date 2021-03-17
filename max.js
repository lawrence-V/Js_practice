const ids = new Set()

ids.add('lawrence')
ids.add(1)
ids.add('rence')
ids.add(1)

for(const word of ids){
    console.log(word);
}

console.log(ids.has('lawrenc'));
