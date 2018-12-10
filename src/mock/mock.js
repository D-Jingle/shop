import Mock from 'mockjs';

let Random = Mock.Random;
let productData = req => {
    let productList=[];
    for(let i=0; i<100; i++){
        let product = {
            name : Random.ctitle(5,20),
            img : Random.dataImage('100x100','农机' + Random.integer(1,100)),
            price : Random.integer(1000, 10000),
            owner : Random.cname(),
        }
        productList.push(product);
    }
    return productList;
}

Mock.mock('http://www.weichuang.com/getVarietyItem', productData);
