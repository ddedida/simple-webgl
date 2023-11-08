var vertices = [
    
    // Huruf D
    -0.6,0.4,0.1,       // 0 - Titik D1 Luar
    -0.6,0.4,-0.1,      // 1 - Titik D1 Dalam
    -0.2,0.4,0.1,       // 2 - Titik D2 Luar
    -0.2,0.4,-0.1,      // 3 - Titik D2 Dalam
    -0.1,0.3,0.1,       // 4 - Titik D3 Luar
    -0.1,0.3,-0.1,      // 5 - Titik D3 Dalam
    -0.1,-0.3,0.1,      // 6 - Titik D4 Luar
    -0.1,-0.3,-0.1,     // 7 - Titik D4 Dalam
    -0.2,-0.4,0.1,      // 8 - Titik D5 Luar
    -0.2,-0.4,-0.1,     // 9 - Titik D5 Dalam
    -0.6,-0.4,0.1,      // 10 - Titik D6 Luar
    -0.6,-0.4,-0.1,     // 11 - Titik D6 Dalam

    -0.45,0.25,0.1,       // 12 - Titik D7 Luar
    -0.45,0.25,-0.1,      // 13 - Titik D7 Dalam
    -0.29,0.25,0.1,      // 14 - Titik D8 Luar
    -0.29,0.25,-0.1,     // 15 - Titik D8 Dalam
    -0.25,0.21,0.1,      // 16 - Titik D9 Luar
    -0.25,0.21,-0.1,     // 17 - Titik D9 Dalam
    -0.25,-0.21,0.1,     // 18 - Titik D10 Luar
    -0.25,-0.21,-0.1,    // 19 - Titik D10 Dalam
    -0.29,-0.25,0.1,     // 20 - Titik D11 Luar
    -0.29,-0.25,-0.1,    // 21 - Titik D11 Dalam
    -0.45,-0.25,0.1,      // 22 - Titik D12 Luar
    -0.45,-0.25,-0.1,     // 23 - Titik D12 Dalam

    -0.45,0.4,0.1,       // 24 - Titik D13 Luar
    -0.45,0.4,-0.1,      // 25 - Titik D13 Dalam
    
    -0.45,-0.4,0.1,      // 26 - Titik D14 Luar
    -0.45,-0.4,-0.1,     // 27 - Titik D14 Dalam

    -0.25,0.25,0.1,       // 28 - Titik D15 Luar
    -0.25,0.25,-0.1,      // 29 - Titik D15 Dalam

    -0.25,-0.25,0.1,      // 30 - Titik D16 Luar
    -0.25,-0.25,-0.1,     // 31 - Titik D17 Dalam

    // Huruf E
    0.1,0.4,0.1,        // 32 - Titik E1 Luar
    0.1,0.4,-0.1,       // 33 - Titik E1 Dalam
    0.6,0.4,0.1,        // 34 - Titik E2 Luar
    0.6,0.4,-0.1,       // 35 - Titik E2 Dalam
    0.6,0.2,0.1,        // 36 - Titik E3 Luar
    0.6,0.2,-0.1,       // 37 - Titik E3 Dalam
    0.3,0.2,0.1,       // 38 - Titik E4 Luar
    0.3,0.2,-0.1,      // 39 - Titik E4 Dalam
    0.3,0.1,0.1,      // 40 - Titik E5 Luar
    0.3,0.1,-0.1,     // 41 - Titik E5 Dalam
    0.6,0.1,0.1,       // 42 - Titik E6 Luar
    0.6,0.1,-0.1,      // 43 - Titik E6 Dalam
    0.6,-0.1,0.1,      // 44 - Titik E7 Luar
    0.6,-0.1,-0.1,     // 45 - Titik E7 Dalam
    0.3,-0.1,0.1,     // 46 - Titik E8 Luar
    0.3,-0.1,-0.1,    // 47 - Titik E8 Dalam
    0.3,-0.2,0.1,      // 48 - Titik E9 Luar
    0.3,-0.2,-0.1,     // 49 - Titik E9 Dalam
    0.6,-0.2,0.1,       // 50 - Titik E10 Luar
    0.6,-0.2,-0.1,      // 51 - Titik E10 Dalam
    0.6,-0.4,0.1,       // 52 - Titik E11 Luar
    0.6,-0.4,-0.1,      // 53 - Titik E11 Dalam
    0.1,-0.4,0.1,       // 54 - Titik E12 Luar
    0.1,-0.4,-0.1,      // 55 - Titik E12 Dalam

    0.3,0.4,0.1,        // 56 - Titik E13 Luar
    0.3,0.4,-0.1,       // 57 - Titik E13 Dalam
    0.3,-0.4,0.1,       // 58 - Titik E14 Luar
    0.3,-0.4,-0.1,      // 59 - Titik E14 Dalams
];

var colors = [
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   1,1,0, 1,1,0, 1,1,0, 1,1,0,
   1,0,0, 1,0,0, 1,0,0, 1,0,0,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,0, 0,1,0, 0,1,0, 0,1,0,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   1,1,0, 1,1,0, 1,1,0, 1,1,0,
   1,0,0, 1,0,0, 1,0,0, 1,0,0,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,0, 0,1,0, 0,1,0, 0,1,0,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   1,1,0, 1,1,0, 1,1,0, 1,1,0,
   1,0,0, 1,0,0, 1,0,0, 1,0,0,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,0, 0,1,0, 0,1,0, 0,1,0,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   1,1,0, 1,1,0, 1,1,0, 1,1,0,
];

var indices = [
   
   // Huruf D
   0,1,2, 1,2,3,
   2,3,4, 3,4,5,
   4,5,6, 5,6,7,
   6,7,8, 7,8,9,
   8,9,10, 9,10,11,
   10,11,0, 11,0,1,

   12,13,14, 13,14,15,
   14,15,16, 15,16,17,
   16,17,18, 17,18,19,
   18,19,20, 19,20,21,
   20,21,22, 21,22,23,
   22,23,12, 23,12,13,
   0,24,26, 0,10,26,
   1,25,27, 1,11,27,
   24,2,28, 24,28,12,
   25,3,29, 25,29,13,
   2,4,28, 3,5,29,
   22,8,30, 22,8,26,
   23,9,31, 23,9,27,
   6,8,30, 7,9,31,
   14,16,28, 15,17,29,
   18,20,30, 19,21,31,
   4,6,28, 6,30,28,
   5,7,29, 7,31,29,

   // Huruf E
   32,33,34, 33,34,35,
   34,35,36, 35,36,37,
   36,37,38, 37,38,39,
   38,39,40, 39,40,41,
   40,41,42, 41,42,43,
   42,43,44, 43,44,45,
   44,45,46, 45,46,47,
   46,47,48, 47,48,49,
   48,49,50, 49,50,51,
   50,51,52, 51,52,53,
   52,53,54, 53,54,55,
   54,55,32, 55,32,33,

   32,56,58, 32,58,54,
   33,57,59, 33,59,55,
   34,36,56, 36,38,56,
   35,37,57, 37,39,57,
   40,42,44, 40,44,46,
   41,43,45, 41,45,47,
   48,50,52, 48,52,58,
   49,51,53, 49,53,59
];