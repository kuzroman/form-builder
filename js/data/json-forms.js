export let jsonForms = [
    // !Добавить группу, что она должна делать?
    {
        id: 'first-name',
        type: 'input-field',
        props: {
            label: 'Имя',
            placeholder: 'Имя',
            initialValue: '',

            validation: [
                {
                    type: 'regexp',
                    expression: '^[а-яё-]+$',
                    flags: 'i',
                    message: 'Только кириллица и дефис'
                }
            ]
        },
    },
    {
        id: 'patronymic',
        type: 'input-field',
        props: {
            label: 'Отчество',
            placeholder: 'Отчество',
            initialValue: 'Initial Name',

            validation: [
                {
                    type: 'regexp',
                    expression: '^[а-яё-]+$',
                    flags: 'i',
                    message: 'Только кириллица и дефис'
                }
            ],

            depends: {
                type: 'isVisible',
                when: [
                    {
                        id: 'no-patronymic',
                        props: {
                            isChecked: false
                        }
                    }
                ]
            }
        },
        validation: [
            {
                type: 'regexp',
                expression: '^[a-z ]+$',
                flags: 'i',
                message: 'Invalid name'
            }
        ]
    },
    {
        id: 'no-patronymic',
        type: 'switch-field',
        props: {
            label: 'Без батьки рос',
            isChecked: false,
        }
    },


    {
        id: 'gender',
        type: 'radio-field',
        props: {
            label: 'Пол',

            items: [
                {text: 'M', value: 0},
                {text: 'Ж', value: 1}
            ]
        },
    },

    {
        id: 'birthdate',
        type: 'date-field',
        props: {
            label: 'Дата рождения',
            placeholder: 'до 2018-03-05, после 2018-03-25',
            min: '2018-03-05',
            max: '2018-03-25',
        }
    },
    {
        id: 'date',
        type: 'date-field',
        props: {
            label: 'Предустановленная дата',
            value: '2018-03-08'//new Date()
        }
    },
    {
        id: 'phone',
        type: 'phone-field',
        props: {
            label: 'Номер мобильного с маской',
            placeholder: 'No time to explain just give me phone',
            // phone: '9263249060'
        }
    },

    {
        id: 'letter',
        type: 'select-field',
        props: {
            label: 'Choose a letter',
            selected: 'Б',
            options: [
                {text: 'Один', value: 'А'},
                {text: 'Два', value: 'Б'},
                {text: 'Три', value: 'В'}
            ]
        }
    },
    {
        id: 'email',
        type: 'input-field',
        props: {
            label: 'Email with validation',
            placeholder: 'mail@example.com',
            errors: [],

            validation: [{
                type: 'regexp',
                expression: '^[a-z0-9\.]+@[a-z0-9\.]+$',
                flags: 'i',
                message: 'Invalid email'
            }]
        },
    },


    // {
    //     id: 'address',
    //     type: 'address-compound',
    //     props: {
    //         addressTitle: 'Enter your address'
    //     },
    // },

    // {
    //     id: 'calculate',
    //     type: 'sum',
    //     props: {
    //         label: 'calculate',
    //         items: [
    //             {type: 'input', name: 'price', value: 1},
    //             {type: 'input', name: 'shipping', value: 2},
    //             {type: 'input', name: 'handling', value: 3},
    //             {type: 'input', name: 'discount', value: 0}
    //         ],
    //     }
    // },
];