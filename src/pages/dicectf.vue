<template>
  <div class="container">
    <h1>DICECTF 2023 Writeup </h1>
    <hr/>
    <p> &#128198 6/3/2023</p> 
    <p> i am straight up bedge lol </p>
    <div class="post-nav">
      <h3> Challenges </h3>
      <details open=""> 
        <summary>Cryptography</summary>
          <ul> 
            <li>
              <a href="#rSabin">rSabin</a>
              </li>
          </ul>
          <ul> 
            <li>
              <a href="#bbbb">bbbb</a>
              </li>
          </ul>
      </details>
    </div>
    <div>
      <h2 id="rSabin">rSabin</h2>
      <hr />
      <p> Kinda em classic rsa problem where u need to factorize the modulus N to get decrypt the encrypted message </p>
      <div class="chall"> 
        <h3> Challenge Description </h3>
        <p> As <a href="https://ctftime.org/writeup/32264">baby RSA showed </a>, nth_root is pretty useful and definitely always fast.</p>
        <p> Source: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/rSabin/source/challenge.py"> link</a>  </p>
        <p> Solver: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/rSabin/solver/solver.py"> my solver </a> </p>
      </div>
      <h3> Solution </h3>
      <p> One can realize this challenge's cryptosystem is somewhat similar to Rabin cryptosystem by nth_root decryption and small public exponent (e=17), which provides poor security against CPA (chosen-ciphertext attacks). Here is a explained example: <a href="https://crypto.stackexchange.com/questions/96060/rabin-cryptosystem-chosen-ciphertext-attack"> link </a> </p>
      <HighLight autodetect v-bind:code="code" />
      <p> From then, here are the steps to solve the problem </p>
      <p> - Reset reconnection until u can get e|p-1 or e|q-1 </p>
      <p> - Reset reconnection until u can get e|p-1 or e|q-1 </p>

      <h2 id="bbbb">bbbb</h2>
      <hr />
      <p> i did not solve this challenge during CTF unfortunately (i messed up Coppersmith method parameters), and a teammate of mine help me out on lcg part</p>
      <div class="chall"> 
        <h3> Challenge Description </h3>
        <p> i prefer LCGs over QCGs to be honest...</p>
        <p> based off <a href="https://ctftime.org/task/23982"> BBB</a> from SECCON CTF 2022</p>
        <p> Source: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/BBBB/source/bbbb.py"> link</a> </p>
        <p> Solver: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/BBBB/solver/solver.py"> my solver</a> </p>
      </div>
      
    </div>
  </div>
</template>


<script>
export default {  
  setup() {
    const code = String.raw`class Server:
    def __init__(self):
        e = 17
        nbits = 512

        p = getPrime(nbits)
        q = getPrime(nbits)
        N = p * q

        self.p = p
        self.q = q
        self.N = N
        self.e = e

    def encrypt(self, m):
        assert 0 <= m < self.N
        c = pow(m, self.e, self.N)
        return int(c)

    def decrypt(self, c):
        assert 0 <= c < self.N
        mp = int(nth_root(c, self.p, self.e))
        mq = int(nth_root(c, self.q, self.e))
        m = chinese_remainder([mp, mq], [self.p, self.q])
        return int(m)`;
    return {
      code,
    };
  },
};
</script>
