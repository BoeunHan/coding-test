1. 백준 푸는 방법
   <br/><br/>
   예시 데이터를 input.txt에 넣는다.
   <br/>
   ```javascript
   const file = process.platform === 'linux'? fs.readFileSync(0, 'utf-8'): fs.readFileSync('input.txt');
   const input = file.toString().split('\n');
   ```
   
   "node 파일명"으로 실행
