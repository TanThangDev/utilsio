import { formatDecimalNumber } from '../number/formatDecimalNumber';

describe('formatDecimalNumber', () => {
  // beforeEach(async () => {});

  it.skip('should number int', () => {
    const number1 = 1000;
    const result = formatDecimalNumber(number1);
    expect(result).toEqual(1000);
  });

  it('should number float with rounding', () => {
    const number1 = 1000.123456789;
    const result = formatDecimalNumber(number1, 6);
    expect(result).toEqual(1000.123457);

    const number2 = 1000.123456789;
    const result2 = formatDecimalNumber(number2);
    expect(result2).toEqual(1000.12);

    const number3 = 1000.0000001;
    const result3 = formatDecimalNumber(number3);
    expect(result3).toEqual(1000);

    const number4 = 1000.1200001;
    const result4 = formatDecimalNumber(number4, 6);
    expect(result4).toEqual(1000.12);

    const number5 = 0.000001;
    const result5 = formatDecimalNumber(number5);
    expect(result5).toEqual(0.000001);

    const number6 = 1000.000123456789;
    const result6 = formatDecimalNumber(number6, 3);
    expect(result6).toEqual(1000);

    const number7 = 0.000123456789;
    const result7 = formatDecimalNumber(number7);
    expect(result7).toEqual(0.00012);

    const number8 = 0.000125456789;
    const result8 = formatDecimalNumber(number8, 2);
    expect(result8).toEqual(0.00013);

    const number9 = 7.000000000000001;
    const result9 = formatDecimalNumber(number9);
    expect(result9).toEqual(7);

    const number10 = 0.5794;
    const result10 = formatDecimalNumber(number10);
    expect(result10).toEqual(0.58);

    const number11 = 0.0079999999;
    const result11 = formatDecimalNumber(number11);
    expect(result11).toEqual(0.008);
  });
});
