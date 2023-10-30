export class Challenge {
    static solution(number: number) {
      return Array.form({length:number-1} , (_,i)=>++i).filter(a=>a%3===0 || a%5===0).reduce((a,b)=>a+b,0)
    }
  }