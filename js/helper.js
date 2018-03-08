export default {

    createViewData: function(model) {
        const viewData = {};

        model.forEach(d => {
            viewData[d.id] = {
                id: d.id,
                type: d.type,
                props: d.props
            };
        });
        return viewData;
    },
}