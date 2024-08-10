function isPalindrome(str) {
    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanstr);
    const reversestr = cleanstr.split('').reverse().join('');
    console.log(reversestr);
    return cleanstr === reversestr;
  }
  
  function PalindromeChecker() {
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    if (isPalindrome(inputText.value)) {
      result.textContent = `"${inputText.value}" is a palindrome`;
    } else {
      result.textContent = `"${inputText.value}" is not a palindrome`;
    }
    result.classList.add('fadeIn');
    inputText.value = '';
  }
  
  document.getElementById('checkbutton').addEventListener('click', PalindromeChecker);
  
