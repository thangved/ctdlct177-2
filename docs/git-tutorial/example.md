---
sidebar_position: 3
---

# Thực hành

## Tạo git repository

Để tạo một git `repository`, các bạn dùng lệnh:

```sh
git init
```

## Thêm một nhánh vào git repository

Để tạo một nhánh trong git repository, các bạn dùng lệnh sau:

```sh
git branch -M <tên_nhánh>
```

Ví dụ:

```sh
git branch -M main
```

## Thêm file vào git repository

Để thêm một file vào trong git repository, các bạn sử dụng lệnh sau:

```sh
git add <tên_file>
```

Hoặc đơn giản hơn là dùng câu lệnh sau để thêm toàn bộ file vào git repository

```sh
git add .
```

## Git commit

Một commit đại diện cho một thời điểm cụ thể trong lịch sử dự án của bạn. Sử dụng lệnh commit kết hợp với lệnh git add để cho git biết những thay đổi bạn muốn lưu vào local repository.

```sh
git commit -m "<message>"
```

## Git remote

Một Remote (kho lưu trữ từ xa) là một bản sao của một chi nhánh. Remote giao tiếp ngược dòng với nhánh gốc (origin branch) của chúng và các Remote khác trong kho lưu trữ.

```sh
git remote add <tên_remote> <url>
```

## Git push

Git push là việc đẩy các file từ một nhánh lên git remote.

```sh
git push <tên_remote> <tên_nhánh>
```

:::tip

Các bạn có thể thêm flag `-u` để lần sau chỉ cần gõ `git push` là có thể đẩy code lên.

:::
