## Data Interface Guide

### [Bar Chart] TSV응답 가이드_Version 1.0



1. 요청

   - 시각화 메인 화면에서 chart를 설정할 수 있습니다.

   - 사용자가 chart 데이터를 요청하면 데이터를 가져와 차트를 그립니다.

     

2. 응답

   * TSV파일 형식으로 chart를 위한 데이터를 제공합니다.

   * TSV의 형식은 아래와 같습니다.

     ```
letter   frequency
     
A        .08167
     
B        .01492
     
C        .02780
     
D        .04253
     
E        .12702
     
F        .02288
     
G        .02022
     
…
     ```

     ㄱ. letter : x축 라벨

     ㄴ. frequency : y축 라벨

     ㄷ. letter의 값 : x축 값

     ㄹ. frequency의 값: y축 값

      

3. chart library정보

   -  https://d3js.org

     

4. 차트샘플

   - ![1581429888357](./images/4.PNG)