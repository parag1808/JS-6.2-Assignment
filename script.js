for (var i=1; i <= 100; i++){

					if(i % 3 == 0 && i % 5 == 0){
						document.write(i + " <span id='red'>FizzBuzz</span> </br>");
					
					}else if(i % 3 == 0){
						document.write(i + " <span id='green'>Fizz </span></br>");
					}else if(i % 5 == 0){
						document.write(i + " <span id='blue'>Buzz</span> </br>");
					}else{

					document.write(i + "</br>");
					}
				}