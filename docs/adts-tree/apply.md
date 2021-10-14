---
sidebar_position: 3
---

# Sử dụng cây

:::info HI!

Hello mọi người toi là **MINH MINH** : )))

À nhầm, toi là **ZỊT**

Dưới đây là một số nói cách khác là **TẤT CẢ** phép toán được cài đặt sẵn, các bạn sẽ sử dụng lại những phép toán để cài đặt một số hàm hay nói cách khác là **TẤT CẢ** theo yêu cầu bên dưới.

:::

```c
typedef char DataType;
struct Node {
    DataType     Data;
    struct Node *Left,*Right;
 };
typedef struct Node* Tree;
void makenullTree(Tree* pT)
int emptyTree(Tree T)
Tree
leftChild(Tree n)
Tree rightChild(Tree n)
int isLeaf(Tree n)
int getLeaves(Tree T) /* hàm trả về số nút lá trên cây */
void preOrder(Tree T)
void inOrder(Tree T)
void postOrder(Tree T)
```

## Problem 1 **createTree**

Giả sử `hàm findIndex()` tìm chỉ mục của một ký tự x trong chuỗi biểu thức trung tự in bắt đầu từ vị trí star đến vị trí end cũng đã được cài đặt:

```c
int findIndex(DataType x, char in[], int star, int end){
    int i=star;
    while (i<=end){
         if (x==in[i])
             return i;
         else
             i++;
   }
   return i;
}
```

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm `createTree()` cho phép dựng một cây nhị phân từ các biểu thức duyệt tiền tự và trung tự.

Dữ liệu đầu vào:

-   Chuỗi chứa biểu thức tiền tự. Ví dụ: "DBEAFC".
-   Chuỗi chứa biểu thức trung tự. Ví dụ: "ABDECF".
-   Chỉ số bắt đầu của phần chuỗi trung tự được xét. Ví dụ: 0
-   Chỉ số kết thúc của phần chuỗi trung tự được xét: Ví dụ: 5
-   Dữ liệu đầu ra: con trỏ trỏ đến nút gốc của cây nhị phân được tạo ra từ hai biểu thức tiền tự và trung tự. (xem thêm các test case)

:::success Solution

```c
int CURRENT_INDEX = 0;

Tree createTree(char *pre, char *in, int start, int end)
{
    if (start > end)
        return NULL;
    Tree T = (Tree)malloc(sizeof(struct Node));
    if (start == end)
    {
        T->Data = pre[CURRENT_INDEX];
        T->Left = NULL;
        T->Right = NULL;
        CURRENT_INDEX++;
        return T;
    }
    T->Data = pre[CURRENT_INDEX];
    int i = findIndex(pre[CURRENT_INDEX], in, start, end);
    CURRENT_INDEX++;
    T->Left = createTree(pre, in, start, i - 1);
    T->Right = createTree(pre, in, i + 1, end);
    return T;
}
```

:::

## Problem 2 **findMax**

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm `findMax()` tìm giá trị lớn nhất trong cây nhị phân.

Dữ liệu đầu vào: cây nhị phân

Dữ liệu đầu ra: giá trị lớn nhất trong cây nhị phân.

:::success Solution

```c
int findMax(Tree T)
{
    if (T==NULL)
        return 0;
    if (isLeaf(T))
        return T->Data;
    int maxLeft = findMax(T->Left);
    int maxRight = findMax(T->Right);
    return maxLeft > maxRight ? maxLeft : maxRight;
}
```

:::

## Problem 3 **findElement**

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm `findElement()` xác định xem x có là giá trị của một nút trong cây nhị phân hay không.

Dữ liệu đầu vào: một giá trị x có kiểu DataType và một cây nhị phân T.

Dữ liệu đầu ra: trả về cây có nút gốc có dữ liệu bằng với x nếu tìm thấy hoặc cây rỗng nếu không tìm thấy.

:::success Solution

```c
Tree findElement(DataType x, Tree T)
{
    if (T == NULL || T->Data == x)
        return T;

    Tree lef = findElement(x, T->Left);
    Tree rig = findElement(x, T->Right);
    if (lef == NULL)
        return rig;
    return lef;
}
```

:::

## Problem 4 **getDiameter**

Ngoài ra, hàm `max()` trả về giá trị lớn nhất của hai tham số a, b cũng đã được cài đặt.

```c
int max(int a, int b)
```

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm `getDiameter()` tính bán kính của một cây nhị phân.
Bán kính của một cây là số nút trên đường đi dài nhất giữa hai nút lá của cây.

:::success Solution

