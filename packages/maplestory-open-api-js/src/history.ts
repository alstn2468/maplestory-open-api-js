import { get } from './fetcher';
import { CubeHistory, StarforceHistory } from './types/history';
import { GachaQueryParameter } from './types/params';
import { GACHA_URLS } from './urls';

/**
 * @description 스타포스 강화 결과를 조회
 * @param count 한번에 가져오려는 결과의 갯수(최소 10, 최대 1000)
 * @param cursor 페이징 처리를 위한 cursor (date가 없는 경우 필수이며 date와 함께 사용 불가)
 * @param date 조회 기준일 (KST) (cursor가 없는 경우 필수이며 cursor와 함께 사용 불가)
 */
export function getStarforceHistory({
  count,
  cursor,
  date,
}: GachaQueryParameter) {
  return get<StarforceHistory>(GACHA_URLS.STARFORCE, {
    searchParams: date ? { count, date } : { count, cursor },
  });
}

/**
 * @description 큐브 사용 결과를 조회
 * @param count 한번에 가져오려는 결과의 갯수(최소 10, 최대 1000)
 * @param cursor 페이징 처리를 위한 cursor (date가 없는 경우 필수이며 date와 함께 사용 불가)
 * @param date 조회 기준일 (KST) (cursor가 없는 경우 필수이며 cursor와 함께 사용 불가)
 */
export function getCubeHistory({ count, cursor, date }: GachaQueryParameter) {
  return get<CubeHistory>(GACHA_URLS.CUBE, {
    searchParams: date ? { count, date } : { count, cursor },
  });
}
