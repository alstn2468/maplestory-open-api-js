import { Skill } from './common';

interface CharacterBase {
  /** 조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
   * example: 2023-12-21T00:00+09:00
   * */
  date: string;
}

export interface Character {
  /** 캐릭터 식별자 */
  ocid: string;
}

export interface CharacterBasic extends CharacterBase {
  /** 캐릭터 명 */
  character_name: string;
  /** 월드 명 */
  world_name: string;
  /** 캐릭터 성별 */
  character_gender: string;
  /** 캐릭터 직업 */
  character_class: string;
  /** 캐릭터 전직 차수 */
  character_class_level: string;
  /** 캐릭터 레벨 */
  character_level: number;
  /** 현재 레벨에서 보유한 경험치 */
  character_exp: number;
  /** 현재 레벨에서 경험치 퍼센트 */
  character_exp_rate: string;
  /** 캐릭터 소속 길드 명 */
  character_guild_name: string;
  /** 캐릭터 외형 이미지 */
  character_image: string;
}

export interface CharacterPopularity extends CharacterBase {
  /** 캐릭터 인기도 */
  popularity: number;
}

export interface CharacterStat extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 현재 스탯 정보 */
  final_stat: Array<{
    /** 스탯 명
     * example: 최소 스탯 공격력
     * */
    stat_name: string;
    /** 스탯 값
     * example: 43.75
     * */
    stat_value: string;
  }>;
  /** 잔여 AP */
  remain_ap: number;
}

export interface HyperStat {
  /** 스탯 종류 */
  stat_type: string;
  /** 스탯 투자 포인트 */
  stat_point: number;
  /** 스탯 레벨 */
  stat_level: number;
  /** 스탯 상승량 */
  stat_increase: string;
}

export interface CharacterHyperStat extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 적용 중인 프리셋 번호 */
  use_preset_no: string;
  /** 사용 가능한 최대 하이퍼스탯 포인트 */
  use_available_hyper_stat: number;
  /** 프리셋 1번 하이퍼 스탯 정보 */
  hyper_stat_preset_1: Array<HyperStat>;
  /** 프리셋 1번 하이퍼 스탯 잔여 포인트 */
  hyper_stat_preset_1_remain_point: number;
  /** 프리셋 2번 하이퍼 스탯 정보 */
  hyper_stat_preset_2: Array<HyperStat>;
  /** 프리셋 2번 하이퍼 스탯 잔여 포인트 */
  hyper_stat_preset_2_remain_point: number;

  /** 프리셋 3번 하이퍼 스탯 정보 */
  hyper_stat_preset_3: Array<HyperStat>;
  /** 프리셋 3번 하이퍼 스탯 잔여 포인트 */
  hyper_stat_preset_3_remain_point: number;
}

export interface CharacterPropensity extends CharacterBase {
  /** 카리스마 레벨 */
  charisma_level: number;
  /** 감성 레벨 */
  sensibility_level: number;
  /** 통찰력 레벨 */
  insight_level: number;
  /** 의지 레벨 */
  willingness_level: number;
  /** 손재주 레벨 */
  handicraft_level: number;
  /** 매력 레벨 */
  charm_level: number;
}

export interface CharacterAbility extends CharacterBase {
  /** 어빌리티 등급 */
  ability_grade: string;
  /** 어빌리티 정보 */
  ability_info: Array<{
    /** 어빌리티 번호 */
    ability_no: string;
    /** 어빌리티 등급 */
    ability_grade: string;
    /** 어빌리티 옵션 및 수치 */
    ability_value: string;
  }>;
  /** 보유 명성치 */
  remain_fame: number;
}

