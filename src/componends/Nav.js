import React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="icon">
          <motion.svg
            variants={icon}
            initial="hidden"
            animate="visible"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000.000000 1080.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <motion.path
                d="M4790 8163 c-165 -12 -420 -68 -582 -127 -222 -81 -254 -104 -294
                            -212 l-27 -76 6 -426 c13 -821 20 -1147 23 -1151 3 -3 7 1167 6 1529 0 52 4
                            43 89 -185 100 -266 570 -1537 684 -1850 250 -686 299 -815 321 -863 13 -29
                            24 -57 24 -62 0 -6 4 -10 8 -10 5 0 9 -6 9 -13 0 -23 237 -586 245 -581 4 3 5
                            -1 3 -9 -3 -7 8 -44 25 -81 16 -37 30 -72 30 -77 0 -5 -151 -9 -359 -9 -278 0
                            -360 3 -364 13 -2 6 -115 296 -250 642 -135 347 -275 707 -310 800 -36 94 -82
                            213 -103 265 l-37 95 -7 195 c-5 173 -16 -1191 -15 -1920 1 -265 7 -307 52
                            -361 66 -78 388 -187 690 -234 145 -22 406 -30 553 -16 316 31 685 136 787
                            225 65 57 83 101 95 230 13 138 15 851 5 1429 -4 240 -3 437 1 437 5 0 28 46
                            52 103 24 56 46 107 50 112 4 6 10 23 14 40 4 16 11 32 15 35 3 3 19 37 35 75
                            16 39 39 93 53 120 13 28 25 59 27 68 1 9 8 23 14 29 7 7 12 20 12 30 0 10 5
                            18 11 18 6 0 9 7 5 15 -3 8 -1 15 4 15 6 0 10 5 10 10 0 6 11 33 25 62 14 28
                            25 56 25 60 0 5 13 36 29 69 17 32 28 59 25 59 -2 0 7 23 21 50 14 28 23 56
                            19 63 -4 7 -4 9 1 5 10 -9 48 69 47 95 0 10 4 15 10 11 7 -5 9 -1 5 9 -4 10
                            -2 17 4 17 6 0 8 7 5 16 -3 8 -2 12 4 9 6 -3 10 3 10 14 0 12 5 21 12 21 6 0
                            9 3 5 6 -3 4 1 13 9 21 8 9 13 18 10 21 -11 10 -48 -46 -96 -145 -63 -131 -81
                            -173 -72 -173 4 0 2 -4 -4 -8 -5 -4 -48 -90 -93 -192 -46 -102 -90 -199 -98
                            -217 -8 -18 -11 -37 -7 -44 4 -7 3 -9 -3 -6 -12 8 -106 -200 -97 -215 4 -6 3
                            -8 -3 -5 -5 3 -33 -49 -63 -116 -67 -153 -22 -39 -369 -927 -302 -775 -376
                            -959 -389 -972 -4 -4 -7 6 -8 23 -1 16 -8 44 -17 62 -8 18 -27 64 -42 102 -15
                            39 -39 97 -55 130 -28 61 -54 126 -55 135 -1 3 -9 19 -18 37 -9 18 -17 36 -17
                            41 0 5 -12 36 -26 68 -18 41 -28 54 -34 44 -5 -8 -7 3 -4 29 2 26 0 40 -6 36
                            -6 -3 -10 0 -10 8 0 8 -13 45 -29 83 l-29 67 33 96 c18 53 60 168 93 256 71
                            188 639 1684 820 2160 117 308 126 335 126 402 1 63 -2 75 -24 99 -82 89 -557
                            233 -874 263 -102 10 -300 12 -406 4z m-873 -395 c-3 -7 -5 -2 -5 12 0 14 2
                            19 5 13 2 -7 2 -19 0 -25z"
              />
              <motion.path
                d="M3085 7145 c-48 -17 -61 -32 -132 -153 -147 -250 -252 -553 -299
                -867 -22 -146 -25 -474 -5 -615 44 -324 178 -727 272 -821 68 -68 169 -75 235
                -16 66 57 67 63 75 372 9 376 0 1990 -12 2038 -15 59 -69 85 -134 62z"
              />
              <motion.path
                d="M6828 7140 c-14 -10 -30 -32 -37 -47 -8 -21 -11 -330 -9 -1188 l3
                -1160 24 -39 c51 -82 155 -95 248 -33 42 28 55 46 103 144 94 189 158 414 191
                671 19 142 16 490 -5 637 -50 353 -161 673 -313 905 -82 125 -144 158 -205
                110z"
              />
              <motion.path
                d="M6679 7063 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
                -17z"
              />
            </g>
          </motion.svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
