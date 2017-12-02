function mapKey(e, f, n) {
    var keysList = {
        17: "control/command",
        91: "win-key",
        16: "shift",
        13: "enter/return",
        8: "backspace/delete",
        27: "escape",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12"
    };
    n ? $(n).keydown(function(n) {
        keysList[n.keyCode] === e && f()
    }) : $("body").keydown(function(n) {
        keysList[n.keyCode] === e && f(n, keysList)
    })
}