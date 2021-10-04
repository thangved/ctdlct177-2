---
sidebar_position: 3
---

# Ứng dụng ngăn xếp

## doiNhiPhan

:::info

Nguyên mẫu (Prototype)

- Tên hàm: doiNhiPhan()
- Tham số:

  - **n**: số nguyên;
  - **pS**: con trỏ ngăn xếp.

- Kiểu trả về: không

Thân hàm (Body)

- Đổi số nguyên n về dạng nhị phân, kết quả lưu trong ngăn xếp chỉ bởi con trỏ pS

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
    fgets(chuoi, 100, stdin);
    fflush(stdin);
    chuoi[strlen(chuoi) - 1] = '\0';
    Stack S;
    makenullStack(&S);
    int length = strlen(chuoi);
    for (int i = 0; i < length; i++)
    {
        if (chuoi[i] == '(')
            push('(', &S);
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

## inThaplucphan

```c
void inThaplucphan(int n)
{
    char Hex[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
    Stack S;
    makenullStack(&S);
    while (n != 0)
    {
        push(Hex[n % 16], &S);
        n /= 16;
    }
    while (!emptyStack(S))
    {
        printf("%c", top(S));
        pop(&S);
    }
}
```

## chuyenHauto

```c
int isNumber(char c)
{
    return (c >= '0' && c <= '9');
}

int isAb(char c)
{
    return (c >= 'a' && c <= 'z');
}

void pushChar(char c, char *s)
{

    s[strlen(s) + 1] = '\0';
    s[strlen(s)] = c;
}

int isOP(char c)
{
    return (c == '+' || c == '-' || c == '*' || c == '/');
}

void chuyenHauto(char *trungto, char *hauto)
{
    hauto[0] = '\0';
    Stack S;
    makenullStack(&S);
    for (int i = 0; i < strlen(trungto); i++)
    {
        if (trungto[i] == ' ')
        {
        }
        else if (isNumber(trungto[i]) || isAb(trungto[i]))
            pushChar(trungto[i], hauto);
        else if (trungto[i] == '(')
            push('(', &S);
        else if (trungto[i] == ')')
        {
            while (top(S) != '(')
            {
                pushChar(top(S), hauto);
                pop(&S);
            }
            pop(&S);
        }
        else if (isOP(trungto[i]))
        {
            while (!emptyStack(S) && top(S) != '(' && mucUutien(trungto[i]) <= mucUutien(top(S)))
            {
                pushChar(top(S), hauto);
                pop(&S);
            }
            push(trungto[i], &S);
        }
    }
    while (!emptyStack(S))
    {
        pushChar(top(S), hauto);
        pop(&S);
    }
}
```