export interface ItemBaseOption {
  /** STR */
  str: string;
  /** DEX */
  dex: string;
  /** INT */
  int: string;
  /** LUK */
  luk: string;
  /** 최대 HP */
  max_hp: string;
  /** 최대 MP */
  max_mp: string;
  /** 공격력 */
  attack_power: string;
  /** 마력 */
  magic_power: string;
  /** 방어력 */
  armor: string;
  /** 이동속도 */
  speed: string;
  /** 점프력 */
  jump: string;
  /** 보스 공격 시 데미지 증가(%) */
  boss_damage: string;
  /** 몬스터 방어율 무시(%) */
  ignore_monster_armor: string;
  /** 올스탯(%) */
  all_stat: string;
  /** 데미지(%) */
  damage: string;
  /** 착용 레벨 감소 */
  equipment_level_decrease: number;
  /** 최대 HP(%) */
  max_hp_rate: string;
  /** 최대 MP(%) */
  max_mp_rate: string;
}

export interface ItemEquipment {
  /** 장비 부위 명 */
  item_equipment_part: string;
  /** 장비 슬롯 위치 */
  equipment_slot: string;
  /** 장비 명 */
  item_name: string;
  /** 장비 아이콘 */
  item_icon: string;
  /** 장비 설명 */
  item_description: string;
  /** 장비 외형 */
  item_shape_name: string;
  /** 장비 외형 아이콘 */
  item_shape_icon: string;
  /** 전용 성별 */
  gender: string;
  /** 장비 최종 옵션 정보 */
  item_total_option: ItemBaseOption;
  /** 장비 기본 옵션 정보 */
  item_base_option: ItemBaseOption;
  /** 잠재능력 등급 */
  potential_option_grade: string;
  /** 에디셔널 잠재능력 등급 */
  additional_potential_option_grade: string;
  /** 잠재능력 첫 번째 옵션 */
  potential_option_1: string;
  /** 잠재능력 두 번째 옵션 */
  potential_option_2: string;
  /** 잠재능력 세 번째 옵션 */
  potential_option_3: string;
  /** 에디셔널 잠재능력 첫 번째 옵션 */
  additional_potential_option_1: string;
  /** 에디셔널 잠재능력 두 번째 옵션 */
  additional_potential_option_2: string;
  /** 에디셔널 잠재능력 세 번째 옵션 */
  additional_potential_option_3: string;
  /** 착용 레벨 증가 */
  equipment_level_increase: number;
  /** 장비 특별 옵션 정보 */
  item_exceptional_option: Pick<
    ItemBaseOption,
    | 'str'
    | 'dex'
    | 'int'
    | 'luk'
    | 'max_hp'
    | 'max_mp'
    | 'attack_power'
    | 'magic_power'
  >;
  /** 장비 추가 옵션 */
  item_add_option: Omit<ItemBaseOption, 'max_hp_rate' | 'max_mp_rate'>;
  /** 성장 경험치 */
  growth_exp: number;
  /** 성장 레벨 */
  growth_level: number;
  /** 업그레이드 횟수 */
  scroll_upgrade: string;
  /** 가위 사용 가능 횟수 (교환 불가 장비, 가위 횟수가 없는 교환 가능 장비는 255) */
  cuttable_count: string;
  /** 황금 망치 재련 적용 (1:적용, 이외 미 적용) */
  golden_hammer_flag: string;
  /** 복구 가능 횟수 */
  scroll_resilience_count: string;
  /** 업그레이드 가능 횟수 */
  scroll_upgradeable_count: string;
  /** 소울 명 */
  soul_name: string;
  /** 소울 옵션 */
  soul_option: string;
  /** 장비 기타 옵션 정보 */
  item_etc_option: Omit<
    ItemBaseOption,
    | 'boss_damage'
    | 'ignore_monster_armor'
    | 'all_stat'
    | 'damage'
    | 'equipment_level_decrease'
    | 'max_hp_rate'
    | 'max_mp_rate'
  >;
  /** 강화 단계 */
  starforce: string;
  /** 놀라운 장비 강화 주문서 사용 여부 (0:미사용, 1:사용) */
  starforce_scroll_flag: string;
  /** 장비 스타포스 옵션 정보 */
  item_starforce_option: Omit<
    ItemBaseOption,
    | 'boss_damage'
    | 'ignore_monster_armor'
    | 'all_stat'
    | 'damage'
    | 'equipment_level_decrease'
    | 'max_hp_rate'
    | 'max_mp_rate'
  >;
  /** 특수 반지 레벨 */
  special_ring_level: number;
  /** 장비 유효 기간(KST)
   * example: 2023-12-21T17:28+09:00
   * */
  date_expire: string;
}

