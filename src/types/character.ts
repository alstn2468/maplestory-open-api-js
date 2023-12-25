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
  /** 캐릭터 레벨 int64 */
  character_level: number;
  /** 현재 레벨에서 보유한 경험치 int64 */
  character_exp: number;
  /** 현재 레벨에서 경험치 퍼센트 */
  character_exp_rate: string;
  /** 캐릭터 소속 길드 명 */
  character_guild_name: string;
  /** 캐릭터 외형 이미지 */
  character_image: string;
}

export interface CharacterPopularity extends CharacterBase {
  /** 캐릭터 인기도 int64 */
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
  /** 잔여 AP int64 */
  remain_ap: number;
}

export interface CharacterHyperStat extends CharacterBase {
  /** 캐릭터 직업 */
  character_class: string;
  /** 적용 중인 프리셋 번호 */
  use_preset_no: string;
  /** 사용 가능한 최대 하이퍼스탯 포인트 int64 */
  use_available_hyper_stat: number;
  /** 프리셋 1번 하이퍼 스탯 정보 */
  hyper_stat_preset_1: Array<{
    /** 스탯 종류 */
    stat_type: string;
    /** 스탯 투자 포인트 int64 */
    stat_point: number;
    /** 스탯 레벨 */
    stat_level: number;
    /** 스탯 상승량 */
    stat_increase: string;
  }>;
  /** 프리셋 1번 하이퍼 스탯 잔여 포인트 int64 */
  hyper_stat_preset_1_remain_point: number;

  /** 프리셋 2번 하이퍼 스탯 정보 */
  hyper_stat_preset_2: Array<{
    /** 스탯 종류 */
    stat_type: string;
    /** 스탯 투자 포인트 int64 */
    stat_point: number;
    /** 스탯 레벨 */
    stat_level: number;
    /** 스탯 상승량 */
    stat_increase: string;
  }>;
  /** 프리셋 2번 하이퍼 스탯 잔여 포인트 */
  hyper_stat_preset_2_remain_point: number;

  /** 프리셋 3번 하이퍼 스탯 정보 */
  hyper_stat_preset_3: Array<{
    /** 스탯 종류 */
    stat_type: string;
    /** 스탯 투자 포인트 int64 */
    stat_point: number;
    /** 스탯 레벨 */
    stat_level: number;
    /** 스탯 상승량 */
    stat_increase: string;
  }>;
  /** 프리셋 3번 하이퍼 스탯 잔여 포인트 */
  hyper_stat_preset_3_remain_point: number;
}

export interface CharacterPropensity extends CharacterBase {
  /** 카리스마 레벨 int64 */
  charisma_level: number;
  /** 감성 레벨 int64 */
  sensibility_level: number;
  /** 통찰력 레벨 int64 */
  insight_level: number;
  /** 의지 레벨 int64 */
  willingness_level: number;
  /** 손재주 레벨 int64 */
  handicraft_level: number;
  /** 매력 레벨 int64 */
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
  /** 보유 명성치 int64 */
  remain_fame: number;
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
  item_total_option: {
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
    /** 착용 레벨 감소 int64 */
    equipment_level_decrease: number;
    /** 최대 HP(%) */
    max_hp_rate: string;
    /** 최대 MP(%) */
    max_mp_rate: string;
  };
  /** 장비 기본 옵션 정보 */
  item_base_option: {
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
    /** 착용 레벨 감소 int64 */
    equipment_level_decrease: number;
    /** 최대 HP(%) */
    max_hp_rate: string;
    /** 최대 MP(%) */
    max_mp_rate: string;
  };
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
  /** 착용 레벨 증가 int64 */
  equipment_level_increase: number;
  /** 장비 특별 옵션 정보 */
  item_exceptional_option: {
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
  };
  /** 장비 추가 옵션 */
  item_add_option: {
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
    /** 올스탯(%) */
    all_stat: string;
    /** 데미지(%) */
    damage: string;
    /** 착용 레벨 감소 int64 */
    equipment_level_decrease: number;
  };
  /** 성장 경험치 int64 */
  growth_exp: number;
  /** 성장 레벨 int64 */
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
  item_etc_option: {
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
  };
  /** 강화 단계 */
  starforce: string;
  /** 놀라운 장비 강화 주문서 사용 여부 (0:미사용, 1:사용) */
  starforce_scroll_flag: string;
  /** 장비 스타포스 옵션 정보 */
  item_starforce_option: {
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
  };
  /** 특수 반지 레벨 int64 */
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

export interface CashItemOption {
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
  cash_item_option: Array<CashItemOption>;
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
