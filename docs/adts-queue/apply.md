---
sidebar_position: 5
---

# Ứng dụng hàng đợi

## Câu 1

> Giả sử kiểu dữ liệu ngăn xếp Stack và hàng đợi Queue đã được khai báo. Các phép toán cơ bản trên ngăn xếp và trên hàng đợi được hỗ trợ trong file thư viện **AStack.c** và **CAQueue.c**.

```c
void makenullStack(Stack *pS)
int emptyStack(Stack S)
ElementType top(Stack S)
void pop(Stack *pS)
void push(ElementType x, Stack *pS)

void makenullQueue(Queue *pQ)
int emptyQueue(Queue Q)
ElementType front(Queue Q)
void deQueue(Queue *pQ)
void enQueue(ElementType x, Queue *pQ) //ElementType là kiểu ký tự
```

Bằng cách sử dụng kiểu dữ liệu trừu tượng Stack và Queue đã cho, hãy viết chương trình kiểm tra một chuỗi ký tự có đọc xuôi và đọc ngược như nhau hay không (kiểm tra chuỗi palindrome).

Dữ liệu đầu vào là 1 dòng duy nhất ghi chuỗi ký tự. Các ký tự cho phép gồm: các chữ cái ('a' - 'z', 'A' - 'Z') , có các ký tự khoảng trắng và các dấu câu như '?', '.', ',', v.v..

:::caution

Lưu ý: không phân biệt giữa chữ cái in hoa và in thường, không quan tâm đến các ký tự khoảng trắng hay dấu câu khi kiểm tra chuỗi palindrome.

:::

Dữ liệu đầu ra là dòng thông báo chuỗi đọc xuôi và đọc ngược như nhau hay chuỗi đọc xuôi khác chuỗi đọc ngược (xem thêm các test case).

Gợi ý:

-   Đọc từng chữ cái trong chuỗi dữ liệu đầu vào và lưu đồng thời vào một ngăn xếp và một hàng đợi => ngăn xếp sẽ lưu chuỗi đọc ngược và hàng đợi sẽ lưu chuỗi đọc xuôi.
-   Trong khi hàng đợi chưa rỗng:
    -   Nếu phần tử trên đỉnh ngăn xếp và phần tử ở đầu hàng đợi khác nhau thì kết luận chuỗi đọc xuôi khác đọc ngược.
    -   Ngược lại, xóa phần tử ở cả ngăn xếp và hàng đợi.
-   Kết luận chuỗi đọc xuôi và đọc ngược là như nhau.

**For example:**

| Input                                    | Result                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------- |
| A Toyota. Race fast, safe car. A Toyota. | "A Toyota. Race fast, safe car. A Toyota." doc xuoi va doc nguoc nhu nhau |
| wow                                      | "wow" doc xuoi va doc nguoc nhu nhau                                      |
| solo                                     | "solo" doc xuoi khac doc nguoc                                            |

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "AStack.c"
#include "CAQueue.c"

int isAb(char c)
{
    return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'));
}

int main()
{
    char chuoi[255];
    fgets(chuoi, 100, stdin);
    fflush(stdin);
    int length = strlen(chuoi);
    chuoi[length - 1] = '\0';
    length--;

    Stack S;
    makenullStack(&S);
    Queue Q;
    makenullQueue(&Q);

    for (int i = 0; i < length; i++)
    {
        if (!isAb(chuoi[i]))
            continue;
        push(tolower(chuoi[i]), &S);
        enQueue(tolower(chuoi[i]), &Q);
    }

    while (!(emptyQueue(Q) && emptyStack(S)))
    {
        if (front(Q) != top(S))
        {
            printf("\"%s\" doc xuoi khac doc nguoc", chuoi);
            return 0;
        }
        pop(&S);
        deQueue(&Q);
    }
    printf("\"%s\" doc xuoi va doc nguoc nhu nhau", chuoi);
    return 0;
}
```

## Câu 2

> Giả sử kiểu dữ liệu hàng đợi **Queue** đã được khai báo. Các phép toán cơ bản trên hàng đợi được hỗ trợ trong file thư viện **PQueue.c**

```c
void makenullQueue(Queue *pQ)
int emptyQueue(Queue Q)
ElementType front(Queue Q)
void deQueue(Queue *pQ)
void enQueue(ElementType x, Queue *pQ)  //ElementType là kiểu số thực
```

Bằng cách sử dụng kiểu dữ liệu trừu tượng Queue đã cho, hãy viết chương trình mã hóa một thông điệp bằng khóa lặp lại.

Dữ liệu đầu vào là:

-   Dòng ghi chuỗi cần mã hóa. Ví dụ chuỗi "Hoc CTDL rat vui!".
-   Khóa lặp lại là một chuỗi các ký tự số ('1' - '9') mà chúng xác định mỗi ký tự được dịch chuyển về sau bao nhiêu vị trí.
-   Ví dụ: nếu chuỗi cần mã hóa là "Hoc CTDL rat vui!" và khóa lặp là chuỗi "29137" thì
    -   Ký tự đầu tiên của chuỗi cần mã hóa ('H') sẽ dịch chuyển về sau 2 vị trí => ký tự 'J'
    -   Ký tự kế tiếp của chuỗi cần mã hóa ('o') sẽ dịch chuyển về sau 9 vị trí => ký tự 'x'
    -   Ký tự kế tiếp nữa của chuỗi cần mã hóa ('c') sẽ dịch chuyển về sau 1 vị trí => ký tự 'd'
    -   Ký tự ' ' sẽ dịch chuyển về sau 3 vị trí => ký tự '#'
    -   Ký tự 'C' sẽ dịch chuyển về sau 7 vị trí => ký tự 'J'
    -   Lúc này khóa "29137" đã hết, lại bắt đầu lặp lại khóa này.
    -   Ký tự 'T' sẽ dịch chuyển về sau 2 vị trí => ký tự 'V'
    -   Ký tự 'D' sẽ dịch chuyển về sau 9 vị trí => ký tự 'M'
    -   Và cứ tiếp tục như vậy.

Dữ liệu đầu ra là dòng ghi chuỗi được mã hóa (xem thêm trong test case).

**Gợi ý:**

-   Sử dụng hàng đợi để lưu từng chữ số của khóa lặp. Khi chữ số ở đầu hàng đợi được sử dụng (để dịch chuyển ký tự trong chuỗi cần mã hóa) thì nó lại được đưa trở lại hàng đợi.
-   Duyệt từng ký tự trong chuỗi cần mã hóa và kết hợp với hàng đợi để mã hóa (dịch chuyển) ký tự này.

<p
    align="center">
(Dữ liệu đầu vào luôn hợp lệ, sinh viên không cần kiểm tra)
</p>

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "PQueue.c"

int main()
{
    char pass[1000];
    char key[100];
    char hash[100];

    fgets(pass, 1000, stdin);
    fflush(stdin);
    pass[strlen(pass) - 1] = '\0';
    int passLength = strlen(pass);

    scanf("%s", key);
    getchar();
    int keyLength = strlen(key);

    Queue keys;
    makenullQueue(&keys);

    for (int i = 0; i < keyLength; i++)
        enQueue((int)key[i] - 48, &keys);

    for (int i = 0; i < passLength; i++)
    {
        hash[i] = pass[i] + front(keys);
        hash[i + 1] = '\0';
        enQueue(front(keys), &keys);
        deQueue(&keys);
    }
    printf("%s\n", hash);
    return 0;
}
```

