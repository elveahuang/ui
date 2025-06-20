import { localeProps } from '@commons/webapp/components/builder/utils';
import { Rule } from '@form-create/element-ui';

export const label: string = '布局';
export const name: string = 'row';
export const layout = {
    icon: 'icon-row',
    label,
    name,
    mask: false,
    rule(): Rule {
        return {
            type: 'FcRow',
            props: {},
            children: [],
        };
    },
    children: 'col',
    childrenLen: 2,
    props(_, { t }): Rule[] {
        return localeProps(t, name + '.props', [
            {
                type: 'inputNumber',
                field: 'gutter',
                title: '栅格间隔',
                props: { min: 0 },
            },
            {
                type: 'switch',
                field: 'type',
                title: 'flex布局模式',
                props: { activeValue: 'flex', inactiveValue: 'default' },
            },
            {
                type: 'select',
                field: 'justify',
                title: 'flex 布局下的水平排列方式',
                options: [
                    { label: 'start', value: 'start' },
                    { label: 'end', value: 'end' },
                    {
                        label: 'center',
                        value: 'center',
                    },
                    { label: 'space-around', value: 'space-around' },
                    { label: 'space-between', value: 'space-between' },
                ],
            },
            {
                type: 'select',
                field: 'align',
                title: 'flex 布局下的垂直排列方式',
                options: [
                    { label: 'top', value: 'top' },
                    { label: 'middle', value: 'middle' },
                    {
                        label: 'bottom',
                        value: 'bottom',
                    },
                ],
            },
        ]);
    },
};
