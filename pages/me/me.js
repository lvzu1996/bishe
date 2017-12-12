const SELECTEDARR = [
    [true, false, false, false],
    [false, true, false, false],
    [false, false, true, false],
    [false, false, false, true]
]

Page({
    data: {
        selected: [true, false, false, false]
    },

    _select: function (e) {
        var cindex = e.currentTarget.dataset.cindex
        this.selected = SELECTEDARR[cindex]
        this.setData({
            selected: SELECTEDARR[cindex]
        })
    },


})