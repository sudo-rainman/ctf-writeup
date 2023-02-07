<template>
  <div class="container">
    <h1>DiceCTF 2023 Writeup </h1>
    <hr/>
    <p> &#128198 6/3/2023</p> 
    <p> More like DieCTF &#128128	&#128128</p>
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
      <p> Kinda em classic RSA problem in CTF where u need to factorize the modulus N to decrypt the encrypted message </p>
      <div class="chall"> 
        <h3> Challenge Description </h3>
        <p> As <a href="https://ctftime.org/writeup/32264">baby RSA showed </a>, nth_root is pretty useful and definitely always fast.</p>
        <p> Source: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/rSabin/source/challenge.py"> link</a>  </p>
        <p> Solver: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/rSabin/solver/solver.py"> my solver </a> </p>
      </div>
      <h3> Solution </h3>
      <p> One can realize this challenge's cryptosystem is somewhat similar to Rabin cryptosystem by nth_root decryption and small public exponent (e=17) (or the challs name), which provides poor security against CPA (chosen-ciphertext attack). Here is an explained example: <a href="https://crypto.stackexchange.com/questions/96060/rabin-cryptosystem-chosen-ciphertext-attack"> link </a> </p>
      <HighLight autodetect v-bind:code="code" />
      <p> So now we got the idea of the attack when e=2, how to expand it to our case which is e=17 </p>
      <p>(1) Assume <strong> e|p-1 </strong> or <strong> e|q-1 </strong> </p>
      <p>(2) Pick a random number r, compute <math-jax latex="s=r^{17} \mod N"></math-jax>, then send s to the decryptor  </p>
      <p>(3) The challs decryptor will return us some number <math-jax latex="t_i=\sqrt[17]{s} \mod N"> </math-jax> where i = 1,2,...,16 </p>
      <p>
      (4) Because of our assumption in (1), decryption of s will not be unique and exist 17 roots where <math-jax latex="t_1^{17}=t_2^{17}=...=t_{16}^{17}=r^{17}=s \mod N"> </math-jax> then we have <math-jax latex="t_i^{17}-r^{17}=0 \mod N"> </math-jax>,which can be factor as <math-jax latex="(t_i - r)*(some polynomial) =0 \mod N"> </math-jax> 
      so if we took <math-jax latex="gcd((t_i - r),N)"> </math-jax> we can get a non trivial factor of N 
      </p>
      <p>(5) After we factor out p,q from N, and decrypt the ciphertext (i used <strong> Cantor-Zassenhaus algo </strong>to calculate nth root of p cuz the built-in nth_root function of SageMath runs too slow)</p>
      <p>(6) The last step is to decode OAEP encoding </p>
      <p> Enough talks, here's my solve script. (Note: to satisty condition (1) we just need to reconnection till it is)</p>
      <HighLight autodetect v-bind:code="code1" />
      <p> My OAEP decoder for step (6) </p>
      <HighLight autodetect v-bind:code="code2" />
      <p> <strong>Flag</strong>: dice{rabin-williams-cryptosystem-in-disguise-3038e78caa07} </p>
      <h2 id="bbbb">bbbb</h2>
      <hr />
      <p> i did not solve this challenge during CTF unfortunately (i messed up the Coppersmith method parameters, oopsie), and a teammate of mine help me out on lcg part</p>
      <p> Credit to my teammate who comes up with the idea for LCG part (nothing)</p>
      <div class="chall"> 
        <h3> Challenge Description </h3>
        <p> i prefer LCGs over QCGs to be honest...</p>
        <p> based off <a href="https://ctftime.org/task/23982"> BBB</a> from SECCON CTF 2022</p>
        <p> Source: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/BBBB/source/bbbb.py"> link</a> </p>
        <p> Solver: <a href="https://github.com/sudo-rainman/ctf_script/blob/main/dicectf_2023/BBBB/solver/solver.py"> my solver</a> </p>
      </div>
      <p> Chall description is best describe here: <a href="https://imp.ress.me/blog/2022-11-13/seccon-ctf-2022#bbb"> SECCON CTF 2022 - bbb </a> </p>
      <p> The differences are the rng function used in this chall is LCG ( y= a.x + b ) insteads of QCG  and there were random noises added to the flag before encryption  </p>
      <p> For this chall the padded <strong> FLAG </strong> is at most 552 bits long, so minimum of 3 pairs of 2048-bit RSA key and an e=11 (1) is vulnerable to Hastad's attack but since there were random noises, a more generalization of Hastad's broadcast attack shud be used. </p> 
      <p> So to solve for the condition (1) where we want to send 3 different seeds and it must always satisfy that rng(seed) = 11. </p>
      <p> We first must calculate <strong>a </strong> such that the rng have cycle length of 3 where the starting seed is 11</p>
      <p> The success rate is <math-jax latex="\frac{1}{27}"> </math-jax> since all three of the seed have cycle of 3 but may overshoot value 11 (rng(1st_seed)=11 when the rng run time is divided by 3, rng(2nd_seed)=11 when the rng run time is 2 modulo 3, rng(3rd_seed)=11 when the rng run time is 1 modulo 3)</p>
      <div style="display: flex; justify-content: center; ">
      <img src="../assets/dicectf/lcg.png"> 
      </div>
      <p> Which is essentially solving for roots (a) of equation <math-jax latex="f = 11a^3+(a^2 + a + 1).b-11 = 0 \mod N"> </math-jax> </p>
      <HighLight autodetect v-bind:code="code3" />
      <p> Afterward, just chunk the general Hastad's broadcast attack into the ciphertext pairs to recover the flag </p>
      <div style="display: flex; justify-content: center;">
      <img style="width:100%;" src="../assets/dicectf/hastad.png" > 
      </div>
      <p> Where our <math-jax latex="g_i(M) = (M.2^{128} + r)^{11} - c = 0  (\mod N_i)"> </math-jax> (r is the noise and c is the ciphertext)</p>
      <p> Here is my Hastad's script (gon take awhile to solve for this chall cuz high m)</p>
      <HighLight autodetect v-bind:code="code4" />
      <p> <strong>Flag</strong>: dice{r3s0rt_t0_LCG_4ft3r_f41l1ng_t0_m4k3_ch4ll} </p>
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
    const code1 =  String.raw`
e= 17
found = False

while not found:
    r = remote("mc.ax",31370)
    # temp = 1000000000000000000
    temp = 2**61
    
    collectN = []
  
    
    while len(collectN) < 5:
        temp1 = pow(temp,e)
        r.recvuntil("> ")
        r.sendline("E")
        r.recvuntil("> ")
        r.sendline(str(temp))
        temp3 = int(r.recvline().decode())
        if temp3 < temp1:
            collectN.append(temp1 - temp3)
            temp *=2
           
    N = collectN[0]

    for i in collectN[1:]:
        N = gcd(N,i)
    
    for i in range(1,65537):
        fact = gcd(N,i)
        if fact != 1:
            N = N//fact
    
    print("N here")
    print(N)
    if N < 2**1024 and N !=0 and N!= 1:
        r.recvuntil("> ")
        r.sendline("E")
        r.recvuntil("> ")
        r.sendline(str(temp))
        temp1 = int(r.recvline().decode())
        r.recvuntil("> ")
        r.sendline("D")
        r.recvuntil("> ")
        r.sendline(str(temp1))
        temp2 = int(r.recvline().decode())
        temp5 = temp-temp2
        if temp5 <0:
            temp5 = temp2 - temp
        temp3 = gcd(temp5,N)
        temp4 = N//temp3
        cipher = 0
        
        if temp3*temp4 == N and temp3 != N and temp3 != 1:
            print("p here")
            print(temp3)
            print("q here")
            print(temp4)
            r.recvuntil("> ")
            r.sendline("F")
            cipher = int(r.recvline().decode())
            print("cipher here")
            print(cipher)
        
            x = PolynomialRing(GF(temp4),"x").gens()[0]
            p_roots = mod(cipher, temp3).nth_root(e, all=True)
            f = x**17 - cipher
            q_roots = f.roots()
            
            # q_roots = mod(cipher, temp4).nth_root(e, all=True)
            for xp in p_roots:
                for xq,j in q_roots:
                    x = crt([Integer(xp), Integer(xq)], [temp3,temp4])
                    x = int(x)
                    flag = decrypt(x)
                    print(flag)
                    if b"dice" in flag:
                        print(flag)
                        print("yay")
                        found = True
                        break
    r.close()`;
    const code2 = String.raw`def decrypt(ciphertext):
        _hashObj = Crypto.Hash.SHA1
        modBits = Crypto.Util.number.size(N)
        k = ceil_div(modBits,8)
        hLen = _hashObj.digest_size
        em = long_to_bytes(ciphertext, k)
        _label = _copy_bytes(None, None, b'')
        lHash = _hashObj.new(_label).digest()   

        y = em[0]
        maskedSeed = em[1:hLen+1]
        maskedDB = em[hLen+1:]

        _mgf = lambda x,y: MGF1(x,y,_hashObj)
        seedMask = _mgf(maskedDB, hLen)
        seed = strxor(maskedSeed, seedMask)
        dbMask = _mgf(seed, k-hLen-1)
        db = strxor(maskedDB, dbMask)

        one_pos = hLen + db[hLen:].find(b'\x01')
        lHash1 = db[:hLen]
        invalid = bord(y) | int(one_pos < hLen)
        hash_compare = strxor(lHash1, lHash)
        
        for x in hash_compare:
            invalid |= bord(x)
        for x in db[hLen:one_pos]:
            invalid |= bord(x)
        
        return db[one_pos + 1:]`;
    const code3 = String.raw`X=PolynomialRing(GF(p),"X").gens()[0]
        seed1=11
        f=X**3*11+(X**2+X+1)*b-11
        lst=f.roots()`;
    const code4 = String.raw`from sage.all import *
from Crypto.Util.number import *
import itertools

def small_roots(f, bounds, m=1, d=None):
	if not d:
		d = f.degree()

	R = f.base_ring()
	N = R.cardinality()
	
	f /= f.coefficients().pop(0)
	f = f.change_ring(ZZ)

	G = Sequence([], f.parent())
	for i in range(m+1):
		base = N**(m-i) * f**i
		for shifts in itertools.product(range(d), repeat=f.nvariables()):
			g = base * prod(map(power, f.variables(), shifts))
			G.append(g)

	B, monomials = G.coefficient_matrix()
	monomials = vector(monomials)

	factors = [monomial(*bounds) for monomial in monomials]
	for i, factor in enumerate(factors):
		B.rescale_col(i, factor)

	B = B.dense_matrix().LLL()

	B = B.change_ring(QQ)
	for i, factor in enumerate(factors):
		B.rescale_col(i, 1/factor)

	H = Sequence([], f.parent().change_ring(QQ))
	for h in filter(None, B*monomials):
		H.append(h)
		I = H.ideal()
		if I.dimension() == -1:
			H.pop()
		elif I.dimension() == 0:
			roots = []
			for root in I.variety(ring=ZZ):
				root = tuple(R(root[var]) for var in f.variables())
				roots.append(root)
			return roots

	return []

def linear_padding(ciphertexts, moduli, const_array=(), eps=1/8):
    
    T_array = [Integer(0)]*3
    crt_array = [Integer(0)]*3
    polynomial_array = []

    for i in range(3):
        crt_array = [0]*3
        crt_array[i] = 1
        T_array[i] = Integer(crt(crt_array,moduli))

    x = PolynomialRing(Zmod(prod(moduli)),1,"x").gens()[0]
    for i in range(3):
        polynomial_array += [T_array[i]*(  (x*2**(16*8)+ const_array[i])**11 - Integer(ciphertexts[i]))] #Representation of polynomial f(x) = (A*x + b) ** e - C where (A*x + b) is the padding polynomial

    g = sum(polynomial_array)
    N = prod(moduli)
    
    
    roots = small_roots(g,[2**(8*54)],m=4)
    return roots[0][0] if len(roots) >= 1 else -1`

    return {
      code,code1,code2,code3,code4,
    };
  },
};
</script>
