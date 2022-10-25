import { IObject } from '../interface';

export const parseVariables = (
  template: string,
  variables: IObject = {},
): string => {
  return template.replace(new RegExp('{([^{]+)}', 'g'), (_unused, varName) => {
    return variables[varName];
  });
};
