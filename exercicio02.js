num = [a=5,b=8,c=7,d=3]
media = 0;
for (i=0;i<num.length;i++){ 
    media = num[i] + media;
    
}
media = media / num.length;
if(media>=5){
    console.log("aprovado")

}   
