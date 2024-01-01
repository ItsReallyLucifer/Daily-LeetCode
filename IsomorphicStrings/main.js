// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



function isIsomorphic (s, t) {
  
    if(s.length != t.length)
        return false;
    const map1 = [256];
    const map2 = [256];

    for(let idx = 0; idx < s.length; idx++){
        
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;

        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true; 
};

const string1 = "egg";
const string2 = "add";

console.log(isIsomorphic(string1, string2)); //  true