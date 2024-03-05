function convert(number) {
    if (number >= 0) {
        number = String(number)
        let string = ""
        let numString = ""
        if (number.length > 1) {
            let array = []
            array = number.split("")
            for (let i of array) {
                switch (i) {
                    case "0":
                        numString = "zero";
                        break;
                    case "1":
                        numString = "one";
                        break;
                    case "2":
                        numString = "two";
                        break;
                    case "3":
                        numString = "three";
                        break;
                    case "4":
                        numString = "four";
                        break;
                    case "5":
                        numString = "five";
                        break;
                    case "6":
                        numString = "six";
                        break;
                    case "7":
                        numString = "seven";
                        break;
                    case "8":
                        numString = "eight";
                        break;
                    case "9":
                        numString = "nine";
                        break;
                }
                string += numString
            }
            return string
        } else {
            switch (number) {
                case "0":
                    numString = "zero";
                    break;
                case "1":
                    numString = "one";
                    break;
                case "2":
                    numString = "two";
                    break;
                case "3":
                    numString = "three";
                    break;
                case "4":
                    numString = "four";
                    break;
                case "5":
                    numString = "five";
                    break;
                case "6":
                    numString = "six";
                    break;
                case "7":
                    numString = "seven";
                    break;
                case "8":
                    numString = "eight";
                    break;
                case "9":
                    numString = "nine";
                    break;
            }
            return string += numString
        }
    }
    else {
        return `Invalid Number`
    }

}

console.log(convert(78))