function Solution(s) {
  var ans = '';

  let index = 0;
  while (index < s.length) {
    const curChar = s[index];
    if (curChar === 'p') {
      index += 4;
      ans += '+';
    } else if (curChar === 'm') {
      index += 5;
      ans += '-';
    } else {
      return null;
    }
  }
  return ans;
}
console.log(Solution('minusplusminusminus'));
console.log(Solution('plusplusminus'));
console.log(Solution('minusplusminus'));
console.log(Solution('plusminusminusplus'));
