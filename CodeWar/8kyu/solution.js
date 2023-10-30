/* 
    Given 2 strings, a and b, return a string of the form short+long+short,
     with the shorter string on the outside and the longer string on the inside.
     The strings will not be the same length, but they may be empty ( zero length ).
    
    ("1", "22") --> "1221"
    ("22", "1") --> "1221" 
    
    (13', '200') --> '1320013';
    ('Soon', 'Me') --> 'MeSoonMe'
    
   */
   function solution(a, b){
    return a.length>b.length ? a+b+a : b+a+b
    
    }
    