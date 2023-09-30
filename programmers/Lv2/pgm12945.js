//피보나치 수
function solution(n) {
    const dp = [0, 1];
    for (i = 2; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    }
    return dp[n];
}
