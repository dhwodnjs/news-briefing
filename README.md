# file structure

- frontend

  - public
  - src

    - pages

      - main.tsx
      - article.tsx
      - customize.tsx

    - styles

      - pages
        - main.ts
        - article.ts
        - ...
      - components
        - ...

    - components

      - window

        - window.tsx

      - common

        - ~ ~ .tsx

      - main

        - headline.tsx
        - ranking.tsx (?)
        - ...

      - article

        - ~~.tsx

      - stt
        - stt.tsx

    - features

      - common
        - startSTT.ts
      - main
        - getHeadline.ts
        - getRanking.ts
        - ...
      - article
        - getArticle.ts
        - ...

    - redux

      - slicer
        - main.slice.ts
        - article.slice.ts
      - store.ts

    - utils

      - decoder.ts

    - request_api

      - requestHeadline.ts

    - App.tsx
    - index.tsx

- crawl

  - main.py
    ```
    네이버 뉴스 -> 랭킹
    ```

- backend
  - server.py
  - db
    - something
  - services
  - utils
  - models

# Version

- Python 3.8
- fastapi 0.100.1

- Node 18.12.0
- npm 9.8.1

- React 18.2.20
- Redux 4.2.1
- Typescript 5.1.6

- ESLint 8.46.0
- Prettier 3.0.1
- create-react-app 5.0.1
