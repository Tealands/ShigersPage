# カラツバ法 (Karatsuba Algorithm)

こちらは6月に電気通信大学で行われたTech Circle Expo#8で発表した内容になります。

## 概要

カラツバ法は、大きな整数の**高速乗算アルゴリズム**です。  
通常の筆算乗算は $O(n^2)$ ですが、カラツバ法は **$O(n^{\log_2 3}) \approx O(n^{1.585})$** で計算できます。

1960年にソ連の数学者アナトリー・カラツバが考案しました。

前提として、足し算、引き算は高速でできます。しかし、掛け算や割り算は比較的時間がかかってしまいます(これは感覚からもわかりやすいでしょう)。これはコンピューターも同じです。なので、できるだけ掛け算割り算の回数を減らす工夫を施すと計算を高速化することができるのです。

---

## アイデア

2つの $n$ 桁の数 $X$、$Y$ を半分に分割します。

$$
X = A \cdot 10^{n/2} + B
$$
$$
Y = C \cdot 10^{n/2} + D
$$

### 素朴な方法（4回の乗算）

$$
X \cdot Y = AC \cdot 10^n + (AD + BC) \cdot 10^{n/2} + BD
$$

$AC$、$AD$、$BC$、$BD$ の **4回**の乗算が必要。

### カラツバの工夫（3回の乗算）

次の3つだけ計算します：

$$
z_0 = AC
$$
$$
z_2 = BD
$$
$$
z_1 = (A+B)(C+D) - z_0 - z_2 = AD + BC
$$

$$
X \cdot Y = z_0 \cdot 10^n + z_1 \cdot 10^{n/2} + z_2
$$

乗算が **4回→3回** に減り、再帰的に適用することで全体の計算量が削減されます。

例えば、$X=1234$、$Y=5678$ の場合：

- $A=12$, $B=34$, $C=56$, $D=78$, $n=2$と求められます。<br>
$1234 = 12 \cdot 100 + 34$<br>
$5678 = 56 \cdot 100 + 78$<br>

- $z_0 = 12 \cdot 56 = 672$
- $z_2 = 34 \cdot 78 = 2652$
- $z_1 = (12+34)(56+78) - 672 - 2652 = 46 \cdot 134 - 672 - 2652 = 6164 - 672 - 2652 = 3840$
- $X \cdot Y = 672 \cdot 10^4 + 3840 \cdot 10^2 + 2652 = 6720000 + 384000 + 2652 = 7006652$

人がこんな計算をやるとかえって時間がかかってしまいますが、コンピューターはこのような再帰的な計算を高速に行うことができます。以下にC++での実装例を示します。

---

## C++ 実装

### シンプルな実装（long long 版）

```cpp
#include <bits/stdc++.h>
using namespace std;

// カラツバ法で x * y を計算する
long long karatsuba(long long x, long long y) {
    // ベースケース：小さい数は普通に掛け算
    if (x < 100 || y < 100) {
        return x * y;
    }

    // 桁数を求めて半分に分割
    int n = max(to_string(x).size(), to_string(y).size());
    long long half = n / 2;
    long long base = 1;
    for (int i = 0; i < half; i++) base *= 10;

    // x = A * base + B
    // y = C * base + D
    long long A = x / base;
    long long B = x % base;
    long long C = y / base;
    long long D = y % base;

    // 3回の再帰呼び出し
    long long z0 = karatsuba(A, C);          // AC
    long long z2 = karatsuba(B, D);          // BD
    long long z1 = karatsuba(A + B, C + D)  // (A+B)(C+D)
                   - z0 - z2;               // → AD + BC

    return z0 * base * base + z1 * base + z2;
}

int main() {
    cout << karatsuba(1234, 5678) << endl;   // 7006652
    cout << karatsuba(12345, 67890) << endl; // 838102050
    return 0;
}
```

---

### 多倍長整数版（vector\<int\> で任意桁の乗算）

競技プログラミングでよく使われる、任意精度の実装です。

