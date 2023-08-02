import img from "../../../images/blog/blog1/card.svg"
import authorData from "../author"

export const metaData = {
  img: img,
  title: "Top 10  helpful programs",
  date: "12 jul 2022",
  author: authorData,
  chip: "New",
  route: "/blog/top-10-helpful-program",
  description: `Here are 10 most helpful program code snippets that I use during coding contest which can be used as subroutine`,
  tags: ["C++", "Competitive Programming", "Problem Solving"],
}

// Labels => p, h2, img, code, note
const content = [
  {
    label: "p",
    data: `Here are 10 most helpful program code snippets that I use during coding contest which can be used as subroutine`,
  },

  // First
  {
    label: "h2",
    data: `1. Quickly check odd or even`,
  },
  {
    label: "code",
    code: `bool isOdd(int n){
	return n&1;
}`,
    lang: "cpp",
  },

  // Second
  {
    label: "h2",
    data: `2. Count digits in an integer`,
  },
  {
    label: "code",
    code: `int countDigit(int n) { 
  return floor(log10(n) + 1); 
}`,
    lang: "cpp",
  },

  // Third
  {
    label: "h2",
    data: `3. Greatest common Divisor by Euclid's Algorithm`,
  },
  {
    label: "code",
    code: `int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}`,
    lang: "cpp",
  },

  // Fourth
  {
    label: "h2",
    data: `4. Exponential Squaring with mod`,
  },
  {
    label: "code",
    code: `#define MOD 1000000007 // prime modulo value

long long  fast_exp(int base, int exp)  {
    long long res = 1;
    while (exp > 0) {
        if (exp % 2 == 1)
            res = (res * base) % MOD;
        base = (base * base) % MOD;
        exp /= 2;
    }
    return res % MOD;
}`,
    lang: "cpp",
  },
  {
    label: "note",
    data: "This is useful when calculating very large powers. Usually the value of MOD is given in the question (used to avoid overflow).",
  },

  // Fifth
  {
    label: "h2",
    data: `5. Kadane’s Algorithm (Maximum Sum Subarray Problem)`,
  },
  {
    label: "code",
    code: `#include <climits>
...

int kadaneNeg(vector<int> const &arr) {
    int max_so_far = INT_MIN;
    int max_ending_here = 0;

    for (int i = 1; i < arr.size(); i++) {
        max_ending_here = max_ending_here + arr[i];
        max_ending_here = max(max_ending_here, arr[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }

    return max_so_far;
}`,
    lang: "cpp",
  },

  // Sixth
  {
    label: "h2",
    data: `6. Fast Multiplication or Division by 2`,
  },
  {
    label: "code",
    code: `// Multiply n with 2
n = n << 1;
 
// Divide n by 2
n = n >> 1;`,
    lang: "cpp",
  },

  // Seventh
  {
    label: "h2",
    data: `7. Calculating the most significant digit`,
  },
  {
    label: "code",
    code: `#include <bits/stdc++.h>
...
int MSD(int n) {
  if (n == 0)
    return 0;
  int k = log10(n);
  int x = pow(10, k);
  int ans = n / x;
  return ans;
}`,
    lang: "cpp",
  },

  // Eighth
  {
    label: "h2",
    data: `8. To find whether a given number is power of 2`,
  },
  {
    label: "code",
    code: `bool isPowerOfTwo(int x){
    if (x < 0) return false;
    return x && (!(x & (x - 1)));
}`,
    lang: "cpp",
  },

  // Nineth
  {
    label: "h2",
    data: `9. C++11 has inbuilt algorithms for the following`,
  },
  {
    label: "code",
    code: `all_of(first, first + n, ispositive());
any_of(first, first + n, ispositive());
none_of(first, first + n, ispositive());`,
    lang: "cpp",
  },

  // Tenth
  {
    label: "h2",
    data: `10. binary search Algorithm`,
  },
  {
    label: "code",
    code: `int binarySearch(int arr[], int p, int r, int num) {
   if (p <= r) {
      int mid = (p + r) / 2;
      if (arr[mid] == num)
         return mid ;
      if (arr[mid] > num)
         return binarySearch(arr, p, mid - 1, num);
      if (arr[mid] < num)
         return binarySearch(arr, mid + 1, r, num);
   }
   return -1;
}`,
    lang: "cpp",
  },
]

const data = {
  metaData,
  content,
}

export default data
