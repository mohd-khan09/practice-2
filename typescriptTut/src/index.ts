const display: HTMLInputElement = document.getElementById(
  "display"
) as HTMLInputElement;
//function to display values on screen
function display_value_to_screen(value: string): void {
  display.value += value;
  console.log(value, ":value");
}
//function to clear display
function clr_display(): void {
  display.value = "";
}
//function to calculate
function calculate(): void {
  let input: string = display.value;
  let result: string | number;
  try {
    result = perform_calculation(input);
  } catch (error) {
    result = "error";
  }
  display.value = result.toString();
}
//function that is performing actual calculation
function perform_calculation(expression: string): number {
  const operators: string[] = ["+", "*", "/", "-"];
  const tokens: string[] = expression
    .split(/\b/)
    .filter((token) => token.trim() !== "");
  let currentNumber: number = parseFloat(tokens[0]);
  let currentOperator: string | null = null;

  for(let i=1;i<=tokens.length;i++){
    const token =tokens[i].trim()
    if(operators.includes(token)){
        currentOperator=token
    }
    else{
        const number:number = parseFloat(token)
        if(!isNaN(number)){
            if(currentOperator==='+'){
                currentNumber +=number
            }
           else if(currentOperator==='-'){
                currentNumber -=number
            }
          else  if(currentOperator==='*'){
                currentNumber *=number
            }
           else if(currentOperator==='/'){
                if(number !==0){
                    currentNumber /=number
                }else {
                    throw new Error("not divisible by zero")
                }
            }else{
                throw new Error("invalid operator")
            }
        }else{
            throw new Error("not a valid number")
        }
    }

  }
  return parseFloat(currentNumber.toFixed(2))
}

//function used to delete last value
function del():void{
    let current_val :string =display.value
    display.value =current_val.slice(0,-1)
}