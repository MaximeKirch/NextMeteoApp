export default function FormChecker(city:string) {
    let regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    
       if( regex.test(city) ) return true;
    
       else return false;
    
}