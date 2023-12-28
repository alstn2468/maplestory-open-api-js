import ky from 'ky-universal';

const HEADER_API_KEY = 'x-nxopen-api-key';

export const instance = ky.create({
  hooks: {
    beforeRequest: [
      (request) => {
        if (!request.headers.get(HEADER_API_KEY)) {
          throw new Error(`[ERROR] setAPIKey를 통해 헤더를 설정해주세요.`)
        }
      }
    ]
  }
});

export function setAPIKey(apiKey: string) {
  instance.extend({ headers: { [HEADER_API_KEY]: apiKey } });
}
