interface ListPO {
    page: number,
    pageSize: 15
}

export class OrderApiModule {
    constructor() {
    }

    list(po: ListPO) {
        return new Promise((resolve, reject) => {
            if (po.page == 1 && po.pageSize) {
                resolve({
                    code: 0,
                    message: ""
                })
            } else {
                reject({
                    code: -1,
                    message: ""
                })
            }
        })
    }
}


