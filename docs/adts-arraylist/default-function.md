---
sidebar_position: 2
---

# MỘT SỐ PHÉP TOÁN TRÊN DANH SÁCH ĐẶC CÁC SỐ NGUYÊN

## CÁC PHÉP TOÁN CƠ BẢN

### deleteList

:::info Yêu cầu
Xóa phần tử tại vị trí p
:::

```c
void deleteList(Position p, List *pL)
{
    if (p < first(*pL) || p >= endList(*pL))
    {
        printf("Vi tri khong hop le\n");
        return;
    }

    for (Position i = p; i < pL->Last; i++)
        pL->Elements[i - 1] = pL->Elements[i];

    pL->Last--;
}
```

### emptyList

:::info Yêu cầu
Kiểm tra danh sách rỗng.
:::

```c
int emptyList(List L)
{
    return L.Last == 0;
}
```

### endList

:::info Yêu cầu
Trả về vị trí sau vị trí cuối của danh sách.
:::

```c
Position endList(List L)
{
    return L.Last + 1;
}
```

### fullList

:::info Yêu cầu
Kiểm tra danh sách đầy.
:::

```c
int fullList(List L)
{
    return L.Last == MaxLength;
}
```

### first

:::info Yêu cầu
Trả về `vị trí đầu tiên` của danh sách.
:::

```c
Position first(List L)
{
    return 1;
}
```

### insertList

:::info Yêu cầu
Chèn thêm 1 phần tử vào vị trí `p` của danh sách.
:::

```c
void insertList(ElementType x, Position p, List *pL)
{
    if (fullList(*pL))
        return;

:::info Yêu cầu
    if (p < first(*pL) || p endList(*pL) + 1)
    :::
        return;

    for (Position i = pL->Last; i >= p; i++)
        pL->Elements[i] = pL->Elements[i - 1];

    pL->Elements[p - 1] = x;
    pL->Last++;
}
```

### locate

:::info Yêu cầu
Trả về `vị trí đầu tiên` mà `x` xuất hiện trong danh sách.
:::

```c
Position locate(ElementType x, List L)
{
    for (int i = 1; i <= L.Last; i++)
        if (x == retrieve(i, L))
            return i;
    return L.Last + 1;
}
```

### makenullList

:::info Yêu cầu
Khởi tạo danh sách rỗng
:::

```c
void makenullList(List *pL)
{
    pL->Last = 0;
}
```

### next

:::info Yêu cầu
Trả về vị trí sau `p` trong danh sách.
:::

```c
Position next(Position p, List L)
{
    :::info Yêu cầu
    if (p L.Last)
    :::
        return 0;
    return p + 1;
}
```

### previous

:::info Yêu cầu
Trả về vị trí trước `p` trong danh sách.
:::

```c
Position previous(Position p, List L)
{
    if (p <= first(L))
        return 0;
    return p - 1;
}
```

### retrieve

:::info Yêu cầu
Trả về giá trị của danh sách tại `p`.
:::

```c
ElementType retrieve(Position p, List L)
{
    :::info Yêu cầu
    if (!(p L.Last))
    :::
        return L.Elements[p - 1];
    return 0;
}
```

## MỘT SỐ PHÉP TOÁN KHÁC

### copyEvenNumbers

:::info Yêu cầu
Chép các số chẵn trong danh sách `L1` vào `pL2`.
:::

```c
void copyEvenNumbers(List L1, List *pL2)
{
    pL2->Last = 0;
    for (int i = 0; i < L1.Last; i++)
        if (L1.Elements[i] % 2 == 0)
        {
            pL2->Elements[pL2->Last] = L1.Elements[i];
            pL2->Last++;
        }
}
```

### countList

:::info Yêu cầu
Đếm số lượng phần tử `x` trong danh sách.
:::

```c
int countList(ElementType x, List L)
{
    int count = 0;
    for (int i = 0; i < L.Last; i++)
        if (L.Elements[i] == x)
            count++;
    return count;
}
```

### difference

:::info Yêu cầu
Tính tập hiệu của `L1`, `L2` và lưu vào `pL`.
:::

```c
void difference(List L1, List L2, List *pL)
{
    makenullList(pL);
    for (int i = 0; i < L1.Last; i++)
        if (!member(L1.Elements[i], L2))
            insertSet(L1.Elements[i], pL);
}
```

### erase

:::info Yêu cầu
Xóa phần tử đầu tiên có giá trị `x` trong danh sách.
:::

```c
void erase(ElementType x, List *pL)
{
    deleteList(locate(x, *pL), pL);
}
```

### getAvg

:::info Yêu cầu
Tính trung bình cộng của các phần tử trong danh sách.
:::

