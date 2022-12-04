// 并查集 quickUnion 

class QuickUnion {
    constructor (n) {
        let i = 0
        this.root = []
        this.rank = []
        while (i < n) {
            this.root.push(i++)
            this.rank.push(1)
        }
        console.log(this.root.toString())
    }

    // find (x) {
    //     while (this.root[x] !== x) {
    //         x = this.root[x]
    //     }
    //     return x
    // }
    // 路径压缩优化
    find (x) {
        if (x === this.root[x]) {
            return x
        }

        return x = this.find(x)
    }

    // union (x, y) {
    //     const rootX = this.find(x)
    //     const rootY = this.find(y)
    //     if (rootX !== rootY) {
    //         this.root[rootY] = rootX
    //     }
    //     console.log(this.root.toString())
    // }

    // 按秩优化
    union (x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)
        if (this.rank[x] > this.rank[y]) {
            this.root[x] = rootY
        } else if (this.rank[x] < this.rank[y]) {
            this.root[y] = rootX
        } else {
            this.root[x] = rootY
            this.rank += 1
        }
    }

    isConnected (x, y) {
        return this.find(x) === this.find(y)
    }
}

const a = new QuickUnion(6)
const testArr = [
    [1, 2],
    [2, 3],
    [0, 3],
    [4, 5]
]

testArr.forEach(item => a.union(...item))

console.log(a.isConnected(0, 5))
console.log(a.isConnected(1, 3))