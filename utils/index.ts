export * from './logger';
export * from './json-rpc-errors';
export * from './wallet';

export function isProduction(): boolean {
  console.log('>process.env.NODE_ENV', process.env.NODE_ENV);
  return process.env.NODE_ENV === 'production';
}

export const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));