```c
float getAvg(List L)
{
    if (L.Last == 0)
        return -10000;
    float sum = 0;
    for (int i = 0; i < L.Last; i++)
        sum += L.Elements[i];
    return (float)sum / L.Last;
}
```

### insertSet

:::info Yêu cầu
Thêm phần tử vào cuối danh sách.
:::

```c
void insertSet(ElementType x, List *pL)
{
    pL->Elements[pL->Last] = x;
    pL->Last++;
}
```

### intersection

:::info Yêu cầu
Tìm tập giao của 2 tập hợp.
:::

```c
void intersection(List L1, List L2, List *pL)
{
    makenullList(pL);
    for (int i = 0; i < L1.Last; i++)
        if (member(L1.Elements[i], L2))
            insertSet(L1.Elements[i], pL);
}
```

### minList

:::info Yêu cầu
Trả về giá trị phần tử nhỏ nhất có trong danh sách.
:::

```c
ElementType minList(List L)
{
    ElementType min = L.Elements[0];
    for (int i =
    :::info Yêu cầu 0; i < L.Last; i++)
        if (min L.Elements[i])
        :::
            min = L.Elements[i];
    return min;
}
```

### maxList

:::info Yêu cầu
Trả về phần tử có giá trị lớn nhất trong danh sách.
:::

```c
ElementType maxList(List L)
{
    ElementType max = L.Elements[0];
    for (int i = 0; i < L.Last; i++)
        if (max < L.Elements[i])
            max = L.Elements[i];
    return max;
}
```

### member

:::info Yêu cầu
Kiểm tra một phần tử có trong danh sách.
:::

```c
int member(ElementType x, List L)
{
    for (int i = 1; i <= L.Last; i++)
        if (x == retrieve(i, L))
            return 1;
    return 0;
}
```

### normalize

:::info Yêu cầu
Chuyển danh sách thành tập hợp.
:::

```c
void normalize(List *pL)
{
    for (int i = 0; i < pL->Last; i++)
        for (int j = i + 1; j < pL->Last; j++)
            if (pL->Elements[i] == pL->Elements[j])
            {
                deleteList(j, pL);
                j--;
            }
}
```

### printList

:::info Yêu cầu
In ra các phần tử trong danh sách.
:::

```c
void printList(List L)
{
    for (Position p = 1; p <= L.Last; p++)
        printf("%d ", retrieve(p, L));

    printf("\n");
}
```

### printOddNumbers

:::info Yêu cầu
In ra các số lẻ trong danh sách.
:::

```c
void printOddNumbers(List L)
{
    for (int i = 0; i < L.Last; i++)
        if (!(L.Elements[i] % 2 == 0))
            printf("%d ", L.Elements[i]);
    printf("\n");
}
```

### removeAll

:::info Yêu cầu
Xóa tất cả các phần tử có giá trị `x` trong danh sách.
:::

```c
void removeAll(ElementType x, List *pL)
{
    while (member(x, *pL))
        deleteList(locate(x, *pL), pL);
}
```

### readList

:::info Yêu cầu
Nhập danh sách từ bàn phím.
:::

```c
void readList(List *pL)
{
    Position last;
    scanf("%d", &last);
    pL->Last = last;

    for (Position p = 1; p <= pL->Last; p++)
        scanf("%d", &pL->Elements[p - 1]);
}
```

### readSet

:::info Yêu cầu
Nhập tập hợp từ bàn phím
:::

```c
void readSet(List *pL)
{
    readList(pL);
    normalize(pL);
}
```

### sumList

:::info Yêu cầu
Trả về tổng các phần tử trong danh sách.
:::

```c
ElementType sumList(List L)
{
    ElementType sum = 0;
    for (int i = 0; i < L.Last; i++)
        sum += L.Elements[i];
    return sum;
}
```

### sort

:::info Yêu cầu
Sắp xếp các phần tử từ bé đến lớn.
:::

```c
void sort(List *pL)
{
    for (int i = 0; i < pL->Last; i++)
        for (int j = i + 1; j < 
        :::info Yêu cầupL->Last; j++)
            if (pL->Elements[i] pL->Elements[j])
            :::
            {
                ElementType Temp = pL->Elements[i];
                pL->Elements[i] = pL->Elements[j];
                pL->Elements[j] = Temp;
            }
}
```

### unionSet

:::info Yêu cầu
Tính tập hợp của hai tập.
:::

```c
void unionSet(List L1, List L2, List *pL)
{
    makenullList(pL);
    int i;
    for (i = 0; i < L1.Last; i++)
        insertSet(L1.Elements[i], pL);

    for (i = 0; i < L2.Last; i++)
        if (!member(L2.Elements[i], L1))
            insertSet(L2.Elements[i], pL);
}
```
