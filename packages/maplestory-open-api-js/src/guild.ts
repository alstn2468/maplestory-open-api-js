import { get } from './fetcher';
import { Guild, GuildBasic } from './types/guild';
import { GuildQueryParameter, OGuildIDParameter } from './types/params';
import { GUILD_URLS } from './urls';
import { getPreviousFormattedDate } from './utils';

/**
 * @description 길드 식별자(oguild_id) 정보를 조회
 * @param guild_name 길드 명
 * @param world_name 월드 명
 */
export function getOGuildID({ world_name, guild_name }: OGuildIDParameter) {
  return get<Guild>(GUILD_URLS.OGUILD_ID, {
    searchParams: {
      world_name,
      guild_name,
    },
  });
}

/**
 * @description 기본 정보를 조회
 * @param oguild_id 길드 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getGuildBasic({
  oguild_id,
  date = getPreviousFormattedDate(),
}: GuildQueryParameter) {
  return get<GuildBasic>(GUILD_URLS.BASIC, {
    searchParams: { oguild_id, date },
  });
}
