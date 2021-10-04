---
sidebar_position: 2
---

# Một số phép toán trên Stack

## Các phép toán cơ bản

### makenullStack

:::info Yêu cầu
Khởi tạo một `Stack` rỗng.
:::

```c
void makenullStack(Stack *pS)
{
    pS->Top_idx = MaxLength;
}
```

### emptyList

:::info Yêu cầu
Kiểm tra `Stack` rỗng.
:::

```c
int emptyStack(Stack S)
{
    return S.Top_idx == MaxLength;
}
```

### fullStack

:::info Yêu cầu
Kiểm tra `Stack` đầy.
:::

```c
int fullStack(Stack S)
{
    return S.Top_idx == 0;
}
```

### top

:::info Yêu cầu
Trả về giá trị của đỉnh `Stack`.
:::

```c
ElementType top(Stack S)
{
    return S.Elements[S.Top_idx];
}
```

### pop

:::info Yêu cầu
Xóa phần tử ở đầu `Stack`.
:::

```c
void pop(Stack *pS)
{
    pS->Top_idx++;
}
```

### push

:::info Yêu cầu
Chèn thêm phần tử vào đỉnh `Stack`.
:::

```c
void push(ElementType x, Stack *pS)
{
    pS->Top_idx--;
    pS->Elements[pS->Top_idx] = x;
}
```

## MỘT SỐ PHÉP TOÁN KHÁC (BÀI TẬP TRÊN ELSE)

### xoa

:::info Yêu cầu
Xóa phần tử đỉnh.
:::

```c
void xoa(NganXep *pS)
{
    if (pS->Dinh == SoPhanTu)
        return;
    pS->Dinh++;
}
```

### khoitao

:::info Yêu cầu
Khởi tạo `Stack` rỗng.
:::

```c
void khoitao(NganXep *pS)
{
    pS->Dinh = SoPhanTu;
}
```

### them

:::info Yêu cầu
Thêm phần tử vào đỉnh của `Stack`.
:::

```c
void them(int x, NganXep *pS)
{
    if (pS->Dinh == 0)
        return;
    pS->Dinh--;
    pS->DuLieu[pS->Dinh] = x;
}
```

### ktRong

:::info Yêu cầu
Kiểm tra `Stack` rỗng.
:::

```c
int ktRong(NganXep S)
{
    return S.Dinh == SoPhanTu;
}
```

### ktDay

:::info Yêu cầu
Kiểm tra `Stack` đầy.
:::

```c
int ktDay(NganXep S)
{
    return S.Dinh == 0;
}
```

### hienthi

:::info Yêu cầu
Hiển thị `Stack`.
:::

```c
void hienthi(NganXep *pS)
{
    for (int i = pS->Dinh; i < SoPhanTu; i++)
        printf("%d ", pS->DuLieu[i]);
}
```

### giatriDinh

:::info Yêu cầu
Trả về giá trị tại đỉnh.
:::

```c
int giatriDinh(NganXep S)
{
    return S.DuLieu[S.Dinh];
}
```
