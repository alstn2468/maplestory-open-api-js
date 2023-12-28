# 메이플스토리 Open API for JavaScript, TypeScript

> 메이플스토리 Open API 비공식 TypeScript, JavaScript 라이브러리

## 사용법

- 패키지 설치

```shell
npm install maplestory-open-api-js
pnpm add maplestory-open-api-js
yarn add maplestory-open-api-js
```

- API키 설정하기

API키는 [NEXON OPEN API - my 애플리케이션](https://openapi.nexon.com/my-application/)에서 발급 받을 수 있습니다.

```ts
const API_KEY = process.env.API_KEY;

if (API_KEY) {
  setAPIKey(API_KEY);
}
```

- 함수 호출하기

```tsx
const { ocid } = await getOCID(name);
const cashItemEquipment = await getCharacterCashItemEquipment({ ocid });
```

## 사용 예시

해당 라이브러리는 [ky](https://github.com/sindresorhus/ky) 기반으로 구현되어 브라우저와 서버 환경에서 모두 동작합니다. 자세한 코드는 아래의 링크에서 확인 가능합니다.

- [브라우저 환경 Next.js](https://github.com/alstn2468/maplestory-open-api-js/tree/main/examples/client-demo)
- [서버 환경 Express](https://github.com/alstn2468/maplestory-open-api-js/tree/main/examples/server-demo)

## 함수 목록

각 함수의 응답 반환 타입은 내부 구현을 확인해주세요.

### 계정 정보 조회

- 계정 식별자(ouid)조회 - `getOUID`

### 캐릭터 정보 조회

- 캐릭터 식별자(ocid) - `getOCID`
- 기본 정보 - `getCharacterBasic`
- 인기도 정보 - `getCharacterPopularity`
- 종합 능력치 정보 - `getCharacterStat`
- 하이퍼스탯 정보 - `getCharacterHyperStat`
- 성향 정보 - `getCharacterPropensity`
- 어빌리티 정보 - `getCharacterAbility`
- 장착한 장비 중 캐시 장비 제외한 나머지 장비 정보 - `getCharacterItemEquipment`
- 장착한 캐시 장비 정보 - `getCharacterCashItemEquipment`
- 장착한 심볼 정보 - `getCharacterSymbolEquipment`
- 적용받고 있는 세트 효과 정보 - `getCharacterSetEffect`
- 장착 중인 헤어, 성형, 피부 정보 - `getCharacterBeautyEquipment`
- 장착한 안드로이드 정보 - `getCharacterAndroidEquipment`
- 장착한 펫 및 펫 스킬, 장비 정보 - `getCharacterPetEquipment`
- 캐릭터 스킬과 하이퍼 스킬 정보 - `getCharacterSkill`
- 장착 링크 스킬 정보 - `getCharacterLinkSkill`
- V매트릭스 슬롯 정보와 장착한 V코어 정보 - `getCharacterVMatrix`
- HEXA 매트릭스에 장착한 HEXA 코어 정보 - `getCharacterHEXAMatrix`
- HEXA 매트릭스에 설정한 HEXA 스탯 정보 - `getCharacterHEXAMatrixStat`
- 캐릭터 무릉도장 최고 기록 정보 - `getCharacterDojang`

### 유니온 정보 조회

- 유니온 레벨 및 유니온 등급 정보 - `getUnion`
- 유니온에 배치된 공격대원 효과 및 공격대 점령 효과 등 상세 정보 - `getUnionRaider`

### 길드 정보 조회

- 길드 식별자(oguild_id) 정보 - `getOGuildID`
- 길드 기본 정보 - `getGuildBasic`

### 확률 정보 조회

- 스타포스 강화 결과 - `getStarforceHistory`
- 큐브 사용 결과 - `getCubeHistory`

### 랭킹 정보 조회 TBD

<div align='center'>
  <sub>
    <sup>
      LAST UPDATED AT 2023.12.28
    </sup>
  </sub>
</div>
