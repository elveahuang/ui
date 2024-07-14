import { progressDone, progressStart } from '@commons/core/utils/progress';
import 'nprogress/nprogress.css';

export const useProgress = (): {
    progressStart: () => void;
    progressDone: () => void;
} => {
    return {
        progressStart,
        progressDone,
    };
};
