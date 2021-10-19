console.log('-----------------------');
function proveriPalindrom(palindrom) {
    let obrnuto = palindrom.split("").reverse().join("");
    return palindrom == obrnuto;
    }
    
    function najduziPalindrom(palindrom){
    
    let duzina = 0
    let najduzi = '';
    
    for(let i=0; i < palindrom.length; i++) 
    {
    let subs = palindrom.substr(i, palindrom.length);
    
    for(let j=subs.length; j>=0; j--) 
    {
    let sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;
    
    if (proveriPalindrom(sub_subs_str))
    {
    if (sub_subs_str.length > duzina) 
    {
    duzina = sub_subs_str.length;
    najduzi = sub_subs_str;
    }
    }
    }
    }
    
    return najduzi;
    }
    let palindrom = 'HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'
    najduziPalindrom(palindrom)
    console.log(najduziPalindrom(palindrom)); 