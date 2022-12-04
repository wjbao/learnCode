// 并查集

class QuikFind {
    constructor (n) {
        let i = 0
        this.root = []
        while (i < n) {
            this.root.push(i++)
        }
        console.log(this.root.toString())
    }

    find (x) {
        return this.root[x]
    }

    union (x, y) {
        const [rootX, rootY] = [this.root[x], this.root[y]]
        if (rootX !== rootY) {
            this.root.forEach((item, index) => {
                if (item == rootY) {
                    this.root[index] = rootX
                }
            })
        }
        console.log(this.root.toString())
    }

    isConnected (x, y) {
        return this.find(x) === this.find(y)
    }
}

const a = new QuikFind(6)
const testArr = [
    [1, 2],
    [2, 3],
    [0, 3],
    [4, 5]
]

testArr.forEach(item => a.union(...item))

console.log(a.isConnected(0, 5))
console.log(a.isConnected(1, 3))