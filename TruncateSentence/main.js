// Given a sentence s​​​​​​ and an integer k​​​​​​. Truncate s​​​​​​ such that it contains only the first k​​​​​​ words. 
// Return s​​​​​​ after truncating it.




function truncateSentence(s, k) {
    const words = s.split(' ');
    return words.slice(0, k).join(' ');
  }
  

  const sentence = "Hello how are you Contestant";
  const k = 4;
  console.log(truncateSentence(sentence, k)); // "Hello how are you"
