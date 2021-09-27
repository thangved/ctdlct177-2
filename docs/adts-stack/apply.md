---
sidebar_position: 3
---

# ỨNG DỤNG NGĂN XẾP

## doiNhiPhan

:::info

Nguyên mẫu (Prototype)

-   Tên hàm: doiNhiPhan()
-   Tham số:

    -   **n**: số nguyên;
    -   **pS**: con trỏ ngăn xếp.

-   Kiểu trả về: không

Thân hàm (Body)

-   Đổi số nguyên n về dạng nhị phân, kết quả lưu trong ngăn xếp chỉ bởi con trỏ pS

:::

```c
void doiNhiPhan(int n, NganXep *pS)
{
    khoitao(pS);
    while (n != 0)
    {
        them(n % 2, pS);
        n /= 2;
    }
}
```

## readStack

:::info

Hàm nhập một `Stack` từ bàn phím.

:::

```c
void readStack(Stack *pS)
{
    makenullStack(pS);
    int n;
    scanf("%d", &n);
    int x;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &x);
        push(x, pS);
    }
}
```

## printStack

:::info

Hàm in `Stack` ra màn hình.

:::

```c
void printStack(Stack *pS)
{
    while (!emptyStack(*pS))
    {
        printf("%d ", top(*pS));
        pop(pS);
    }
    printf("\n");
}
```

## ktChuoi

```c
int ktChuoi()
{
    char chuoi[100];
    scanf("%s", chuoi);
    int length = strlen(chuoi);
    Stack S;
    makenullStack(&S);
    for (int i = 0; i < length; i++)
    {
        if (chuoi[i] == '(')
            push(chuoi[i], &S);
        else if (chuoi[i] == ')')
        {
            if (emptyStack(S))
                return 0;
            pop(&S);
        }
    }
    return emptyStack(S);
}
```

## tinhGiaTri

```c
float tinhGiatri(char *chuoi)
{
    Stack S;
    makenullStack(&S);
    int length = strlen(chuoi);

    for (int i = 0; i < length; i++)
    {
        if (chuoi[i] >= 48 && chuoi[i] <= 57)
            push((int)(chuoi[i] - 48), &S);
        else if (chuoi[i] == '+')
        {
            float a = top(S);
            pop(&S);
            float b = top(S);
            pop(&S);
            push(a + b, &S);
        }
        else if (chuoi[i] == '-')
        {
            float a = top(S);
            pop(&S);
            float b = top(S);
            pop(&S);
            push(b - a, &S);
        }
        else if (chuoi[i] == '*')
        {
            float a = top(S);
            pop(&S);
            float b = top(S);
            pop(&S);
            push(a * b, &S);
        }
        else if (chuoi[i] == '/')
        {
            float a = top(S);
            pop(&S);
            float b = top(S);
            pop(&S);
            push(b / a, &S);
        }
    }
    return top(S);
}
```
