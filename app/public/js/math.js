var starMathC = function(){
    var dbScore = 0;
    var divisor = 0;
    var starScore = 0;
    dbScore = data.clean1star + (data.clean2star * 2) + (data.clean3star * 3) + (data.clean4star * 4) + (data.clean5star * 5);
    divisor = data.clean1star + data.clean2star + data.clean3star + data.clean4star + data.clean5star;
    starScore = dbScore / divisor;
    return starScore;
}

var starMathP = function(){
    var dbScore = 0;
    var divisor = 0;
    var starScore = 0;
    dbScore = data.priv1star + (data.priv2star * 2) + (data.priv3star * 3) + (data.priv4star * 4) + (data.priv5star * 5);
    divisor = data.priv1star + data.priv2star + data.priv3star + data.priv4star + data.priv5star;
    starScore = dbScore / divisor;
    return starScore;
}