import { get } from './fetcher';
import { User } from './types/common';
import { OUID_URL } from './urls';

/**
 * @decription 캐릭터 식별자(ocid) 조회
 */
export function getOUID() {
  return get<User>(OUID_URL);
}