```cpp
#include <bits/stdc++.h>
using namespace std;

// 多倍長整数を vector<long long> で表現
// v[i] は base^i の係数
// base = 10000 にすると効率的

using vl = vector<long long>;

// v を正規化（繰り上がり処理）
vl normalize(vl v, long long base) {
    long long carry = 0;
    for (auto& x : v) {
        x += carry;
        carry = x / base;
        x %= base;
    }
    while (carry > 0) {
        v.push_back(carry % base);
        carry /= base;
    }
    while (v.size() > 1 && v.back() == 0) v.pop_back();
    return v;
}

// 加算
vl add(const vl& a, const vl& b) {
    vl res(max(a.size(), b.size()) + 1, 0);
    for (int i = 0; i < (int)a.size(); i++) res[i] += a[i];
    for (int i = 0; i < (int)b.size(); i++) res[i] += b[i];
    return res;
}

// 減算（a >= b を仮定）
vl sub(const vl& a, const vl& b) {
    vl res = a;
    for (int i = 0; i < (int)b.size(); i++) res[i] -= b[i];
    // 借り処理
    for (int i = 0; i + 1 < (int)res.size(); i++) {
        if (res[i] < 0) {
            res[i] += 10000;
            res[i + 1]--;
        }
    }
    while (res.size() > 1 && res.back() == 0) res.pop_back();
    return res;
}

// base^shift だけシフト（係数をずらす）
vl shift(const vl& a, int s) {
    vl res(a.size() + s, 0);
    for (int i = 0; i < (int)a.size(); i++) res[i + s] = a[i];
    return res;
}

// カラツバ法による乗算
vl karatsuba(const vl& a, const vl& b) {
    int n = max(a.size(), b.size());

    // ベースケース
    if (n == 1) {
        return {a[0] * b[0]};
    }

    int half = n / 2;

    // a = A * base^half + B
    vl B(a.begin(), a.begin() + min(half, (int)a.size()));
    vl A(a.begin() + min(half, (int)a.size()), a.end());
    if (A.empty()) A = {0};
    if (B.empty()) B = {0};

    vl D(b.begin(), b.begin() + min(half, (int)b.size()));
    vl C(b.begin() + min(half, (int)b.size()), b.end());
    if (C.empty()) C = {0};
    if (D.empty()) D = {0};

    // 3回の再帰
    vl z0 = karatsuba(A, C);            // AC
    vl z2 = karatsuba(B, D);            // BD
    vl z1 = karatsuba(add(A, B),        // (A+B)(C+D) - AC - BD
                      add(C, D));
    z1 = sub(sub(z1, z0), z2);         // = AD + BC

    // X*Y = AC * base^(2*half) + (AD+BC) * base^half + BD
    vl result = add(add(shift(z0, 2 * half), shift(z1, half)), z2);
    return result;
}

int main() {
    // 1234 * 5678 を計算
    // base=10000 なので 1要素に収まる
    vl a = {1234};
    vl b = {5678};
    vl res = karatsuba(a, b);

    // 結果を出力
    cout << res.back();
    for (int i = (int)res.size() - 2; i >= 0; i--) {
        cout << setw(4) << setfill('0') << res[i];
    }
    cout << endl; // 7006652

    return 0;
}
```

---

## 計算量の解析

再帰式：

$$
Tn = 3 \cdot T\left(\frac{n}{2}\right) + On
$$

マスター定理を適用すると：

$$
Tn = O(n^{\log_2 3}) \approx O(n^{1.585})
$$

| 手法 | 計算量 |
|------|--------|
| 筆算（素朴） | $O(n^2)$ |
| カラツバ法 | $O(n^{1.585})$ |
| FFT を使った乗算 | $O(n \log n \log \log n)$ |

---

## 実行例

```
karatsuba(1234, 5678) = 7006652
karatsuba(999, 999)   = 998001
karatsuba(12345, 67890) = 838102050
```

---

## 時間計測

ここからは本当に時間短縮になっているかを大きな数で計測してみましょう。  
素朴な $O(n^2)$ 乗算と比較し、カラツバ法の優位性を確認します。

別スレッドでタイマーを動かしながら計測します(スレッドとは何かはここでは省略します)。
<div style="text-align: center;">
カラツバ法
</div>

