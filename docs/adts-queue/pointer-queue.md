---
sidebar_position: 2
---

# Cài đặt hàng đợi bằng danh sách liên kết

## Kiểu hàng đợi

```c
#include <stdlib.h>

typedef int ElementType;

struct Node
{
    ElementType Element;
    struct Node *Next;
};

typedef struct Node *Position;

typedef struct
{
    Position Front, Rear;
} Queue;
```

## Một số phép toán

### makenullQueue

:::info

Khởi tạo một hàng đợi rỗng.

:::

```c
void makenullQueue(Queue *pS)
{
    pS->Front = (Position)malloc(sizeof(struct Node));
    pS->Front->Next = NULL;
    pS->Rear = pS->Front;
}
```

### emptyQueue

:::info

Kiểm tra hàng đợi có rỗng hay không.

:::

```c
int emptyQueue(Queue Q)
{
    return Q.Front == Q.Rear;
}
```

### front

:::info

Trả về giá trị ở đầu hàng.

:::

```c
ElementType front(Queue Q)
{
    return Q.Front->Next->Element;
}
```

### deQueue

:::info

Xóa phần tử ở đầu hàng

:::

```c
void deQueue(Queue *pQ)
{
    pQ->Front = pQ->Front->Next;
}
```

### enQueue

:::info

Thêm phần tử x vào cuối hàng.

:::

```c
void enQueue(ElementType x, Queue *pQ)
{
    pQ->Rear->Next = (Position)malloc(sizeof(struct Node));
    pQ->Rear = pQ->Rear->Next;
    pQ->Rear->Element = x;
    pQ->Rear->Next = NULL;
}
```

### count

:::info

Đếm số lượng phần tử trong hàng.

:::

```c
int count(Queue Q)
{
    int c = 0;
    Position P = Q.Front;
    while (P != Q.Rear)
    {
        c++;
        P = P->Next;
    }
    return c;
}
```