## Câu 3

> Giả sử kiểu dữ liệu hàng đợi Queue đã được khai báo. Các phép toán cơ bản trên hàng đợi được hỗ trợ trong file thư viện **PQueue.c**

```c
void makenullQueue(Queue *pQ)
int emptyQueue(Queue Q)
ElementType front(Queue Q)
void deQueue(Queue *pQ)
void enQueue(ElementType x, Queue *pQ)  //ElementType là kiểu số thực
```

Bằng cách sử dụng kiểu dữ liệu trừu tượng **Queue** đã cho, hãy viết chương trình giải mã một thông điệp bằng khóa lặp lại.

Dữ liệu đầu vào là:

-   Dòng ghi chuỗi cần giải mã. Ví dụ chuỗi "Jxd#JVMM#yc}!y|k\*".
-   Khóa lặp lại là một chuỗi các ký tự số ('1' - '9') mà chúng xác định mỗi ký tự được dịch chuyển về trước bao nhiêu vị trí.
-   Ví dụ: nếu chuỗi cần mã hóa là "Jxd#JVMM#yc}!y|k\*" và khóa lặp là chuỗi "29137" thì
    -   Ký tự đầu tiên của chuỗi cần mã hóa ('J') sẽ dịch chuyển về trước 2 vị trí => ký tự 'H'
    -   Ký tự kế tiếp của chuỗi cần mã hóa ('x') sẽ dịch chuyển về trước 9 vị trí => ký tự 'o'
    -   Ký tự kế tiếp nữa của chuỗi cần mã hóa ('d') sẽ dịch chuyển về trước 1 vị trí => ký tự 'c'
    -   Ký tự '#' sẽ dịch chuyển về trước 3 vị trí => ký tự ' '
    -   Ký tự 'J' sẽ dịch chuyển về trước 7 vị trí => ký tự 'C'
    -   Lúc này khóa "29137" đã hết, lại bắt đầu lặp lại khóa này.
    -   Ký tự 'V' sẽ dịch chuyển về trước 2 vị trí => ký tự 'T'
    -   Ký tự 'M' sẽ dịch chuyển về trước 9 vị trí => ký tự 'D'
    -   Và cứ tiếp tục như vậy.

Dữ liệu đầu ra là dòng ghi chuỗi được giải mã (xem thêm trong test case).

Gợi ý:

-   Sử dụng hàng đợi để lưu từng chữ số của khóa lặp. Khi chữ số ở đầu hàng đợi được sử dụng (để dịch chuyển ký tự trong chuỗi cần giải mã) thì nó lại được đưa trở lại hàng đợi.
-   Duyệt từng ký tự trong chuỗi cần giải mã và kết hợp với hàng đợi để giải mã (dịch chuyển) ký tự này.

<p
    align="center">
(Dữ liệu đầu vào luôn hợp lệ, sinh viên không cần kiểm tra)
</p>

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "PQueue.c"

// Giai ma

int main()
{
    char hashPass[1000];
    char key[100];
    char pass[100];

    fgets(hashPass, 1000, stdin);
    fflush(stdin);
    hashPass[strlen(hashPass) - 1] = '\0';
    int passLength = strlen(hashPass);

    scanf("%s", key);
    getchar();
    int keyLength = strlen(key);

    Queue keys;
    makenullQueue(&keys);

    for (int i = 0; i < keyLength; i++)
        enQueue((int)key[i] - 48, &keys);

    for (int i = 0; i < passLength; i++)
    {
        pass[i] = hashPass[i] - front(keys);
        pass[i + 1] = '\0';
        enQueue(front(keys), &keys);
        deQueue(&keys);
    }
    printf("%s\n", pass);
    return 0;
}
```
