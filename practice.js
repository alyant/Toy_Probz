/*
diagonal

sort a =
     [[1, 3, 9, 4],
     [9, 5, 7, 7],
     [3, 6, 9, 7],
     [1, 2, 2, 2]]
the output should be

diagonalsSort(a) = [[1, 9, 9, 7],
                    [3, 5, 6, 9],
                    [3, 4, 7, 7],
                    [1, 2, 2, 2]]
*/

/*
You are given an array of integers arr. Your task is to count the number of contiguous subarrays, such that each element of the subarray appears at least twice.

Example

For arr = [0, 0, 0], the output should be duplicatesOnSegment(arr) = 3.

There are 3 subarrays that satisfy the criteria of containing only duplicate elements:

arr[0..1] = [0, 0]
arr[1..2] = [0, 0]
arr[0..2] = [0, 0, 0]
For arr = [1, 2, 1, 2, 3], the output should be duplicatesOnSegment(arr) = 1.

There is only 1 applicable subarray: arr[0..3] = [1, 2, 1, 2].



*/

/*

You are given a string s. Consider the following algorithm applied to this string:

Take all the prefixes of the string, and choose the longest palindrome between them.
If this chosen prefix contains at least two characters, cut this prefix from s and go back to the first step with the updated string. Otherwise, end the algorithm with the current string s as a result.
Your task is to implement the above algorithm and return its result when applied to string s.

Note: you can click on the prefixes and palindrome words to see the definition of the terms if you're not familiar with them.

Example

For s = "aaacodedoc", the output should be palindromeCutting(s) = "".

The initial string s = "aaacodedoc" contains only three prefixes which are also palindromes - "a", "aa", "aaa". The longest one between them is "aaa", so we cut if from s.
Now we have string "codedoc". It contains two prefixes which are also palindromes - "c" and "codedoc". The longest one between them is "codedoc", so we cut if from the current string and obtain the empty string.
Finally the algorithm ends on the empty string, so the answer is "".
For s = "codesignal", the output should be palindromeCutting(s) = "codesignal".
The initial string s = "codesignal" contains the only prefix, which is also palindrome - "c". This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string "codesignal" as a result.

For s = "", the output should be palindromeCutting(s) = "".

*/