export interface CharacterItemEquipment extends CharacterBase {
  /** 캐릭터 성별 */
  character_gender: string;
  /** 캐릭터 직업 */
  character_class: string;
  /** 장비 정보 */
  item_equipment: Array<ItemEquipment>;
  title: {
    /** 칭호 장비 명 */
    title_name: string;
    /** 칭호 아이콘 */
    title_icon: string;
    /** 칭호 설명 */
    title_description: string;
    /** 칭호 유효 기간 (KST)
     * example: 2023-12-21T17:28+09:00
     * */
    date_expire: string;
    /** 칭호 옵션 유효 기간 (expired:만료, null:무제한)
     * (KST) example: 2023-12-21T17:28+09:00
     * */
    date_option_expire: string;
  };
  /** 에반 드래곤 장비 정보 (에반인 경우 응답) */
  dragon_equipment: Array<ItemEquipment>;
  /** 메카닉 장비 정보 (메카닉인 경우 응답) */
  mechanic_equipment: Array<ItemEquipment>;
}

export interface ItemOption {
  /** 옵션 타입 */
  option_type: string;
  /** 옵션 값 */
  option_value: string;
}

export interface CashItemColoringPrism {
  /** 컬러링프리즘 색상 범위 */
  color_range: string;
  /** 컬러링프리즘 색조 */
  hue: number;
  /** 컬러링프리즘 채도 */
  saturation: number;
  /** 컬러링프리즘 명도 */
  value: number;
}

export interface CashItemEquipmentPreset {
  /** 캐시 장비 부위 명 */
  cash_item_equipment_part: string;
  /** 캐시 장비 슬롯 위치 */
  cash_item_equipment_slot: string;
  /** 캐시 장비 명 */
  cash_item_name: string;
  /** 캐시 장비 아이콘 */
  cash_item_icon: string;
  /** 캐시 장비 설명 */
  cash_item_description: string;
  /** 캐시 장비 옵션 */
  cash_item_option: Array<ItemOption>;
  /** 캐시 장비 유효 기간 (KST)
   * example: 2023-12-21T17:28+09:00
   * */
  date_expire: string;
  /** 캐시 장비 옵션 유효 기간 (KST, 시간 단위 데이터로 분은 일괄 0으로 표기)
   * example: 2023-12-21T17:00+09:00
   * */
  date_option_expire: string;
  /** 캐시 장비 라벨 정보 */
  cash_item_label: string;
  /** 캐시 장비 컬러링프리즘 정보 */
  cash_item_coloring_prism: CashItemColoringPrism;
  /** 다른 프리셋에서 장비 추가 장착 없이 1번 프리셋의 장비 공유를 비활성화 했는지 여부 */
  base_preset_item_disable_flag: string;
}