```cpp
#include <bits/stdc++.h>
#include <thread>
#include <atomic>
using namespace std;

using vl = vector<long long>;
const long long BASE = 10000;

// 文字列 → vl（下位桁から BASE=10000 単位で格納）
vl fromString(const string& s) {
    vl res;
    int i = (int)s.size();
    while (i > 0) {
        int start = max(0, i - 4);
        res.push_back(stoll(s.substr(start, i - start)));
        i = start;
    }
    while (res.size() > 1 && res.back() == 0) res.pop_back();
    return res;
}

// vl → 文字列
string toString(const vl& v) {
    string res = to_string(v.back());
    for (int i = (int)v.size() - 2; i >= 0; i--) {
        string part = to_string(v[i]);
        res += string(4 - part.size(), '0') + part;
    }
    return res;
}

// 正規化（繰り上がり処理 + 末尾0トリム）
vl normalize(vl v) {
    long long carry = 0;
    for (auto& x : v) {
        x += carry;
        carry = x / BASE;
        x %= BASE;
    }
    while (carry > 0) {
        v.push_back(carry % BASE);
        carry /= BASE;
    }
    while (v.size() > 1 && v.back() == 0) v.pop_back();
    return v;
}

// 加算（正規化して返す — サイズが不必要に膨らむのを防ぐ）
vl add(const vl& a, const vl& b) {
    vl res(max(a.size(), b.size()) + 1, 0);
    for (int i = 0; i < (int)a.size(); i++) res[i] += a[i];
    for (int i = 0; i < (int)b.size(); i++) res[i] += b[i];
    return normalize(res);
}

// 減算（a >= b を仮定）
vl sub(const vl& a, const vl& b) {
    vl res = a;
    if (res.size() < b.size()) res.resize(b.size(), 0);
    for (int i = 0; i < (int)b.size(); i++) res[i] -= b[i];
    for (int i = 0; i + 1 < (int)res.size(); i++) {
        if (res[i] < 0) {
            res[i] += BASE;
            res[i + 1]--;
        }
    }
    while (res.size() > 1 && res.back() == 0) res.pop_back();
    return res;
}

// base^s だけシフト
vl shift(const vl& a, int s) {
    vl res(a.size() + s, 0);
    for (int i = 0; i < (int)a.size(); i++) res[i + s] = a[i];
    return res;
}

// カラツバ法による乗算
vl karatsuba(vl a, vl b) {
    int n = max(a.size(), b.size());

    // ベースケース: 小さいサイズは素朴な O(n^2) 乗算
    // add で桁上がりが起きると n が縮まらず無限再帰になるため閾値を設ける
    if (n <= 4) {
        a.resize(n, 0);
        b.resize(n, 0);
        vl res(2 * n, 0);
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                res[i + j] += a[i] * b[j];
        return normalize(res);
    }

    // サイズを n に揃える
    a.resize(n, 0);
    b.resize(n, 0);

    int half = n / 2;

    vl B(a.begin(), a.begin() + half);
    vl A(a.begin() + half, a.end());

    vl D(b.begin(), b.begin() + half);
    vl C(b.begin() + half, b.end());

    vl z0 = karatsuba(A, C);                       // AC
    vl z2 = karatsuba(B, D);                       // BD
    vl z1 = karatsuba(add(A, B), add(C, D));       // (A+B)(C+D)
    z1 = sub(sub(z1, z0), z2);                     // AD + BC

    // X*Y = AC * BASE^(2*half) + (AD+BC) * BASE^half + BD
    return normalize(add(add(shift(z0, 2 * half), shift(z1, half)), z2));
}

// スレッドタイマー
// 毎秒 \b で前の桁数分だけ戻して秒数を上書き表示
void timerThread(atomic<bool>& running) {
    int sec = 0;
    string prev = to_string(sec);
    cout << "計測中... " << prev << flush;

    while (running) {
        this_thread::sleep_for(chrono::seconds(1));
        if (!running) break;
        sec++;
        string curr = to_string(sec);
        // \b で前の数字を消して上書き
        for (int i = 0; i < (int)prev.size(); i++) cout << '\b';
        cout << curr << flush;
        prev = curr;
    }
    cout << endl;
}

int main() {
    string sa, sb;
    cout << "1つ目の数を入力: ";
    cin >> sa;
    cout << "2つ目の数を入力: ";
    cin >> sb;

    // 入力検証
    for (char c : sa + sb) {
        if (!isdigit(c)) {
            cerr << "エラー: 数字のみ入力してください\n";
            return 1;
        }
    }

    vl a = fromString(sa);
    vl b = fromString(sb);

    cout << "\n";

    // タイマースレッド起動
    atomic<bool> running(true);
    thread timer(timerThread, ref(running));

    auto t0 = chrono::high_resolution_clock::now();
    vl res = karatsuba(a, b);
    auto t1 = chrono::high_resolution_clock::now();

    running = false;
    timer.join();

    double ms = chrono::duration<double, milli>(t1 - t0).count();

    cout << "\n計算結果: " << toString(res) << "\n";
    cout << "実行時間: " << fixed << setprecision(6) << ms << " ms\n";

    return 0;
}

```

<div style="text-align: center;">
通常のO(n^2)乗算
</div>

