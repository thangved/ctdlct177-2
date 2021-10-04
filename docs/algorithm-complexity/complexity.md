---
sidebar_position: 3
---

# Độ phức tạp của giải thuật

## Khái niệm

:::info

**Độ phức tạp của giải thuật** là 1 khái niệm/định nghĩa/định lượng tương đối thể hiện số phép toán của giải thuật so với kích thước của đầu vào.

:::

_Ví dụ:_

> Tính độ phức tạp của thuật toán `Sắp xếp sau:`

```c
void sort(int A[])
{
    int length = sizeof(A) / sizeof(int);

    for (int i = 0; i < length; i++) // O(n^2)
        for (int j = i + 1; i < length; i++) // O(n)
            if (A[i] > A[j])
            {
                int t = A[i];
                A[i] = A[j];
                A[j] = t;
            }
}
```

> Độ phức tạp của giải thuật này là n^2.

## Các dạng phức tạp thường gặp

| Dạng phức tạp | Hàm thể hiện độ phức tạp | Thời gian thực hiện   |
| ------------- | ------------------------ | --------------------- |
| Hằng          |                          | O(1)                  |
| Logarit       | log(n)                   | O(log(n))             |
| Tuyến tính    | n                        | O(n)                  |
|               | n\*log(n)                | O(n\*log(n))          |
| Bậc hai       | n^2                      | O(n^2)                |
| Khối          | n^3                      | O(n^3)                |
| Mũ            | 2^n, n!, n^k             | O(2^n), O(n!), O(n^k) |

## Ví dụ

:::danger

[Click me 🔥](/pdf/vidu.pdf)

:::
