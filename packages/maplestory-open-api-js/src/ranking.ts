import { get } from './fetcher';
import {
  AchievementRankingQueryParameter,
  DojangRankingQueryParameter,
  GuildRankingQueryParameter,
  OverallRankingQueryParameter,
  TheSeedRankingQueryParameter,
  UnionRankingQueryParameter,
} from './types/params';
import {
  AchievementRanking,
  DojangRanking,
  GuildRanking,
  OverallRanking,
  TheSeedRanking,
  UnionRanking,
} from './types/ranking';
import { RANKING_URLS } from './urls';
import { excludeUndefinedFields, getPreviousFormattedDate } from './utils';

/**
 * @description 종합 랭킹 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param character_class 직업 및 전직
 * @param world_name 월드 명
 * @param world_type 월드 타입 (0:일반, 1:리부트) (기본 값은 0이며, world_name 입력 시 미 반영)
 * @param page 페이지 번호
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getOverallRanking({
  ocid,
  character_class,
  world_name,
  world_type = 0,
  page,
  date = getPreviousFormattedDate(),
}: OverallRankingQueryParameter = {}) {
  return get<OverallRanking>(RANKING_URLS.OVERALL, {
    searchParams: excludeUndefinedFields<OverallRankingQueryParameter>({
      ocid,
      character_class,
      world_name,
      world_type,
      page,
      date,
    }),
  });
}

/**
 * @description 유니온 랭킹 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param world_name 월드 명
 * @param page 페이지 번호
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getUnionRanking({
  ocid,
  world_name,
  page,
  date = getPreviousFormattedDate(),
}: UnionRankingQueryParameter = {}) {
  return get<UnionRanking>(RANKING_URLS.UNION, {
    searchParams: excludeUndefinedFields<UnionRankingQueryParameter>({
      ocid,
      world_name,
      page,
      date,
    }),
  });
}

/**
 * @description 길드 랭킹 정보를 조회
 * @param ranking_type 랭킹 타입 (0:주간 명성치, 1:플래그 레이스, 2:지하 수로)
 * @param world_name 월드 명
 * @param guild_name 길드 명
 * @param page 페이지 번호
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getGuildRanking({
  ranking_type,
  world_name,
  guild_name,
  page,
  date = getPreviousFormattedDate(),
}: GuildRankingQueryParameter) {
  return get<GuildRanking>(RANKING_URLS.GUILD, {
    searchParams: excludeUndefinedFields<GuildRankingQueryParameter>({
      ranking_type,
      world_name,
      guild_name,
      page,
      date,
    }),
  });
}

/**
 * @description 무릉도장 랭킹 정보를 조회
 * @param difficulty 구간 (0:일반, 1:통달)
 * @param ocid 캐릭터 식별자
 * @param world_name 월드 명
 * @param character_class 직업 및 전직
 * @param page 페이지 번호
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getDojangRanking({
  difficulty,
  character_class,
  ocid,
  world_name,
  page,
  date = getPreviousFormattedDate(),
}: DojangRankingQueryParameter) {
  return get<DojangRanking>(RANKING_URLS.DOJANG, {
    searchParams: excludeUndefinedFields<DojangRankingQueryParameter>({
      difficulty,
      character_class,
      ocid,
      world_name,
      page,
      date,
    }),
  });
}

/**
 * @description 더 시드 랭킹 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param world_name 월드 명
 * @param page 페이지 번호
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getTheSeedRanking({
  ocid,
  world_name,
  page,
  date = getPreviousFormattedDate(),
}: TheSeedRankingQueryParameter = {}) {
  return get<TheSeedRanking>(RANKING_URLS.THESEED, {
    searchParams: excludeUndefinedFields<TheSeedRankingQueryParameter>({
      ocid,
      world_name,
      page,
      date,
    }),
  });
}

/**
 * @description 업적 랭킹 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param page 페이지 번호
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getAchievementRanking({
  ocid,
  page,
  date = getPreviousFormattedDate(),
}: AchievementRankingQueryParameter = {}) {
  return get<AchievementRanking>(RANKING_URLS.ACHIEVEMENT, {
    searchParams: excludeUndefinedFields<AchievementRankingQueryParameter>({
      ocid,
      page,
      date,
    }),
  });
}
