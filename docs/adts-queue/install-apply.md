---
sidebar_position: 4
---

# Cài đặt và ứng dụng hàng đợi

## Bài 1

### Đề bài 1

> Có n công việc cần thực hiện, các công việc được đánh số từ 1 đến n; Minh Minh được đưa 2 danh sách:

-   Danh sách 1 gồm thứ tự các công việc được giao cho Minh Minh.
-   Danh sách 2 là thứ tự tối ưu các công việc Minh Minh phải thực hiện.

> Để thực hiện Minh Minh lấy từng công việc được giao cho mình, nếu công việc được lấy ra trùng với thứ tự tối ưu thì thực hiện công việc đó, nếu không trùng với thứ tự tối ưu thì chuyển công việc đó vào cuối danh sách thứ tự các công việc được giao. Quá trình lặp lại đến khi tất cả các công việc được thực hiện. _Mỗi lần chuyển công việc về cuối hay thực thi mất 1 đơn vị thời gian_.

Tính số đơn vị thời gian cần thiết của Minh Minh để hoàn thành n công việc được giao.

> **Đầu vào**

-   Dòng đầu tiên là số nguyên dương N
-   Dòng thứ 2 là danh sách thứ tự các công việc được giao
-   Dòng thứ 3 là danh sách thứ tự tối ưu các công việc cần thực hiện

> **Đầu ra**

-   Một số nguyên duy nhất là số đơn vị thời gian cần thiết để hoàn thành n công việc được giao

> **Ràng buộc**

-   1 <= N <= 100

> **Giải thích ví dụ**

Có 3 công việc, danh sách 1 là 3 2 1; danh sách 2 là 1 3 2. Các bước thực hiện như sau:

-   Bước 1: Lấy công việc đầu tiên trong danh sách 1, đó là công việc #3. Vì trường hợp tối ưu là công việc #1 được thực hiện đầu tiên, do đó công việc #3 được đưa trở lại cuối danh sách 1. Thời gian dành cho bước 1: 1
-   Bước 2: Lấy công việc kế tiếp trong danh sách 1, đó là công việc #2. Vì trường hợp tối ưu là công việc #1 phải được thực hiện, do đó công việc #2 được đưa trở lại cuối danh sách 1. Thời gian dành cho bước 2: 1
-   Bước 3: Lấy công việc kế tiếp trong danh sách 1, đó là công việc #1. Đó cũng là công việc cần thực hiện trong trường hợp tối ưu, do đó, thực hiện công việc #1 và lấy chúng ra khỏi các danh sách. Thời gian dành cho bước 3: 1
-   Bước 4: Lấy công việc kế tiếp trong danh sách 1, đó là công việc #3. Đó cũng là công việc cần thực hiện trong trường hợp tối ưu, do đó, thực hiện công việc #3 và lấy chúng ra khỏi các danh sách. Thời gian dành cho bước 4: 1
-   Bước 5: Lấy công việc kế tiếp trong danh sách 1, đó là công việc #2. Đó cũng là công việc cần thực hiện trong trường hợp tối ưu, do đó, thực hiện công việc #2 và lấy chúng ra khỏi các danh sách. Thời gian dành cho bước 5: 1
    Tổng thời gian thực hiện: 5

Ví dụ đầu vào:

| Input                 | Result |
| --------------------- | ------ |
| 3<br/>3 2 1<br/>1 3 2 | 5      |

### Giải 1

```c
int main()
{
    // danh sach viec can lam;
    Queue tasks;
    // cac buoc thuc hien;
    Queue steps;
    // tong cac buoc phai thuc hien;
    int total_steps = 0;

    makenullQueue(&tasks);
    makenullQueue(&steps);

    int n;
    scanf("%d", &n);
    ElementType x;

    // nhap danh sach viec can lam;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &x);
        enQueue(x, &tasks);
    }

    // nhap cac buoc thuc hien;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &x);
        enQueue(x, &steps);
    }

    // lap trong khi hai danh sach khong rong
    while (!(emptyQueue(tasks) && emptyQueue(steps)))
    {
        total_steps++;
        // truong hop thuc hien
        if (front(tasks) == front(steps))
        {
            deQueue(&tasks);
            deQueue(&steps);
        }
        // truong hop khong thuc hien
        else
        {
            enQueue(front(tasks), &tasks);
            deQueue(&tasks);
        }
    }

    printf("%d\n", total_steps);
    return 0;
}
```

## Bài 2

### Đề 2

> Minh Minh có một hàng đợi Q và cô ấy muốn thực hiện N thao tác, mỗi thao tác là một trong 2 dạng sau:

-   E x: thêm x vào hàng đợi và in ra số lượng phần tử của hàng đợi.
-   D: xóa phần tử đầu hàng, đồng thời in phần tử đã xóa và số lượng phần tử của hàng đợi sau khi xóa, 2 giá trị này cách nhau khoảng trắng. Nếu hàng đợi rỗng, in -1 ở chỗ phần tử đã xóa.

Hãy giúp Minh Minh thực hiện các thao tác trên.

> **Đầu vào**

-   Dòng đầu tiên là số nguyên dương N
-   N dòng kế tiếp, mỗi dòng là một thao tác theo cú pháp ở trên,

> **Đầu ra**

Mỗi thao tác thêm vào hàng đợi, in ra số lượng phần tử của hàng đợi sau khi thêm; mỗi thao tác xóa, hiển thị 2 số nguyên: phần tử đã xóa (-1 nếu hàng đợi rỗng) và số lượng phần tử của hàng đợi sau khi xóa.

> **Ràng buộc**

-   1 <= N <= 100
-   1 <= x <= 100

Ví dụ đầu vào:

| Input | Result |
| ----- | ------ |
| 5     |        |
| E 2   | 1      |
| D     | 2 0    |
| D     | -1 0   |
| E 3   | 1      |
| D     | 3 0    |

### Giải 2

```c
int main()
{
    int n;
    scanf("%d", &n);

    char action;
    int param;

    Queue list;
    makenullQueue(&list);

    // danh sach tham so;
    Queue params;
    makenullQueue(&params);

    // danh sach so luong;
    Queue lengths;
    makenullQueue(&lengths);

    for (int i = 0; i < n; i++)
    {
        getchar();
        scanf("%c", &action);
        switch (action)
        {
        case 'D':
            if (emptyQueue(list))
            {
                enQueue(-1, &params);
                enQueue(0, &lengths);
            }
            else
            {
                enQueue(front(list), &params);
                deQueue(&list);
                enQueue(count(list), &lengths);
            }
            break;
        case 'E':
            scanf("%d", &param);
            enQueue(param, &list);
            enQueue(101, &params);
            enQueue(count(list), &lengths);
            break;
        }
    }
    while (!(emptyQueue(params) && emptyQueue(lengths)))
    {
        if (front(params) == 101)
            printf("%d\n", front(lengths));
        else
            printf("%d %d\n", front(params), front(lengths));
        deQueue(&params);
        deQueue(&lengths);
    }
    return 0;
}
```
