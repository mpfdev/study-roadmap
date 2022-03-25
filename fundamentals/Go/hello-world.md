# Hello World

![https://i.imgur.com/ur8Dc6d.png](https://i.imgur.com/ur8Dc6d.png)


## Code related

Source: https://go.dev/play/p/hpbDwbRDbSW
```go
package main

import "fmt"

func main() {

	x := 10
	z := "Hello World!"
	bytesData, error := fmt.Println(z, x)
	fmt.Println(bytesData, error)

	a := 10
	b := 3
	c := a + b
	bytes, _ := fmt.Println(c)
	fmt.Println(bytes)
}

```