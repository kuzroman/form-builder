export let data = [
    {
        id: 'name',
        type: 'input-field',
        props: {
            label: 'Person name',
            placeholder: 'Enter a name',
            icon: 'icon-people',
            initialValue: 'John Doe',
            errors: []
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
        id: 'homeless',
        type: 'switch-field',
        props: {
            label: 'I am homeless',
            initialState: false,
        }
    },
    {
        id: 'address',
        type: 'address-compound',
        props: {
            addressTitle: 'Enter your address'
        },
    },
    {
        id: 'email',
        type: 'input-field',
        props: {
            label: 'Email',
            placeholder: 'mail@example.com',
            icon: 'icon-mail',
            iconSide: 'right',
            errors: []
        },
        validation: [
            {
                type: 'regexp',
                expression: '^[a-z0-9\.]+@[a-z0-9\.]+$',
                flags: 'i',
                message: 'Invalid email'
            }
        ]
    }
];

// export let data = { // form definition object
//     items: [ // list of field definitions
//         {
//             type: 'html', // static content type
//             content: '<h2>Title</h2>' // innerText = '...'
//         },
//         {
//             type: 'string', // input type="text"
//             id: 'firstString',  // internal reference. NOT an id attribute.
//             name: 'simpleInput',
//             value: 'default value',
//             validation: [ // list of validation definitions
//                 {
//                     type: 'length', // not all validators support all field types
//                     min: 5,
//                     max: 50,
//                     message: 'The value must contain between {{ min }} and {{ max }} characters.'
//                 }, // template - mustache?
//                 {
//                     type: 'regex',
//                     value: '^[a-z]+$', // убрать кавычки -> ^[a-z]+$
//                     message: 'Allowed characters: lowercase a-z'
//                 }
//             ]
//         },
//         {
//             type: 'radio',
//             id: 'radioswitch', // again, internal reference
//             name: 'radios',
//             options: [
//                 {label: 'First option', value: '0'},
//                 {label: 'Second option', value: '1'},
//                 {label: 'Thind option', value: '2'}
//             ],
//             actions: [ // list of action definitions: dependencies, conditional events, etc
//                 {
//                     type: 'set', // action type: set value of a field
//                     ref: 'firstString', // field reference (see id)
//                     value: 'test value', // value to set
//                     when: { // condition object.
//                         // ref: null, // implicitly ref == this field when ref is not set or falsey
//                         op: 'eq', // "equals". Other possible values: "lt", "gt", "ne", "ge", "le"
//                         value: ['0', '1'] // one of these values
//                     }
//                 }
//             ]
//         },
//         {
//             type: 'group', // wrapper for a group of fields
//             children: [ // nested list of fields
//                 {
//                     type: 'string',
//                     name: 'groupedInput1'
//                 },
//                 {
//                     type: 'string',
//                     name: 'groupedInput2'
//                 }
//             ],
//             actions: [
//                 {
//                     type: 'show', // The group is visible only when...
//                     when: {
//                         ref: 'radioswitch', // radio group, see id
//                         op: 'eq', // equals
//                         value: '2' // 2
//                     }
//                 }
//             ]
//         }
//     ]
// }