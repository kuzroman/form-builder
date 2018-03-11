export default {

    isElementInFormVisible(depends, store, stepId) {
        if (!depends ) {
            return true;
        }

        if (depends.type === 'isVisible') {
            let when = depends.when;
            let isDisable = when.length;
            // todo менять при смене схемы!
            let children = store.state.model.steps[stepId].children;

            for (let i in when) {
                let props = when[i].props;
                for (let key in props) {
                    if (children[when[i].id][key] === props[key]) {
                        isDisable--;
                    }
                }
            }
            return !isDisable;
        } else {
            return true;
        }
    }

    // createViewData: function(model) {
    //     const viewData = {};
    //     model.forEach(d => {
    //         viewData[d.id] = {
    //             id: d.id,
    //             type: d.type,
    //             props: d.props
    //         };
    //     });
    //     return viewData;
    // },
}