```cpp
#include <bits/stdc++.h>
#include <thread>
#include <atomic>
using namespace std;

using vl = vector<long long>;
const long long BASE = 10000;

// 文字列 → vl（下位桁から BASE=10000 単位で格納）
vl fromString(const string& s) {
    vl res;
    int i = (int)s.size();
    while (i > 0) {
        int start = max(0, i - 4);
        res.push_back(stoll(s.substr(start, i - start)));
        i = start;
    }
    while (res.size() > 1 && res.back() == 0) res.pop_back();
    return res;
}

// vl → 文字列
string toString(const vl& v) {
    string res = to_string(v.back());
    for (int i = (int)v.size() - 2; i >= 0; i--) {
        string part = to_string(v[i]);
        res += string(4 - part.size(), '0') + part;
    }
    return res;
}

// 正規化（繰り上がり処理 + 末尾0トリム）
vl normalize(vl v) {
    long long carry = 0;
    for (auto& x : v) {
        x += carry;
        carry = x / BASE;
        x %= BASE;
    }
    while (carry > 0) {
        v.push_back(carry % BASE);
        carry /= BASE;
    }
    while (v.size() > 1 && v.back() == 0) v.pop_back();
    return v;
}

// 通常の O(n^2) 乗算（筆算）
// p[i] * q[j] を res[i+j] に積み上げる
vl naiveMultiply(const vl& p, const vl& q) {
    vl res(p.size() + q.size(), 0);
    for (int i = 0; i < (int)p.size(); i++)
        for (int j = 0; j < (int)q.size(); j++)
            res[i + j] += p[i] * q[j];
    return normalize(res);
}

// スレッドタイマー
// 毎秒 \b で前の桁数分だけ戻して秒数を上書き表示
void timerThread(atomic<bool>& running) {
    int sec = 0;
    string prev = to_string(sec);
    cout << "計測中... " << prev << flush;

    while (running) {
        this_thread::sleep_for(chrono::seconds(1));
        if (!running) break;
        sec++;
        string curr = to_string(sec);
        for (int i = 0; i < (int)prev.size(); i++) cout << '\b';
        cout << curr << flush;
        prev = curr;
    }
    cout << endl;
}

int main() {
    string sa, sb;
    cout << "1つ目の数を入力: ";
    cin >> sa;
    cout << "2つ目の数を入力: ";
    cin >> sb;

    for (char c : sa + sb) {
        if (!isdigit(c)) {
            cerr << "エラー: 数字のみ入力してください\n";
            return 1;
        }
    }

    vl a = fromString(sa);
    vl b = fromString(sb);

    cout << "\n";

    atomic<bool> running(true);
    thread timer(timerThread, ref(running));

    auto t0 = chrono::high_resolution_clock::now();
    vl res = naiveMultiply(a, b);
    auto t1 = chrono::high_resolution_clock::now();

    running = false;
    timer.join();

    double ms = chrono::duration<double, milli>(t1 - t0).count();

    cout << "\n計算結果: " << toString(res) << "\n";
    cout << "実行時間: " << fixed << setprecision(6) << ms << " ms\n";

    return 0;
}

```


### 実行例（出力イメージ）

```
桁数: 10000 桁 × 10000 桁

通常 O(n^2) 開始...
経過: 1 秒
経過: 2 秒
通常 O(n^2): 2347.812 ms

カラツバ法  開始...
経過: 1 秒
カラツバ法 :  183.459 ms

速度比: 12.79 倍 高速化
```

タイマーは別スレッドで毎秒 `\r` でカーソルを行頭に戻しながら経過秒数を上書き表示します。  
処理が終わると `running = false` でスレッドを停止し、最終結果で行を上書きします。

### テスト用入力ファイル

マークダウンには書ききれないため、比較用の大きな数（50000桁 × 50000桁）は外部ファイルを使用します。

[input.txt をダウンロード](./input.txt)

### コンパイルと実行

```bash
g++ -O2 -std=c++17 -pthread karatsuba.cpp -o karatsuba
g++ -O2 -std=c++17 -pthread normal.cpp   -o normal

./karatsuba < input.txt
./normal    < input.txt
```

## 使いどころ

- **大きな整数の乗算**（RSA暗号、多倍長演算）
- **多項式の乗算**（同じ分割統治の考え方が使える）
- 競技プログラミングでの多倍長整数ライブラリ

> カラツバ法は大きな数の乗算を高速化するための重要なアルゴリズムであり、特に多倍長整数の計算において有用です。実際には分割は何回にもわたって行われるため、再帰の深さは $O(\log n)$ になります。
