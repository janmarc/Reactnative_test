# Hi Developer 🤖

Nice to have you here with us, this is a little test just to know you a little better<br/>

#1 - Challenge - Let's Gamble - Code Review

Imagine that we had to create a Jackpot Machine, one of our developers came with a code for that, what kind of feedback and/or improvements, would you ask before merge it on our codebase?

```
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.


| Item   | Three of the same | Two of the same | Two of the same plus one Wild |
|--------|-------------------|-----------------|-------------------------------|
| Wild   | 100               | 10              | N/A                           |
| Star   | 90                | 9               | 18                            |
| Bell   | 80                | 8               | 16                            |
| Shell  | 70                | 7               | 14                            |
| Seven  | 60                | 6               | 12                            |
| Cherry | 50                | 5               | 10                            |
| Bar    | 40                | 4               | 8                             |
| King   | 30                | 3               | 6                             |
| Queen  | 20                | 2               | 4                             |
| Jack   | 10                | 1               | 2                             |
```

# Example
```
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
spin = [5,5,5]
result = fruit([reel1,reel2,reel3],spin)
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
Return
result == 50
```
