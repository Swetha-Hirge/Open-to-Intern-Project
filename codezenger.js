//Check whether a string can become empty by repeatedly deleting a given sub-string
// Given a string S1 and another string S2, 
// find whether S1 can become empty by deleting S2 from S1 again and again.
// You are allowed to delete S2 from S1 any number of times.
// Input:
// cocodede
// code
// where:
// First line represents string S1.
// Second line represents string S2.
// Output:
// Yes
// Explanation:
// In the string S1 = "cocodede",
// we can first delete the substring "code".
// S1 now becomes "code".
// We can again delete sub - string "code".
// Now the string S1 becomes empty.

let s1 = 'cocodede';
let s2 = 'code';
let index = s1.includes(s2);
 console.log(index)

 

// JavaScript program for the above approach;

// Function to check if a string can be
// made empty by removing all
// subsequences of the form "GFG" or not
// function findIfPossible(N, str)
// {
// 	let countG = 0, countF = 0;
// 	for(let i = 0; i < N; i++)
// 	{
// 		if (str[i] == 'G')
// 			countG++;
// 		else
// 			countF++;
// 	}

// 	if (2 * countF != countG)
// 	{
// 		console.log("NO");
// 	}
// 	else
// 	{
// 		let id = 0;
// 		let flag = true;

// 		for(let i = 0; i < N; i++)
// 		{
// 			if (str[i] == 'G')
// 			{
// 				countG--;
// 				id++;
// 			}
// 			else
// 			{
// 				countF--;
// 				id--;
// 			}
// 			if (id < 0)
// 			{
// 				flag = false;
// 				break;
// 			}
// 			if (countG < countF)
// 			{
// 				flag = false;
// 				break;
// 			}
// 		}

// 		if (flag)
// 		{
// 			console.log("YES");
// 		}
// 		else
// 		{
// 			console.log("NO");
// 		}
// 	}
// }

// // Driver Code
// let n = 6;
// let str = "GFGFGG";

// findIfPossible(n, str);

// This code is contributed by Potta Lokesh


