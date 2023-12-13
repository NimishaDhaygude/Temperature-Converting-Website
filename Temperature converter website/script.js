const calculate_temperature = () => {
    const input_value = (document.getElementById('input-value')).value;
    const input_type = document.getElementById('input-type');
    const input_type_value = input_type.options[input_type.selectedIndex].value;

    //celsius to fahrenheit
    const celToFar = (celsius) => {
        if (isNaN(celsius)) {
          console.log("Invalid input. Please provide a valid number.");
          return;
        }
      
        let fahrenheit = ((celsius * 9 / 5) + 32) .toFixed(1);
        console.log(fahrenheit);
        return fahrenheit;
      };
      
      //fahrenheit to celsius
      const farTocel = (fahrenheit) => {
        if (isNaN(fahrenheit)) {
          console.log("Invalid input. Please provide a valid number.");
          return;
        }
      
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(1);
        console.log(celsius);
        return celsius;
      };
    if(input_type_value == 'celsius'){
        document.getElementById('result').innerHTML = celToFar(input_value) +' '+ '&#176; Fahrenheit';
    }
    else{
        document.getElementById('result').innerHTML = farTocel(input_value) + ' ' + '&#176; celsius';
    }
}