export interface CharacterCashItemEquipment extends CharacterBase {
  /** 캐릭터 성별 */
  character_gender: string;
  /** 캐릭터 직업 */
  character_class: string;
  /** 적용 중인 캐시 장비 프리셋 번호 */
  preset_no: number;
  /** 1번 프리셋 장착 캐시 장비 정보 */
  cash_item_equipment_preset_1: Array<CashItemEquipmentPreset>;
  /** 2번 프리셋 장착 캐시 장비 정보 */
  cash_item_equipment_preset_2: Array<CashItemEquipmentPreset>;
  /** 3번 프리셋 장착 캐시 장비 정보 */
  cash_item_equipment_preset_3: Array<CashItemEquipmentPreset>;
  /** 제로인 경우 베타, 엔젤릭버스터인 경우 드레스 업 모드의 1번 프리셋 장착 캐시 장비 정보 */
  additional_cash_item_equipment_preset_1: Array<CashItemEquipmentPreset>;
  /** 제로인 경우 베타, 엔젤릭버스터인 경우 드레스 업 모드의 2번 프리셋 장착 캐시 장비 정보 */
  additional_cash_item_equipment_preset_2: Array<CashItemEquipmentPreset>;
  /** 제로인 경우 베타, 엔젤릭버스터인 경우 드레스 업 모드의 3번 프리셋 장착 캐시 장비 정보 */
  additional_cash_item_equipment_preset_3: Array<CashItemEquipmentPreset>;
}

export interface CharacterSymbolEquipment extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 심볼 정보 */
  symbol: Array<{
    /** 심볼 명 */
    symbol_name: string;
    /** 심볼 아이콘 */
    symbol_icon: string;
    /** 심볼 설명 */
    symbol_description: string;
    /** 심볼로 인한 증가 수치 */
    symbol_force: string;
    /** 심볼 레벨 */
    symbol_level: number;
    /** 심볼로 증가한 힘 */
    symbol_str: string;
    /** 심볼로 증가한 민첩 */
    symbol_dex: string;
    /** 심볼로 증가한 지력 */
    symbol_int: string;
    /** 심볼로 증가한 운 */
    symbol_luk: string;
    /** 심볼로 증가한 체력 */
    symbol_hp: string;
    /** 현재 보유 성장치 */
    symbol_growth_count: number;
    /** 성장 시 필요한 성장치 */
    symbol_require_growth_count: number;
  }>;
}

export interface CharacterSetEffect extends CharacterBase {
  /** 세트 효과 정보 */
  set_effect: Array<{
    /** 세트 효과 명 */
    set_name: string;
    /** 세트 개수 (럭키 아이템 포함) */
    total_set_count: number;
    /** 세트 효과 정보 */
    set_effect_info: Array<{
      /** 세트 효과 레벨 (장비 수) */
      set_count: number;
      /** 적용 중인 세트 효과 */
      set_option: string;
    }>;
  }>;
}

export interface CharacterHair {
  /** 헤어 명 */
  hair_name: string;
  /** 헤어 베이스 컬러 */
  base_color: string;
  /** 헤어 믹스 컬러 */
  mix_color: string;
  /** 헤어 믹스 컬러의 염색 비율 */
  mix_rate: string;
}

export interface CharacterFace {
  /** 성형 명 */
  face_name: string;
  /** 성형 베이스 컬러 */
  base_color: string;
  /** 성형 믹스 컬러 */
  mix_color: string;
  /** 성형 믹스 컬러의 염색 비율 */
  mix_rate: string;
}

export interface CharacterBeautyEquipment extends CharacterBase {
  /** 캐릭터 성별 */
  character_gender: string;
  /** 캐릭터 직업 */
  character_class: string;
  /** 캐릭터 헤어 정보 (제로인 경우 알파, 엔젤릭버스터인 경우 일반 모드) */
  character_hair: CharacterHair;
  /** 캐릭터 성형 정보 (제로인 경우 알파, 엔젤릭버스터인 경우 일반 모드) */
  character_face: CharacterFace;
  /** 피부 명 (제로인 경우 알파, 엔젤릭버스터인 경우 일반 모드) */
  character_skin_name: string;
  /** 제로인 경우 베타, 엔젤릭버스터인 경우 드레스 업 모드에 적용 중인 헤어 정보 */
  additional_character_hair: CharacterHair;
  /** 제로인 경우 베타, 엔젤릭버스터인 경우 드레스 업 모드에 적용 중인 성형 정보 */
  additional_character_face: CharacterFace;
  /** 제로인 경우 베타, 엔젤릭버스터인 경우 드레스 업 모드에 적용 중인 피부 명 */
  additional_character_skin_name: string;
}

