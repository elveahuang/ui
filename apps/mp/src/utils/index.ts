declare const process: any;

export const isWeApp = () => {
    return process.env.TARO_ENV === 'weapp';
};

export const isWebApp = () => {
    return process.env.TARO_ENV === 'h5';
};
