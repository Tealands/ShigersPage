# この極限を求めよ

#### 問題

$$
lim(a \rightarrow \infty)  
\frac{4a^{2}}{\left(3-\sqrt{9+12a}\right)^{2}} + 
\frac{4a^{2}}{\left(3+\sqrt{9+12a}\right)^{2}}
$$

---

#### 解答

$\frac{\left(3-\sqrt{9+12a}\right)}{2a} = \alpha$

$\frac{\left(3+\sqrt{9+12a}\right)}{2a} = \beta$

とおくと、これらは次の2次方程式の解である。

$ax^2 - 3x -3 = 0$
ここで、$lim(a \rightarrow \infty)$を考えると、

$\alpha$は$-3\alpha -3=0$

$\beta$は無限大に発散する。
よって
$$
lim(a \rightarrow \infty)  
\frac{4a^{2}}{\left(3-\sqrt{9+12a}\right)^{2}} + 
\frac{4a^{2}}{\left(3+\sqrt{9+12a}\right)^{2}}
= 1 + 0 = 1
$$