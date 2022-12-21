import UserType from 'types/UserType';

interface PostType {
  id: number;
  title: string;
  contents: string;
  writer: UserType;
  createDate: string;
}

const bestTopPost: PostType[] = [
  {
    id: 1,
    title: '제목입니다',
    contents: '게시글입니다',
    writer: {
      id: 1,
      image: require('/assets/images/store.png'),
      name: '오니',
    },
    createDate: '2022년 12월 20일 (화)',
  },
  {
    id: 2,
    title: '222222',
    contents: '222222222222222222',
    writer: {
      id: 2,
      name: '검은콩',
    },
    createDate: '2022년 12월 21일 (화)',
  },
  {
    id: 3,
    title: '제목3',
    contents: '게시글3',
    writer: {
      id: 3,
      image: require('/assets/images/team.png'),
      name: '방울',
    },
    createDate: '2022년 12월 20일 (화)',
  },
];

const bestPost = [
  {
    id: 1,
    title: '제목입니다',
    contents: '게시글입니다',
    writer: {
      id: 1,
      image: require('/assets/images/store.png'),
      name: '오니',
    },
    createDate: '2022년 12월 20일 (화)',
  },
  {
    id: 2,
    title: '222222',
    contents: '222222222222222222',
    writer: {
      id: 2,
      name: '검은콩',
    },
    createDate: '2022년 12월 21일 (화)',
  },
  {
    id: 3,
    title: '제목3',
    contents: '게시글3',
    writer: {
      id: 3,
      image: require('/assets/images/team.png'),
      name: '방울',
    },
    createDate: '2022년 12월 20일 (화)',
  },
  {
    id: 4,
    title: '제목3',
    contents: '게시글3',
    writer: {
      id: 3,
      image: require('/assets/images/team.png'),
      name: '방울',
    },
    createDate: '2022년 12월 20일 (화)',
  },
  {
    id: 5,
    title: '제목3',
    contents: '게시글3',
    writer: {
      id: 3,
      image: require('/assets/images/team.png'),
      name: '방울',
    },
    createDate: '2022년 12월 20일 (화)',
  },
  {
    id: 6,
    title: '제목3',
    contents: '게시글3',
    writer: {
      id: 3,
      image: require('/assets/images/team.png'),
      name: '방울',
    },
    createDate: '2022년 12월 20일 (화)',
  },
];

export default {bestTopPost, bestPost};
