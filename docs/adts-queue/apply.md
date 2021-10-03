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

- Đọc từng chữ cái trong chuỗi dữ liệu đầu vào và lưu đồng thời vào một ngăn xếp và một hàng đợi => ngăn xếp sẽ lưu chuỗi đọc ngược và hàng đợi sẽ lưu chuỗi đọc xuôi.
- Trong khi hàng đợi chưa rỗng:
  - Nếu phần tử trên đỉnh ngăn xếp và phần tử ở đầu hàng đợi khác nhau thì kết luận chuỗi đọc xuôi khác đọc ngược.
  - Ngược lại, xóa phần tử ở cả ngăn xếp và hàng đợi.
- Kết luận chuỗi đọc xuôi và đọc ngược là như nhau.

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

- Dòng ghi chuỗi cần mã hóa. Ví dụ chuỗi "Hoc CTDL rat vui!".
- Khóa lặp lại là một chuỗi các ký tự số ('1' - '9') mà chúng xác định mỗi ký tự được dịch chuyển về sau bao nhiêu vị trí.
- Ví dụ: nếu chuỗi cần mã hóa là "Hoc CTDL rat vui!" và khóa lặp là chuỗi "29137" thì
  - Ký tự đầu tiên của chuỗi cần mã hóa ('H') sẽ dịch chuyển về sau 2 vị trí => ký tự 'J'
  - Ký tự kế tiếp của chuỗi cần mã hóa ('o') sẽ dịch chuyển về sau 9 vị trí => ký tự 'x'
  - Ký tự kế tiếp nữa của chuỗi cần mã hóa ('c') sẽ dịch chuyển về sau 1 vị trí => ký tự 'd'
  - Ký tự ' ' sẽ dịch chuyển về sau 3 vị trí => ký tự '#'
  - Ký tự 'C' sẽ dịch chuyển về sau 7 vị trí => ký tự 'J'
  - Lúc này khóa "29137" đã hết, lại bắt đầu lặp lại khóa này.
  - Ký tự 'T' sẽ dịch chuyển về sau 2 vị trí => ký tự 'V'
  - Ký tự 'D' sẽ dịch chuyển về sau 9 vị trí => ký tự 'M'
  - Và cứ tiếp tục như vậy.

Dữ liệu đầu ra là dòng ghi chuỗi được mã hóa (xem thêm trong test case).

**Gợi ý:**

- Sử dụng hàng đợi để lưu từng chữ số của khóa lặp. Khi chữ số ở đầu hàng đợi được sử dụng (để dịch chuyển ký tự trong chuỗi cần mã hóa) thì nó lại được đưa trở lại hàng đợi.
- Duyệt từng ký tự trong chuỗi cần mã hóa và kết hợp với hàng đợi để mã hóa (dịch chuyển) ký tự này.

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

- Dòng ghi chuỗi cần giải mã. Ví dụ chuỗi "Jxd#JVMM#yc}!y|k\*".
- Khóa lặp lại là một chuỗi các ký tự số ('1' - '9') mà chúng xác định mỗi ký tự được dịch chuyển về trước bao nhiêu vị trí.
- Ví dụ: nếu chuỗi cần mã hóa là "Jxd#JVMM#yc}!y|k\*" và khóa lặp là chuỗi "29137" thì
  - Ký tự đầu tiên của chuỗi cần mã hóa ('J') sẽ dịch chuyển về trước 2 vị trí => ký tự 'H'
  - Ký tự kế tiếp của chuỗi cần mã hóa ('x') sẽ dịch chuyển về trước 9 vị trí => ký tự 'o'
  - Ký tự kế tiếp nữa của chuỗi cần mã hóa ('d') sẽ dịch chuyển về trước 1 vị trí => ký tự 'c'
  - Ký tự '#' sẽ dịch chuyển về trước 3 vị trí => ký tự ' '
  - Ký tự 'J' sẽ dịch chuyển về trước 7 vị trí => ký tự 'C'
  - Lúc này khóa "29137" đã hết, lại bắt đầu lặp lại khóa này.
  - Ký tự 'V' sẽ dịch chuyển về trước 2 vị trí => ký tự 'T'
  - Ký tự 'M' sẽ dịch chuyển về trước 9 vị trí => ký tự 'D'
  - Và cứ tiếp tục như vậy.

Dữ liệu đầu ra là dòng ghi chuỗi được giải mã (xem thêm trong test case).

Gợi ý:

- Sử dụng hàng đợi để lưu từng chữ số của khóa lặp. Khi chữ số ở đầu hàng đợi được sử dụng (để dịch chuyển ký tự trong chuỗi cần giải mã) thì nó lại được đưa trở lại hàng đợi.
- Duyệt từng ký tự trong chuỗi cần giải mã và kết hợp với hàng đợi để giải mã (dịch chuyển) ký tự này.

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

## Câu 4

