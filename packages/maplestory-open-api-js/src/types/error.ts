export interface ErrorMessage {
  /** 에러 명 */
  name: string;
  /** 에러 설명 */
  message: string;
}

export const ERROR_CODE = {
  OPENAPI00001: {
    status: 500,
    name: 'Internal Server Error',
    description: '서버 내부 오류',
  },
  OPENAPI00002: {
    status: 403,
    name: 'Forbidden',
    description: '권한이 없는 경우',
  },
  OPENAPI00003: {
    status: 400,
    name: 'Bad Request',
    description: '유효하지 않은 식별자',
  },
  OPENAPI00004: {
    status: 400,
    name: 'Bad Request',
    description: '파라미터 누락 또는 유효하지 않음',
  },
  OPENAPI00005: {
    status: 400,
    name: 'Bad Request',
    description: '유효하지 않은 API KEY',
  },
  OPENAPI00006: {
    status: 400,
    name: 'Bad Request',
    description: '유효하지 않은 게임 또는 API PATH',
  },
  OPENAPI00007: {
    status: 429,
    name: 'Too Many Requests',
    description: 'API 호출량 초과',
  },
};