export interface CharacterAndroidEquipment extends CharacterBase {
  /** 안드로이드 명 */
  android_name: string;
  /** 안드로이드 닉네임 */
  android_nickname: string;
  /** 안드로이드 아이콘 */
  android_icon: string;
  /** 안드로이드 아이템 설명 */
  android_description: string;
  /** 안드로이드 헤어 정보 */
  android_hair: CharacterHair;
  /** 안드로이드 성형 정보 */
  android_face: CharacterFace;
  /** 안드로이드 피부 명 */
  android_skin_name: string;
  /** 안드로이드 캐시 아이템 장착 정보 */
  android_cash_item_equipment: Array<CashItemEquipmentPreset>;
  /** 안드로이드 이어센서 클립 적용 여부 */
  android_ear_sensor_clip_flag: string;
}

export interface PetEquipment {
  /** 아이템 명 */
  item_name: string;
  /** 아이템 아이콘 */
  item_icon: string;
  /** 아이템 설명 */
  item_description: string;
  /** 아이템 표기상 옵션 */
  item_option: Array<ItemOption>;
  /** 업그레이드 횟수 */
  scroll_upgrade: number;
  /** 업그레이드 가능 횟수 */
  scroll_upgradeable: number;
}

export interface PetAutoSkill {
  /** 첫 번째 슬롯에 등록된 자동 스킬 */
  skill_1: string;
  /** 첫 번째 슬롯에 등록된 자동 스킬 아이콘 */
  skill_1_icon: string;
  /** 두 번째 슬롯에 등록된 자동 스킬 */
  skill_2: string;
  /** 두 번째 슬롯에 등록된 자동 스킬 아이콘 */
  skill_2_icon: string;
}

export interface CharacterPetEquipment extends CharacterBase {
  /** 펫1 명 */
  pet_1_name: string;
  /** 펫1 닉네임 */
  pet_1_nickname: string;
  /** 펫1 아이콘 */
  pet_1_icon: string;
  /** 펫1 설명 */
  pet_1_description: string;
  /** 펫1 장착 정보 */
  pet_1_equipment: PetEquipment;
  /** 펫1 펫 버프 자동스킬 정보 */
  pet_1_auto_skill: PetAutoSkill;
  /** 펫1 원더 펫 종류 */
  pet_1_pet_type: string;
  /** 펫1 펫 보유 스킬 */
  pet_1_skill: string;
  /** 펫1 마법의 시간 (KST, 시간 단위 데이터로 분은 일괄 0으로 표기)
   * example: 2023-12-21T17:00+09:00
   * */
  pet_1_date_expire: string;
  /** 펫2 명 */
  pet_2_name: string;
  /** 펫2 닉네임 */
  pet_2_nickname: string;
  /** 펫2 아이콘 */
  pet_2_icon: string;
  /** 펫2 설명 */
  pet_2_description: string;
  /** 펫2 장착 정보 */
  pet_2_equipment: PetEquipment;
  /** 펫2 펫 버프 자동스킬 정보 */
  pet_2_auto_skill: PetAutoSkill;
  /** 펫2 원더 펫 종류 */
  pet_2_pet_type: string;
  /** 펫2 펫 보유 스킬 */
  pet_2_skill: string;
  /** 펫2 마법의 시간 (KST, 시간 단위 데이터로 분은 일괄 0으로 표기)
   * example: 2023-12-21T17:00+09:00
   * */
  pet_2_date_expire: string;
  /** 펫3 명 */
  pet_3_name: string;
  /** 펫3 닉네임 */
  pet_3_nickname: string;
  /** 펫3 아이콘 */
  pet_3_icon: string;
  /** 펫3 설명 */
  pet_3_description: string;
  /** 펫3 장착 정보 */
  pet_3_equipment: PetEquipment;
  /** 펫3 펫 버프 자동스킬 정보 */
  pet_3_auto_skill: PetAutoSkill;
  /** 펫3 원더 펫 종류 */
  pet_3_pet_type: string;
  /** 펫3 펫 보유 스킬 */
  pet_3_skill: string;
  /** 펫3 마법의 시간 (KST, 시간 단위 데이터로 분은 일괄 0으로 표기)
   * example: 2023-12-21T17:00+09:00
   * */
  pet_3_date_expire: string;
}

