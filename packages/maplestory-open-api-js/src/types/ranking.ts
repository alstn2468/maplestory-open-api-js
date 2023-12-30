interface RankingBase {
  /** 조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
   * example: 2023-12-21T00:00+09:00
   * */
  date: string;
}

export interface CommonRankingProps {
  /** 종합 랭킹 순위 */
  ranking: number;
  /** 캐릭터 명 */
  character_name: string;
  /** 필드 명 */
  world_name: string;
  /** 직업 명 */
  class_name: string;
  /** 전직 직업 명 */
  sub_class_name: string;
}

export interface OverallRanking extends RankingBase {
  ranking: CommonRankingProps & {
    /** 캐릭터 레벨 */
    character_level: number;
    /** 캐릭터 경험치 */
    character_exp: number;
    /** 캐릭터 인기도 */
    character_popularity: number;
    /** 길드 명 */
    character_guildname: string;
  };
}

export interface UnionRanking extends RankingBase {
  ranking: CommonRankingProps & {
    /** 유니온 레벨 */
    union_level: number;
    /** 유니온 파워 */
    union_power: number;
  };
}

export interface GuildRanking extends RankingBase {
  ranking: {
    /** 길드 랭킹 순위 */
    ranking: number;
    /** 길드 명 */
    guild_name: string;
    /** 월드 명 */
    world_name: string;
    /** 길드 레벨 */
    guild_level: number;
    /** 길드 마스터 캐릭터 명 */
    guild_master_name: string;
    /** 길드 마크 */
    guild_mark: string;
    /** 길드 포인트 */
    guild_point: number;
  };
}

export interface DojangRanking extends RankingBase {
  ranking: {
    /** 무릉도장 랭킹 순위 */
    ranking: number;
    /** 캐릭터 명 */
    character_name: string;
    /** 월드 명 */
    world_name: string;
    /** 직업 명 */
    class_name: string;
    /** 전직 직업 명 */
    sub_class_name: string;
    /** 캐릭터 레벨 */
    character_level: number;
    /** 무릉도장 구간 */
    dojang_floor: number;
    /** 무릉도장 클리어 시간 기록 (초 단위) */
    dojang_time_record: number;
  };
}

export interface TheSeedRanking extends RankingBase {
  ranking: {
    /** 더 시드 랭킹 순위 */
    ranking: number;
    /** 캐릭터 명 */
    character_name: string;
    /** 월드 명 */
    world_name: string;
    /** 직업 명 */
    class_name: string;
    /** 전직 직업 명 */
    sub_class_name: string;
    /** 캐릭터 레벨 */
    character_level: number;
    /** 더 시드 도달 층 */
    theseed_floor: number;
    /** 더 시드 클리어 시간 기록 (초 단위) */
    theseed_time_record: number;
  };
}

export interface AchievementRanking extends RankingBase {
  ranking: {
    /** 업적 랭킹 순위 */
    ranking: number;
    /** 캐릭터 명 */
    character_name: string;
    /** 월드 명 */
    world_name: string;
    /** 직업 명 */
    class_name: string;
    /** 전직 직업 명 */
    sub_class_name: string;
    /** 업적 등급 */
    trophy_grade: string;
    /** 업적 점수 */
    trophy_score: string;
  };
}

export interface ErrorMessage extends RankingBase {
  error: {
    /** 에러 명 */
    name: string;
    /** 에러 설명 */
    message: string;
  };
}
