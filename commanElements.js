function commanElements(input1, input2) {
    for (let elemnets of input1) {
        if (input2.includes(elemnets)) {
            console.log(elemnets);
        }
    }
}

// commanElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commanElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);