---
sidebar_position: 2
---

# Các phép toán trên danh sách liên kết các số nguyên

## Các phép toán cơ bản

### deleteList

:::info Yêu cầu
Xóa phần tử có `Position P`.
:::

```c
void deleteList(Position P, List *pL)
{
    Position Temp;
    if (P->Next != NULL)
    {
        Temp = P->Next;
        P->Next = Temp->Next;
        free(Temp);
    }
}
```

### emptyList

:::info Yêu cầu
Kiểm tra danh sách rỗng.
:::

```c
int emptyList(List L)
{
    return L->Next == NULL;
}
```

### endList

:::info Yêu cầu
Trả về vị trí sau vị trí cuối cùng của danh sách `L`.
:::

```c
Position endList(List L)
{
    Position P = L;
    while (1)
    {
        if (P->Next == NULL)
            return P;
        P = P->Next;
    }
}
```

### first

:::info Yêu cầu
Trả về vị trí đầu tiên của danh sách `L`.
:::

```c
Position first(List L)
{
    return L;
}
```

### insertList

:::info Yêu cầu
Chèn thêm phần tử vào vị trí `P`.
:::

```c
void insertList(ElementType x, Position P, List *pL)
{
    Position T;
    T = (Position)malloc(sizeof(struct Node));
    T->Element = x;
    T->Next = P->Next;
    P->Next = T;
}
```

### locate

:::info Yêu cầu
Trả về vị trí đầu tiên của `x` trong danh sách `L`.
:::

```c
Position locate(ElementType x, List L)
{
    Position P = L;
    while (P->Next != NULL)
    {
        if (P->Next->Element == x)
            return P;
        P = P->Next;
    }
    return P;
}
```

### makenullList

:::info Yêu cầu
Khởi tạo danh sách rỗng.
:::

```c
void makenullList(List *pL)
{
    *pL = (List)malloc(sizeof(struct Node));
    (*pL)->Next = NULL;
}
```

### myLocate

:::info Yêu cầu
Trả về vị trí thứ `i` của phần tử `x` trong danh sách `L`.
:::

```c
Position myLocate(ElementType x, int i, List L)
{
    Position P = L;
    int count = 0;
    while (P->Next != NULL)
    {
        if (P->Next->Element == x)
            count++;
        if (count == i)
            return P->Next;
        P = P->Next;
    }
    return P->Next;
}
```

### next

:::info Yêu cầu
Trả về vị trí tiếp theo của `P`.
:::

```c
Position next(Position P, List L)
{
    return P->Next;
}
```

### previous

:::info Yêu cầu
Trả về vị trí trước `P`.
:::

```c
Position previous(Position P, List L)
{
    Position Q = L;
    while (Q->Next->Next != NULL)
    {
        if (Q->Next->Next == P)
            Q = Q->Next;
    }
    return Q->Next;
}
```

### retrieve

:::info Yêu cầu
Trả về giá trị của phần tử có vị trí `P`.
:::

```c
ElementType retrieve(Position P, List L)
{
    if (P->Next != NULL)
        return P->Next->Element;
}
```

## Các phép toán khác

### addFirst

:::info Yêu cầu
Thêm phần tử vào đầu danh sách.
:::

```c
void addFirst(ElementType x, List *pL)
{
    Position P;
    P = (Position)malloc(sizeof(struct Node));
    P->Element = x;
    P->Next = (*pL)->Next;
    (*pL)->Next = P;
}
```

### append

:::info Yêu cầu
Thêm phần tử vào cuối danh sách
:::

```c
void append(ElementType x, List *pL)
{
    Position P = endList(*pL);
    Position T = (Position)malloc(sizeof(struct Node));
    T->Element = x;
    T->Next = NULL;
    P->Next = T;
}
```

### copyEvenNumbers

:::info Yêu cầu
Sao chép số chẵn trong danh sách.
:::

```c
void copyEvenNumbers(List L, List *pL)
{
    makenullList(pL);
    Position P = L;
    while (P->Next != NULL)
    {
        if (P->Next->Element % 2 == 0)
            append(P->Next->Element, pL);
        P = P->Next;
    }
}
```

### deleteX

:::info Yêu cầu
Xóa phần tử x.
:::

```c
void deleteX(ElementType x, List *pL)
{
    Position P = first(*pL);
    while (P != endList(*pL))
    {
        if (retrieve(P, *pL) == x)
            deleteList(P, pL);
        else
            P = next(P, *pL);
    }
}
```

### difference

:::info Yêu cầu
Tìm tập hiệu.
:::

