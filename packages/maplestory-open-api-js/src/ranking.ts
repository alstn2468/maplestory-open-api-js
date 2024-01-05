import { get } from './fetcher';
import {
  RankingAchievementQueryParameter,
  RankingDojangQueryParameter,
  RankingGuildQueryParameter,
  RankingOverAllQueryParameter,
  RankingTheSeedQueryParameter,
  RankingUnionQueryParameter,
} from './types/params';
import {
  AchievementRanking,
  GuildRanking,
  OverallRanking,
  TheSeedRanking,
  UnionRanking,
} from './types/ranking';
import { RANKING_URLS } from './urls';

/**
 * @description 종합 랭킹 정보를 조회합니다.
 * @param date 조회 기준일 (KST)
 * @param world_name 월드 명
 * @param world_type 월드 타입 (0:일반, 1:리부트) (기본 값은 0이며, world_name 입력 시 미 반영)
 * @param class 직업 및 전직
 * @param ocid 캐릭터 식별자
 * @param page 페이지 번호
 */
export function getOverAllRanking({
  date,
  world_name,
  world_type,
  ocid,
  _class,
  page,
}: RankingOverAllQueryParameter) {
  return get<OverallRanking>(RANKING_URLS.OVERALL, {
    searchParams: {
      date,
      world_name,
      world_type,
      class: _class,
      ocid,
      page,
    },
  });
}

/**
 * @description 유니온 랭킹 정보를 조회합니다.
 * @param date 조회 기준일 (KST)
 * @param world_name 월드 명
 * @param ocid 캐릭터 식별자
 * @param page 페이지 번호
 */
export function getUnionRanking({
  date,
  world_name,
  ocid,
  page,
}: RankingUnionQueryParameter) {
  return get<UnionRanking>(RANKING_URLS.UNION, {
    searchParams: {
      date,
      world_name,
      ocid,
      page,
    },
  });
}

/**
 * @description 길드 랭킹 정보를 조회합니다.
 * @param date 조회 기준일 (KST)
 * @param world_name 월드 명
 * @param ranking_type 랭킹 타입 (0:주간 명성치, 1:플래그 레이스, 2:지하 수로)
 * @param guild_name 길드 명
 * @param page 페이지 번호
 */
export function getGuildRanking({
  date,
  world_name,
  ranking_type,
  guild_name,
  page,
}: RankingGuildQueryParameter) {
  return get<GuildRanking>(RANKING_URLS.UNION, {
    searchParams: {
      date,
      world_name,
      ranking_type,
      guild_name,
      page,
    },
  });
}

/**
 * @description 무릉도장 랭킹 정보를 조회합니다.
 * @param date 조회 기준일 (KST)
 * @param world_name 월드 명
 * @param difficulty 구간 (0:일반, 1:통달)
 * @param class 직업 및 전직
 * @param ocid 캐릭터 식별자
 * @param page 페이지 번호
 */
export function getDojangRanking({
  date,
  world_name,
  difficulty,
  _class,
  ocid,
  page,
}: RankingDojangQueryParameter) {
  return get<GuildRanking>(RANKING_URLS.UNION, {
    searchParams: {
      date,
      world_name,
      difficulty,
      class: _class,
      ocid,
      page,
    },
  });
}

/**
 * @description 더 시드 랭킹 정보를 조회합니다.
 * @param date 조회 기준일 (KST)
 * @param world_name 월드 명
 * @param ocid 캐릭터 식별자
 * @param page 페이지 번호
 */
export function getTheSeedRanking({
  date,
  world_name,
  ocid,
  page,
}: RankingTheSeedQueryParameter) {
  return get<TheSeedRanking>(RANKING_URLS.UNION, {
    searchParams: {
      date,
      world_name,
      ocid,
      page,
    },
  });
}

/**
 * @description 업적 랭킹 정보를 조회합니다.
 * @param date 조회 기준일 (KST)
 * @param ocid 캐릭터 식별자
 * @param page 페이지 번호
 */
export function getAchievementRanking({
  date,
  ocid,
  page,
}: RankingAchievementQueryParameter) {
  return get<AchievementRanking>(RANKING_URLS.UNION, {
    searchParams: {
      date,
      ocid,
      page,
    },
  });
}
