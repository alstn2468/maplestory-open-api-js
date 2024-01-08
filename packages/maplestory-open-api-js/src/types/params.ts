export interface OCIDParameter {
  /** 캐릭터 명 */
  character_name: string;
}

export interface CharacterQueryParameter {
  /** 캐릭터 식별자 */
  ocid: string;
  /** 조회 기준일 (KST)
   * Example : 2023-12-21
   * */
  date?: string;
}

/**
 * 0: 0차 스킬 및 제로 공용스킬
 * 1: 1차 스킬
 * 1.5: 1.5차 스킬
 * 2: 2차 스킬
 * 2.5: 2.5차 스킬
 * 3: 3차 스킬
 * 4: 4차 스킬 및 제로 알파/베타 스킬
 * hyperpassive: 하이퍼 패시브 스킬
 * hyperactive: 하이퍼 액티브 스킬
 * 5: 5차 스킬
 * 6: 6차 스킬
 */
type CharacterSkillGrade =
  | '0'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '4'
  | 'hyperpassive'
  | 'hyperactive'
  | '5'
  | '6';

export interface CharacterSkillParameter extends CharacterQueryParameter {
  character_skill_grade: CharacterSkillGrade;
}

type World =
  | '스카니아'
  | '베라'
  | '루나'
  | '제니스'
  | '크로아'
  | '유니온'
  | '엘리시움'
  | '이노시스'
  | '레드'
  | '오로라'
  | '아케인'
  | '노바'
  | '리부트'
  | '리부트2'
  | '버닝'
  | '버닝2'
  | '버닝3';

export interface OGuildIDParameter {
  /** 길드 명 */
  guild_name: string;
  /** 월드 명 */
  world_name: World;
}

export interface GuildQueryParameter {
  /** 길드 식별자 */
  oguild_id: string;
  /** 조회 기준일 (KST)
   * Example : 2023-12-21
   * */
  date?: string;
}

export interface GachaQueryParameter {
  /** 한번에 가져오려는 결과의 갯수(최소 10, 최대 1000) */
  count: number;
  /** 페이징 처리를 위한 cursor (date가 없는 경우 필수이며 date와 함께 사용 불가) */
  cursor: string;
  /** 조회 기준일 (KST) (cursor가 없는 경우 필수이며 cursor와 함께 사용 불가)
   * Example : 2023-12-21
   * */
  date?: string;
}

interface RankingQueryParameterBase {
  [key: string]: string | number | undefined;
}

interface RankingQueryParameter extends RankingQueryParameterBase {
  /** 페이지 번호 */
  page?: number;
  /** 조회 기준일 (KST)
   * Example : 2023-12-21
   * */
  date?: string;
}

type Class =
  | '초보자-전체 전직'
  | '전사-전체 전직'
  | '전사-검사'
  | '전사-파이터'
  | '전사-페이지'
  | '전사-스피어맨'
  | '전사-크루세이더'
  | '전사-나이트'
  | '전사-버서커'
  | '전사-히어로'
  | '전사-팔라딘'
  | '전사-다크나이트'
  | '마법사-전체 전직'
  | '마법사-매지션'
  | '마법사-위자드(불,독)'
  | '마법사-위자드(썬,콜)'
  | '마법사-클레릭'
  | '마법사-메이지(불,독)'
  | '마법사-메이지(썬,콜)'
  | '마법사-프리스트'
  | '마법사-아크메이지(불,독)'
  | '마법사-아크메이지(썬,콜)'
  | '마법사-비숍'
  | '궁수-전체 전직'
  | '궁수-아처'
  | '궁수-헌터'
  | '궁수-사수'
  | '궁수-레인저'
  | '궁수-저격수'
  | '궁수-보우마스터'
  | '궁수-신궁'
  | '궁수-아처(패스파인더)'
  | '궁수-에인션트아처'
  | '궁수-체이서'
  | '궁수-패스파인더'
  | '도적-전체 전직'
  | '도적-로그'
  | '도적-어쌔신'
  | '도적-시프'
  | '도적-허밋'
  | '도적-시프마스터'
  | '도적-나이트로드'
  | '도적-섀도어'
  | '도적-세미듀어러'
  | '도적-듀어러'
  | '도적-듀얼마스터'
  | '도적-슬래셔'
  | '도적-듀얼블레이더'
  | '해적-전체 전직'
  | '해적-해적'
  | '해적-인파이터'
  | '해적-건슬링거'
  | '해적-캐논슈터'
  | '해적-버커니어'
  | '해적-발키리'
  | '해적-캐논블래스터'
  | '해적-바이퍼'
  | '해적-캡틴'
  | '해적-캐논마스터'
  | '기사단-전체 전직'
  | '기사단-노블레스'
  | '기사단-소울마스터'
  | '기사단-플레임위자드'
  | '기사단-윈드브레이커'
  | '기사단-나이트워커'
  | '기사단-스트라이커'
  | '기사단-미하일'
  | '아란-전체 전직'
  | '에반-전체 전직'
  | '레지스탕스-전체 전직'
  | '레지스탕스-시티즌'
  | '레지스탕스-배틀메이지'
  | '레지스탕스-와일드헌터'
  | '레지스탕스-메카닉'
  | '레지스탕스-데몬슬레이어'
  | '레지스탕스-데몬어벤져'
  | '레지스탕스-제논'
  | '레지스탕스-블래스터'
  | '메르세데스-전체 전직'
  | '팬텀-전체 전직'
  | '루미너스-전체 전직'
  | '카이저-전체 전직'
  | '엔젤릭버스터-전체 전직'
  | '초월자-전체 전직'
  | '초월자-제로'
  | '은월-전체 전직'
  | '프렌즈 월드-전체 전직'
  | '프렌즈 월드-키네시스'
  | '카데나-전체 전직'
  | '일리움-전체 전직'
  | '아크-전체 전직'
  | '호영-전체 전직'
  | '아델-전체 전직'
  | '카인-전체 전직'
  | '라라-전체 전직'
  | '칼리-전체 전직';

type WorldType = 0 | 1;

export interface OverallRankingQueryParameter extends RankingQueryParameter {
  /** 캐릭터 식별자 */
  ocid?: string;
  /** 직업 및 전직 */
  character_class?: Class;
  /** 월드 명 */
  world_name?: World;
  /** 월드 타입 (0:일반, 1:리부트) (기본 값은 0이며, world_name 입력 시 미 반영) */
  world_type?: WorldType;
}

export interface UnionRankingQueryParameter extends RankingQueryParameter {
  /** 캐릭터 식별자 */
  ocid?: string;
  /** 월드 명 */
  world_name?: World;
}

type RankingType = 0 | 1 | 2;

export interface GuildRankingQueryParameter extends RankingQueryParameter {
  /** 랭킹 타입 (0:주간 명성치, 1:플래그 레이스, 2:지하 수로) */
  ranking_type: RankingType;
  /** 길드 명 */
  guild_name?: string;
  /** 월드 명 */
  world_name?: World;
}

type Difficulty = 0 | 1;

export interface DojangRankingQueryParameter extends RankingQueryParameter {
  /** 구간 (0:일반, 1:통달) */
  difficulty: Difficulty;
  /** 직업 및 전직 */
  character_class?: Class;
  /** 캐릭터 식별자 */
  ocid?: string;
  /** 월드 명 */
  world_name?: World;
}

export interface TheSeedRankingQueryParameter
  extends UnionRankingQueryParameter {}

export interface AchievementRankingQueryParameter
  extends RankingQueryParameter {
  /** 캐릭터 식별자 */
  ocid?: string;
}
