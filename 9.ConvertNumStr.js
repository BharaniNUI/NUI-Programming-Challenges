function convert(num) {
    if (num > 0) {
        num = String(num)
        let str = ""
        let num1 = ""
        if (num.length > 1) {
            let arr = []
            arr = num.split("")
            for (let i of arr) {
                switch (i) {
                    case "0":
                        num1 = "zero";
                        break;
                    case "1":
                        num1 = "one";
                        break;
                    case "2":
                        num1 = "two";
                        break;
                    case "3":
                        num1 = "three";
                        break;
                    case "4":
                        num1 = "four";
                        break;
                    case "5":
                        num1 = "five";
                        break;
                    case "6":
                        num1 = "six";
                        break;
                    case "7":
                        num1 = "seven";
                        break;
                    case "8":
                        num1 = "eight";
                        break;
                    case "9":
                        num1 = "nine";
                        break;
                }
                str += num1
            }
            return str
        } else {
            switch (num) {
                case "0":
                    num1 = "zero";
                    break;
                case "1":
                    num1 = "one";
                    break;
                case "2":
                    num1 = "two";
                    break;
                case "3":
                    num1 = "three";
                    break;
                case "4":
                    num1 = "four";
                    break;
                case "5":
                    num1 = "five";
                    break;
                case "6":
                    num1 = "six";
                    break;
                case "7":
                    num1 = "seven";
                    break;
                case "8":
                    num1 = "eight";
                    break;
                case "9":
                    num1 = "nine";
                    break;
            }
            return str += num1
        }
    }
    else {
        return `Invalid Number`
    }

}

console.log(convert(12))