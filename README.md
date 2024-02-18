## 설명

해당 레포는 앞으로 진행할 기능 단위 프로젝트의 boilerplate 입니다.



## 프로젝트
1. [miniproject_chat](https://github.com/rlaclgh/miniproject_chat) (stomp) <br/>
   채팅방 생성 및 채팅 기능을 stomp를 이용해 구현했습니다.<br/><br/>
   <img src="https://github.com/rlaclgh/miniproject_chat/assets/46914232/390293a0-5ccd-4ad7-b4f9-0df619ab9654" width="600px"></img>
  
2. [miniproject_image_upload](https://github.com/rlaclgh/miniproject_image_upload) (presigned url, s3)<br/>
   이미지 업로드 기능을 구현했습니다.<br/><br/>
   <img src="https://github.com/rlaclgh/miniproject_image_upload/assets/46914232/42598415-2151-4956-88b1-315309e9f83b" width="600px"></img>
   
3. [miniproject_server_sent_event](https://github.com/rlaclgh/miniproject_server_sent_event) (server sent event)<br/>
   Server Sent Event를 채팅을 예시로 구현했습니다.<br/><br/>
   <img src="https://github.com/rlaclgh/miniproject_server_sent_event/assets/46914232/c6fa6ccf-3aa0-44ea-9eb0-f36f16879972" width="450px"></img>

4. [miniproject_csv_upload](https://github.com/rlaclgh/miniproject_csv_upload) (spring batch)<br/>
   csv 파일로 db에 upload 하는 프로젝트입니다.<br/><br/>
   <img src="https://github.com/rlaclgh/miniproject_csv_upload/assets/46914232/4e5092a1-0f1c-43b3-b72e-f62061ba3b36" width="600px"></img>

5. [miniproject_multi_version_table(https://github.com/rlaclgh/miniproject_multi_version_table)
   게시물 정보를 snapshot으로 관리해 수정 이전의 정보를 보관할 수 있는 프로젝트입니다.
   <img width="600px" alt="miniproject_multi_version_table_erd" src="https://github.com/rlaclgh/miniproject_multi_version_table/assets/46914232/050708be-be51-483c-806e-edebc2b1993a">   
   <img width="600px" src="https://github.com/rlaclgh/miniproject_multi_version_table/assets/46914232/b2bd7ff4-5ea4-445e-bc18-c3dd1f07b3e6">   




## 실행결과

http://127.0.0.1:3000

1. pc
   <br/>
   <img src="https://github.com/rlaclgh/boilerplate/assets/46914232/a423e314-5957-4d7c-948c-a738ef5c668a" width="450px" ></img>
   <br/>
2. mobile
   <br/>
   <img src="https://github.com/rlaclgh/boilerplate/assets/46914232/7287a912-6a54-473c-9ed0-33d243ad9794" width="450px" ></img>
   <br/>

## 실행방법

```

docker compose up -d --build

```

## 기술스택

- client: Nextjs
- server: Spring boot
- db : Postgre
