module.exports = {
    id: 523,
    resumeToken: 'Z3F3aWpmd2V3Cg==',
    settings: {
        showInactiveSteps: true,
        validateToProceed: true
    },
    steps: [
        {
            id: 1,
            props: { active: true },
            children: [
                {
                    id: 'person',
                    type: 'group',
                    children: [
                        {
                            id: 'surname',
                            type: 'text-input',
                            props: {
                                label: 'Фамилия',
                                placeholder: 'Введите фамилию'
                            },
                            validation: [
                                {
                                    type: 'regexp',
                                    expression: '^[\p{Cyrillic}-]+$',
                                    message: 'Только кириллица и дефис'
                                }
                            ]
                        },
                        {
                            id: 'name',
                            type: 'text-input',
                            props: {
                                label: 'Фамилия',
                                placeholder: 'Введите фамилию'
                            },
                            validation: [
                                {
                                    type: 'regexp',
                                    expression: '^[\p{Cyrillic} -]+$',
                                    message: 'Только кириллица и дефис'
                                }
                            ]
                        },
                        {
                            id: 'patronymic',
                            type: 'text-input',
                            props: {
                                label: 'Отчество',
                                placeholder: 'Введите отчество',
                            },
                            validation: [
                                {
                                    type: 'regexp',
                                    expression: '^[\p{Cyrillic} -]+$',
                                    message: 'Только кириллица и дефис'
                                }
                            ],
                            rules: [
                                {
                                    action: 'toggle',
                                    when: { op: 'checked', what: 'no-patronymic', value: true, not: true }
                                }
                            ]
                        },
                        {
                            id: 'no-patronymic',
                            type: 'checkbox',
                            props: {
                                label: 'У меня нет отчества',
                                checked: false
                            }
                        }
                    ]
                },
                {
                    id: 'gender',
                    type: 'radio',
                    props: {
                        label: 'Пол',
                    },
                    items: [
                        ['М', '0'],
                        ['Ж', '1']
                    ]
                },
                {
                    id: 'birthdate',
                    type: 'date',
                    props: {
                        label: 'Дата рождения',
                        min: '1920-01-01',
                        max: '2018-03-02',
                    }
                },
                {
                    id: 'phone',
                    type: 'phone-input',
                    props: {
                        label: 'Номер мобильного телефона'
                    }
                },
                {
                    id: 'email',
                    type: 'text-input',
                    props: {
                        label: 'E-mail'
                    },
                    validation: [
                        {
                            type: 'regexp',
                            expression: '^.+@.+$'
                        }
                    ]
                },
                {
                    id: 'agree',
                    type: 'checkbox',
                    props: {
                        label: 'Согласие с правилами'
                    }
                },
                {
                    id: 'sms-code',
                    type: 'text-input',
                    props: {
                        label: 'СМС-проверка'
                    }
                }
            ]
        },
        {
            id: 2,
            props: {
                active: false
            },
            children: [
                { id: 'sasnum', type: 'text-input', props: { label: 'Номер из SAS' } },
                { id: 'agree1', type: 'checkbox', props: { label: 'Согласие 1' } },
                { id: 'agree2', type: 'checkbox', props: { label: 'Согласие 2' } },
                { id: 'passport', type: 'group', props: { label: 'Паспорт' }, children: [
                    { id: 'series', type: 'text-input', props: { label: 'Серия' } },
                    { id: 'num', type: 'text-input', props: { label: 'Номер' } },
                    { id: 'issuer', type: 'text-input', props: { label: 'Кем выдан' } },
                    { id: 'code', type: 'text-input', props: { label: 'Код подразделения' } },
                    { id: 'issued', type: 'date', props: { label: 'Дата выдачи' } },
                ]},
                { id: 'nameChanged', type: 'checkbox', props: { label: 'Меняли ли вы фамилию' } },
                { id: 'prev', type: 'group', props: { label: 'Прежние данные' }, children: [
                    { id: 'surname', type: 'text-input', props: { label: 'Фамилия' } },
                    { id: 'name', type: 'text-input', props: { label: 'Имя' } },
                    { id: 'patronymic', type: 'text-input', props: { label: 'Отчество' } }
                ]},
                { id: 'homePhone', type: 'phone', props: { label: 'Телефон по месту проживания' } },
                { id: 'country', type: 'select', props: { label: 'Страна рождения' } },
                { id: 'birthplace', type: 'text-input', props: { label: 'Место рождения' } },
                { id: 'regAddress', type: 'dadata-address', props: { label: 'Адрес регистрации' } },
                { id: 'addressMatch', type: 'checkbox', props: { label: 'Совпадает ли с фактическим' } },
                { id: 'actualAddress', type: 'dadata-address', props: { label: 'Фактический адрес' } },
                { id: 'maritalStatus', type: 'select', props: { label: 'Семейное положение' } },
                { id: 'children', type: 'text-input', props: { label: 'Дети' } },
                { id: 'dependents', type: 'text-input', props: { label: 'Другие иждивенцы' } },
            ]
        },
        {
            id: 3,
            props: {
                active: false
            },
            children: [
                { id: 'company', type: 'dadata-company', props: { label: 'Название компании' } },
                { id: 'inn', type: 'text-input', props: { label: 'ИНН' }  },
                { id: 'industry', type: 'select', props: { label: 'Отрасль' }  },
                { id: 'companySize', type: 'radio', props: { label: 'Численность персонала' }  },
                { id: 'position', type: 'select', props: { label: 'Должность' }  },
                { id: 'jobStart', type: 'date', props: { label: 'Дата начала работы' }  },
                { id: 'companyAddress', type: 'dadata-address', props: { label: 'Фактический адрес' }  },
                { id: 'workPhone', type: 'phone', props: { label: 'Рабочий телефон' }  },
                { id: 'useRCard', type: 'checkbox', props: { label: 'Использование карты РБ' }  },
                { id: 'statement', type: 'select', props: { label: 'Подтверждение дохода' }  },
                { id: 'salary', type: 'slider', props: { label: 'Среднемесячный доход' }  },
                { id: 'spouse', type: 'group', children: [
                    { id: 'salary', type: 'slider', props: { label: 'Доход супруга/супруги' } },
                    { id: 'phone', type: 'phone', props: { label: 'Телефон супруга/супруги' } },
                    { id: 'company', type: 'dadata-company', props: { label: 'Компания супруга/супруги' } },
                ]},
            ]
        },
        {
            id: 4,
            props: {
                active: false
            },
            children: [
                { id: 'loanPurpose', type: 'select', props: { label: 'Цель кредита' } },
                { id: 'loanAmount', type: 'slider', props: { label: 'Сумма кредита' } },
                { id: 'loanTerm', type: 'slider', props: { label: 'Срок кредита' } },
                { id: 'deliveryType', type: 'radio', props: { label: 'Способ оформления' } },
                { id: 'deliveryCity', type: 'select', props: { label: 'Город' } },
                { id: 'branchCity', type: 'select', props: { label: 'Город' } },
                { id: 'branchId', type: 'select', props: { label: 'Отделение' } },
            ]
        }
    ],
    meta: {
        node: 'srv-w-msk-03',
        time: 260
    }
}