> Giả sử kiểu dữ liệu hàng đợi Queue đã được khai báo. Các phép toán cơ bản trên hàng đợi được hỗ trợ trong file thư viện PIQueue.c

```c
void makenullQueue(Queue *pQ)
int emptyQueue(Queue Q)
ElementType front(Queue Q)
void deQueue(Queue*pQ)
void enQueue(ElementType x, Queue *pQ)  //ElementType là kiểu số nguyên
```

> Bằng cách sử dụng kiểu dữ liệu trừu tượng **Queue** đã cho, hãy viết chương trình tính số quầy thu ngân cần phải mở tại siêu thị Coopmart Cần Thơ vào một thời điểm cụ thể.

**Dữ liệu đầu vào:**

- Số khách hàng hàng.
- Số quầy thu ngân tối đa có trong siêu thị.
- Thời gian xử lý trung bình cho 1 giao dịch tại quầy thu ngân (đơn vị tính: giây).
- Thời gian trung bình (số giây) mà khách hàng sẽ đến xếp hàng thanh toán.
- Thời gian trung bình mà khách hàng phải đợi để được thanh toán X. Ví dụ: khách hàng chỉ phải đợi dưới 120 giây trong hàng đợi là được xử lý giao dịch tại quầy thu ngân.

**Dữ liệu đầu ra (xem thêm trong test case):**

- Số quầy thu ngân mở và thời gian trung bình mà khách hàng phải đợi.
- Kết luận: số quầy thu ngân cần phải mở để khách hàng chỉ phải đợi dưới X giây trong hàng đợi là được xử lý giao dịch tại quầy thu ngân.

**Gợi ý:**

Thực hiện mô phỏng theo số lượng quầy thu ngân tăng dần (từ 1 đến số quầy thu ngân tối đa ) cho đến khi thời gian trung bình mà khách phải đợi <=X thì dừng quá trình lặp và đưa ra kết luận.

**Với từng số lượng quầy:**

- Khởi tạo thời gian tại từng quầy bằng 0;
- Đưa dữ liệu của khách hàng (thời gian đến của khách hàng) vào hàng đợi;
- Tính tổng thời gian xử lý giao dịch cho tất cả các khách hàng trong hàng đợi:
  - Khởi đầu, tổng thời gian bằng 0;
  - Trong khi hàng đợi chưa hết: Với lần lượt từng quầy thu ngân, nếu vẫn còn khách trong hàng đợi thì lấy thời gian đến của khách,  tính thời gian đi của khách (liên quan đến thời gian đến, thời gian tại quầy và thời gian xử lý trung bình cho 1 giao dịch), xóa khách khỏi hàng đợi, cập nhật lại thời gian tại quầy, cập nhật lại tổng thời gian.
- Tính thời gian trung bình mà khách hàng phải đợi dựa trên tổng thời gian và số lượng khách để dừng quá trình lặp và đưa ra kết luận hay lại tiếp tục lặp.

```c
#include <stdio.h>
#include <stdlib.h>
#include "PIQueue.c"

int input()
{
    int x;
    scanf("%d", &x);
    return x;
}

// Dua du lieu khach hang vao hang doi
void lineUp(int dTime, int client, Queue *line)
{
    makenullQueue(line);
    for (int i = 0; i < client; i++)
        enQueue(dTime * (i + 1), line);
}

// lam moi time tai quay
void reset(int A[], int n)
{
    for (int i = 0; i < n; i++)
        A[i] = 0;
}

int main()
{
    int client = input();
    int maxCashier = input();
    int tranferTime = input();
    int dTime = input();
    int waitTime = input();

    Queue line;
    int cashiers[maxCashier];

    int totalTime;

    for (int cashierOpen = 1; cashierOpen <= maxCashier; cashierOpen++)
    {
        // Lam moi du lieu
        totalTime = 0;
        lineUp(dTime, client, &line);
        reset(cashiers, cashierOpen);

        while (!emptyQueue(line))
        {
            for (int cashierIdx = 0; cashierIdx < cashierOpen; cashierIdx++)
            {
                if (emptyQueue(line))
                    continue;
                if (front(line) > cashiers[cashierIdx])
                    cashiers[cashierIdx] = front(line);
                totalTime += cashiers[cashierIdx] - front(line) + tranferTime;
                cashiers[cashierIdx] += tranferTime;
                deQueue(&line);
            }
        }
        printf(
            "So quay: %d; Thoi gian cho trung binh: %.1f\n",
            cashierOpen,
            (float)(totalTime / client));
        if (totalTime / client <= waitTime)
        {
            printf("=> Sieu thi se mo %d quay\n", cashierOpen);
            return 0;
        }
    }

    printf(
        "Voi %d quay hien co, khach phai cho it nhat %.1f giay moi duoc phuc vu.\n",
        maxCashier,
        (float)(totalTime / client));

    return 0;
}
```
