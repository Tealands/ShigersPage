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
    // 閾値を大きくすることで再帰のオーバーヘッド（ベクタ確保）を削減する
    if (n <= 64) {
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
