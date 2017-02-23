package main

import (
    "fmt"
)

func main(){
    myArray := make([]string, 0)
    myArray = append(myArray, "num1")
    myArray = append(myArray, "num2")
    myArray = append(myArray, "num3")
    myArray = append(myArray, "num4")

    for _, item := range myArray {
        fmt.Printf("%d \n", item)
    }
}
