package main

import(
  "fmt"
  "math/rand"
  "time"
)

// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

func seed(worldGrid *[][]string, worldSize int){
  wg := *worldGrid
  for i := 0; i < worldSize; i ++{
    row := make([]string, worldSize)
    for j := 0; j < worldSize; j++ {
      row[j] = randomSeed()
      wg[i] = row
    }
  }
}

func randomSeed() string {
  rand.Seed(time.Now().UnixNano())
  randomNumber := rand.Intn(2)
  if randomNumber == 1 {
    return "*"
  } else {
    return " "
  }
}

func ruleTheWorld(worldGrid *[][]string){
  wg := *worldGrid
  for i:=0; i < len(wg);i++{
    for j:=0; j < len(wg[i]); j++{
      aliveCells := countLiveNeighbours(&wg, i, j)
      if aliveCells < 2 && aliveCells > 3 {
        wg[i][j] = " "
      }
      if aliveCells == 3 {
        wg[i][j] = "*"
      }
    }
  }
  fmt.Printf("%v", wg)
}

func countLiveNeighbours(worldGrid *[][]string, row int, col int) int{
  wg := *worldGrid
  liveNeighbours := 0
  for i:=0; i < len(wg[row]); i++{
    colStart := col - 1
    colEnd := col + 1
    if colStart < 1 {
      colStart = 1
    }

    if colEnd > len(wg[row]){
      colEnd = col
    }

    if row > 1 {
      upperRow := wg[row - 1][colStart:colEnd]
      //upperNeighbours := upperRow[colStart:colEnd]
      for urCounter:=0; urCounter < len(upperRow); urCounter++{
        if upperRow[urCounter] == "*" {
          liveNeighbours ++
        }
      }
    }

    if row <= len(wg) {
      lowerRow := wg[row + 1][colStart:colEnd]
      //lowerNeighbours := lowerRow[colStart:colEnd]
      for lrCounter:=0; lrCounter < len(lowerRow); lrCounter++{
        if lowerRow[lrCounter] == "*" {
          liveNeighbours ++
        }
      }
    }

    rowItSelf := wg[row]
    if colStart < col && rowItSelf[colStart]  == "*"{
      liveNeighbours ++
    }
    if colEnd > col && rowItSelf[colEnd] == "*" {
      liveNeighbours ++
    }
  }
  return liveNeighbours
}


func main(){
  worldSize := 10
  wordGrid := make([][]string, worldSize)
  seed(&wordGrid, worldSize)
  for {
    ruleTheWorld(&wordGrid)
  }
  fmt.Printf("%v", wordGrid)
}
