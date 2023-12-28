import { Skill } from './common';

export interface Guild {
  /** 길드 식별자 */
  oguild_id: string;
}

export interface GuildBasic {
  /** 조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
   * example: 2023-12-21T00:00+09:00
   * */
  date: string;
  /** 월드 명 */
  world_name: string;
  /** 길드 명 */
  guild_name: string;
  /** 길드 레벨 */
  guild_level: number;
  /** 길드 명성치 */
  guild_fame: number;
  /** 길드 포인트(GP) */
  guild_point: number;
  /** 길드 마스터 캐릭터 명 */
  guild_master_name: string;
  /** 길드원 수 */
  guild_member_count: number;
  /** 길드원 목록 */
  guild_member: Array<string>;
  /** 길드 스킬 목록 */
  guild_skill: Array<Skill>;
  /** 노블레스 스킬 목록 */
  guild_noblesse_skill: Array<Skill>;
  /** 조합형 길드 마크 */
  guild_mark: string;
  /** 커스텀 길드 마크(base64 인코딩 형식) */
  guild_mark_custom: string;
}
