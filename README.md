1. 백준 푸는 방법
   예시 데이터를 input.txt에 넣는다.
   const file =
   process.platform === 'linux'? fs.readFileSync(0, 'utf-8'): fs.readFileSync('input.txt');
   "node 파일명"으로 실행
   참고로 백준에서 여러줄 split할 때 '\n'으로 해야함..