export interface CharacterSkill extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 스킬 전직 차수 */
  character_skill_grade: string;
  /** 스킬 정보 */
  character_skill: Array<Skill>;
}

export interface LinkSkill {
  /** 스킬 명 */
  skill_name: string;
  /** 스킬 설명 */
  skill_description: string;
  /** 스킬 레벨 */
  skill_level: number;
  /** 스킬 효과 */
  skill_effect: string;
  /** 스킬 아이콘 */
  skill_icon: string;
}

export interface CharacterLinkSkill extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 링크 스킬 정보 */
  character_link_skill: LinkSkill;
  /** 내 링크 스킬 정보 */
  character_owned_link_skill: LinkSkill;
}

export interface CharacterVMatrix extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** V코어 정보 */
  character_v_core_equipment: Array<{
    /** 슬롯 인덱스 */
    slot_id: string;
    /** 슬롯 레벨 */
    slot_level: number;
    /** 코어 명 */
    v_core_name: string;
    /** 코어 타입 */
    v_core_type: string;
    /** 코어 레벨 */
    v_core_level: number;
    /** 코어에 해당하는 스킬 명 */
    v_core_skill_1: string;
    /** (강화 코어인 경우) 코어에 해당하는 세 번째 스킬 명 */
    v_core_skill_2: string;
    /** (강화 코어인 경우) 코어에 해당하는 세 번째 스킬 명 */
    v_core_skill_3: string;
  }>;
  /** 캐릭터 잔여 매트릭스 강화 포인트 */
  character_v_matrix_remain_slot_upgrade_point: number;
}

export interface CharacterHexaMatrix extends CharacterBase {
  /** HEXA 코어 정보 */
  character_hexa_core_equipment: Array<{
    /** 코어 명 */
    hexa_core_name: string;
    /** 코어 레벨 */
    hexa_core_level: number;
    /** 코어 타입 */
    hexa_core_type: string;
    /** 연결된 스킬 */
    linked_skill: Array<{
      /** HEXA 스킬 명 */
      hexa_skill_id: string;
    }>;
  }>;
}

export interface HexaStatCore {
  /** 슬롯 인덱스 */
  slot_id: string;
  /** 메인 스탯 명 */
  main_stat_name: string;
  /** 첫 번째 서브 명 */
  sub_stat_name_1: string;
  /** 두 번째 서브 명 */
  sub_stat_name_2: string;
  /** 메인 스탯 레벨 */
  main_stat_level: number;
  /** 첫 번째 서브 레벨 */
  sub_stat_level_1: number;
  /** 두 번째 서브 레벨 */
  sub_stat_level_2: number;
  /** 스탯 코어 등급 */
  stat_grade: number;
}

export interface CharacterHexaMatrixStat extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** HEXA 스탯 코어 정보 */
  character_hexa_stat_core: Array<HexaStatCore>;
  /** 프리셋 HEXA 스탯 코어 정보 */
  preset_hexa_stat_core: Array<HexaStatCore>;
}

export interface CharacterDojang extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 월드 명 */
  world_name: string;
  /** 무릉도장 최고 기록 층수 */
  dojang_best_floor: number;
  /** 무릉도장 최고 기록 달성 일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
   * example: 2023-12-21T00:00+09:00
   */
  date_dojang_record: string;
  /** 무릉도장 최고 층수 클리어에 걸린 시간 (초) */
  dojang_best_time: number;
}
