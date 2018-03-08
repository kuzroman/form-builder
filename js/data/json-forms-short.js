export let jsonForms = [
    {
        id: 'name',
        type: 'input-field',
        props: {
            label: 'Person name',
            placeholder: 'Enter a name',
            initialValue: 'John Christopher',

            depends: {
                type: 'isVisible',
                when: [
                    {
                        id: 'switcher1',
                        props: {
                            isChecked: true
                        }
                    },
                    {
                        id: 'switcher2',
                        props: {
                            isChecked: true
                        }
                    },
                    {
                        id: 'email',
                        props: {
                            value: '111'
                        }
                    }
                ]
            }
        },
    },

    {
        id: 'email',
        type: 'input-field',
        props: {
            label: 'Email',
            placeholder: 'Email',
            initialValue: '11',
            value: '',
        },
    },

    {
        id: 'switcher1',
        type: 'checkbox-field',
        props: {
            label: 'Show sum calculator',
            isChecked: true,
        }
    },

    {
        id: 'switcher2',
        type: 'checkbox-field',
        props: {
            label: 'Show sum calculator',
            isChecked: false,
        }
    }
];