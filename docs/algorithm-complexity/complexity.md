---
sidebar_position: 3
---

# Độ phức tạp của giải thuật

## Khái niệm

:::info

**Độ phức tạp của giải thuật** là 1 khái niệm/định nghĩa/định lượng tương đối thể hiện số phép toán của giải thuật so với kích thước của đầu vào.

:::

_Ví dụ:_

Tính độ phức tạp của thuật toán `Sắp xếp sau:`

```c {3,5,6}
void sort(int A[])
{
    int length = sizeof(A) / sizeof(int);       /*** O(1) ***/

    for (int i = 0; i < length; i++)            /*** O(n)*O(n) ***/
        for (int j = i + 1; i < length; i++)    /*** O(n) ***/
            if (A[i] > A[j])
            {
                int t = A[i];
                A[i] = A[j];
                A[j] = t;
            }
}
```

:::info Cách tính

- Dòng **3**: Phép gán và tính toán số học có độ phức tạp là $O(1)$;
- Dòng **5**: Vòng lặp có độ phức tạp là $O(n) *$ **độ phức tạp của biểu thức trong vòng lặp**
  - Dòng **6**: vòng lặp có độ phức tạp là $O(n) *$ **độ phức tạp của biểu thức trong vòng lặp**
    - Dòng **7** đến **12**: Có độ phức tạp là $O(1)$
  - Vòng lặp dòng **6** có độ phức tạp là $O(n)*1=O(n)$
- Vòng lặp dòng **5** có độ phức tạp là $O(n)*O(n)=O(n^2)$

$\rightarrow$ Độ phức tạp của giải thuật này là $O(n^2) + 1 = O(n^2)$.

:::

## Các dạng phức tạp thường gặp

| Dạng phức tạp | Hàm thể hiện độ phức tạp | Thời gian thực hiện     |
| ------------- | ------------------------ | ----------------------- |
| Hằng          |                          | $O(1)$                  |
| Logarit       | $log(n)$                 | $O(log(n))$             |
| Tuyến tính    | $n$                      | $O(n)$                  |
|               | $n*log(n)$               | $O(n*log(n))$           |
| Bậc hai       | $n^2$                    | $O(n^2)$                |
| Khối          | $n^3$                    | $O(n^3)$                |
| Mũ            | $2^n, n!, n^k$           | $O(2^n), O(n!), O(n^k)$ |

## Ví dụ

:::danger

[Click me 🔥](./vidu.pdf)

:::
