function whosPaying(names) {
    
    var no = names.length;
    var random = Math.floor(Math.random() * no);
    var randomName = names[random];
    return randomName +" is going to buy lunch today!";
    
}