```c
List difference(List L1, List L2)
{
    List L;
    makenullList(&L);
    Position P = L1;
    while (P->Next != NULL)
    {
        if (!member(P->Next->Element, L) && !member(P->Next->Element, L2))
            append(P->Next->Element, &L);
        P = P->Next;
    }
    return L;
}
```

### erase

:::info Yêu cầu
Xóa phần tử x đầu tiên.
:::

```c
void erase(ElementType x, List *pL)
{
    if (locate(x, *pL)->Next != NULL)
        deleteList(locate(x, *pL), pL);
}
```

### getAvg

:::info Yêu cầu
Tính trung bình cộng của danh sách.
:::

```c
float getAvg(List L)
{
    float sum = 0;
    int length = 0;
    Position P = L;
    if (P->Next == NULL)
        return -10000;
    while (P->Next != NULL)
    {
        sum += P->Next->Element;
        length++;
        P = P->Next;
    }
    return sum / length;
}
```

### intersection

:::info Yêu cầu
Tìm tập giao của hai tập.
:::

```c
List intersection(List L1, List L2)
{
    List L;
    makenullList(&L);
    Position P = L2;
    while (P->Next != NULL)
    {
        if (!member(P->Next->Element, L) && member(P->Next->Element, L1))
            append(P->Next->Element, &L);
        P = P->Next;
    }
    return L;
}
```

### member

:::info Yêu cầu
Kiểm tra một giá trị có trong danh sách không.
:::

```c
int member(ElementType x, List L)
{
    Position P = L;
    while (P->Next != NULL)
    {
        if (P->Next->Element == x)
            return 1;
        P = P->Next;
    }
    return 0;
}
```

### normalize

:::info Yêu cầu
Xóa các phần tử trùng giá trị.
:::

```c
void normalize(List *pL)
{
    Position P = *pL, Q;
    while (P->Next != NULL)
    {
        Q = P->Next;
        while (Q->Next != NULL)
        {
            if (Q->Next->Element == P->Next->Element)
                deleteList(Q, pL);
            Q = Q->Next;
        }
        P = P->Next;
    }
}
```

### printList

:::info Yêu cầu
In danh sách.
:::

```c
void printList(List L)
{
    Position P = L;
    while (P->Next != NULL)
    {
        printf("%d ", P->Next->Element);
        P = P->Next;
    }
    printf("\n");
}
```

### printOddNumbers

:::info Yêu cầu
In các số lẻ trong danh sách.
:::

```c
void printOddNumbers(List L)
{
    Position P = L;
    while (P->Next != NULL)
    {
        if (P->Next->Element % 2 != 0)
            printf("%d ", P->Next->Element);
        P = P->Next;
    }
    printf("\n");
}
```

### readSet

:::info Yêu cầu
Nhập tập hợp.
:::

```c
List readSet()
{
    List L;
    makenullList(&L);
    int n, x;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &x);
        if (!member(x, L))
            addFirst(x, &L);
    }
    return L;
}
```

### removeAll

:::info Yêu cầu
Xóa tất cả các phần tử có giá trị `x`.
:::

```c
void removeAll(ElementType x, List *pL)
{
    while (locate(x, *pL)->Next != NULL)
        deleteList(locate(x, *pL), pL);
}
```

### readList

:::info Yêu cầu
Nhập danh sách.
:::

```c
void readList(List *pL)
{
    makenullList(pL);
    int n;
    Position P = *pL,
             N;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        N = (Position)malloc(sizeof(struct Node));
        scanf("%d", &N->Element);
        P->Next = N;
        P = P->Next;
    }
}
```

### sort

:::info Yêu cầu
Sắp xếp danh sách.
:::

```c
void sort(List *pL)
{
    Position P = *pL,
             N;
    while (P->Next != NULL)
    {
        N = P->Next;
        while (N->Next != NULL)
        {
            :::info Yêu cầu
            if (P->Next->Element N->Next->Element)
            :::
            {
                ElementType Temp = P->Next->Element;
                P->Next->Element = N->Next->Element;
                N->Next->Element = Temp;
            }
            N = N->Next;
        }
        P = P->Next;
    }
}
```

### unionSet

:::info Yêu cầu
Gộp 2 tập hợp.
:::

```c
List unionSet(List L1, List L2)
{
    List L;
    makenullList(&L);
    Position P = L1;
    while (P->Next != NULL)
    {
        if (!member(P->Next->Element, L))
            append(P->Next->Element, &L);
        P = P->Next;
    }
    P = L2;
    while (P->Next != NULL)
    {
        if (!member(P->Next->Element, L))
            append(P->Next->Element, &L);
        P = P->Next;
    }
    return L;
}
```
