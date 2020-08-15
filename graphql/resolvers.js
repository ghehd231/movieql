//쿼리를 해결하는 파일
//여기서 다른 데이터베이스에도 갈 수 있고 메모리나 다른 API로도 갈 수 있음
const resolvers = {
  Query: {
    //스케마에 있는 name에 대한 해결
    name: () => '백호동',
  },
};

export default resolvers;
