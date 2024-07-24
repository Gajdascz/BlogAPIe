type ValidationPatterns = { REGEXP: RegExp; MSG: string }[];
interface CustomTest {
  NAME: string;
  MSG: string;
  TEST: (str?: string) => boolean;
}
interface RangeFieldCfg {
  MIN: number;
  MAX: number;
  UNIT: string;
}
interface FieldConfig {
  RANGE?: RangeFieldCfg;
  REQ?: boolean;
  TRIM?: boolean;
  ONE_OF?: string[] | Record<string, string>;
  PATTERN?: ValidationPatterns;
  EMAIL?: boolean;
  CUSTOM?: CustomTest[];
  [key: string]: unknown;
}

export type { ValidationPatterns, FieldConfig, CustomTest, RangeFieldCfg };