```c
int getHeight(Tree T)
{
    if (T == NULL || (T->Left == NULL && T->Right == NULL))
        return 0;
    int lh = getHeight(T->Left);
    int rh = getHeight(T->Right);

    return 1 + (lh > rh ? lh : rh);
}
void getDiameter(Tree T, int *r)
{
    if (T == NULL)
        return;

    *r = getHeight(T->Left) + getHeight(T->Right) + 3;
}
```

:::

## Problem 5 **getFullNodes**

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm getFullNodes() đếm số nút có đủ hai con.

Dữ liệu đầu vào: một cây tìm kiếm nhị phân.

Dữ liệu đầu ra: số nút có đủ hai con.

Ví dụ:
Cho cây nhị phân T:

```sh
                            6
                       /        \
                    21         -53
                      \          /    \
                       3      -8     30
                              /    \
                            49    17
```

Đếm số nút có đủ hai con?

**Cây T có 3 nút có đủ hai con.**

:::success Solution

```c
int getFullNodes(Tree T)
{
    if (T == NULL || isLeaf(T))
        return 0;

    if (T->Left != NULL && T->Right != NULL)
        return 1 + getFullNodes(T->Left) + getFullNodes(T->Right);

    return getFullNodes(T->Left) + getFullNodes(T->Right);
}
```

:::

## Problem 6 **convertTree**

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm convertTree() để chuyển đổi một cây nhị phân sang cây phản chiếu của nó.

Dữ liệu đầu vào: một cây nhị phân T.

Dữ liệu đầu ra: cây phản chiếu của T.

Ví dụ:
Cho cây nhị phân T:

```sh
                                  12
                              /         \
                           24            7
                             \          /    \
                              10    32    -8
                                     /    \
                                   5     48
```

Cây phản chiếu của T:

```sh
                                 12
                              /        \
                           7           24
                       /     \        /
                    -8      32   10
                             /    \
                           48     5
```

:::success Solution

```c
Tree convertTree(Tree T)
{
    if (T == NULL)
        return NULL;

    Tree tree = (Tree)malloc(sizeof(struct Node));
    tree->Data = T->Data;
    tree->Left = convertTree(T->Right);
    tree->Right = convertTree(T->Left);

    return tree;
}
```

:::

## Problem 7 **isMirrors**

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm isMirrors() kiểm tra xem hai cây có là phản chiếu của nhau hay không.

Dữ liệu đầu vào: hai cây nhị phân T1 và T2.

Dữ liệu đầu ra: trả về 1 nếu cây T1 và T2 là phản chiếu của nhau; trả về 0 nếu ngược lại.

Ví dụ:
Cho cây nhị phân T:

```sh
                                  12
                              /         \
                           24            7
                             \          /    \
                              10    32    -8
                                     /    \
                                   5     48
```

Cây phản chiếu của T:

```sh
                                 12
                              /        \
                           7           24
                       /     \        /
                    -8      32   10
                             /    \
                           48     5
```

:::success Solution

```c
int isMirrors(Tree t1, Tree t2)
{
    if (t1 == NULL)
    {
        if (t2 == NULL)
            return 1;
        return 0;
    }
    if (t2 == NULL)
        return 0;
    if (t2->Data != t1->Data)
        return 0;
    return isMirrors(t1->Left, t2->Right) && isMirrors(t1->Right, t2->Left);
}
```

:::

## Problem 8 **printAllPaths**

Ngoài ra, `hàm printArray()` in nội dung của một mảng path có độ dài len cũng đã được cài đặt.

```c
void printArray(int path[], int len){
 int i;
 for(i=0;i<len;i++)
    printf("%d",path[i]);
    printf("\n");
}
```

Bằng cách sử dụng kiểu dữ liệu cây nhị phân Tree đã cho, hãy viết hàm printAllPaths() hiển thị tất cả các đường đi (từ nút gốc đến nút lá) và có độ dài đường đi thỏa điều kiện cho trước .
Dữ liệu đầu vào: một cây nhị phân T, một mảng path lưu các giá trị nút của đường đi, kích thước của mảng len lưu số nút của đường đi, độ dài đường đi cần tìm pathlen.

Dữ liệu đầu ra: không.

Ví dụ:
C ho cây nhị phân T:

```sh
                           12
                       /         \
                    24            7
                      \          /    \
                       10    32    -8
                              /    \
                            5     48
```

Cần tìm các đường đi từ nút gốc đến nút lá và có độ dài bằng 2?

Các đường đi từ nút gốc đến nút lá có độ dài bằng 2 là:

```sh
12 24 10
12 7 -8
```
