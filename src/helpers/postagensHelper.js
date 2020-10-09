const getId = function(item) {
    if (item.length > 0 ) {
        return item[item.length -1].id +1
    } else {
        return 1
    }
}

module.exports = {
    getId
}