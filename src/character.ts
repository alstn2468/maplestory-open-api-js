import { get } from './fetcher';
import { Character } from './types/character';
import { CHARACTER_URLS } from './urls';

export function getOCID(character_name: string) {
  return get<Character>(CHARACTER_URLS.OCID, {
    searchParams: { character_name },
  });
}
