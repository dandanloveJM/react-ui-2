import classes, {scopedClassMaker} from '../helper/classes';
describe('classes', () => {
    it('接受 1 个 className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受 2 个 className', () => {
        const result = classes('a', 'bvv')
        expect(result).toEqual('a bvv')
    })
    it('接受 undefined 结果不会出现 undefined', ()=>{
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受各种奇怪值', ()=>{
        const result = classes(
          // @ts-ignore
            'a', undefined, '中文', null, false
        )
        expect(result).toEqual('a 中文')
    })
    it('接受 0 个参数', ()=>{
        const result = classes()
        expect(result).toEqual('')
    })
})

describe('scopedClassMaker',()=>{
    const sc = scopedClassMaker('pui-layout');
    it('接受字符串',()=>{
        expect(sc('')).toEqual('pui-layout')
        expect(sc('x')).toEqual('pui-layout-x')
    })

    it('接受对象', ()=>{
        expect(sc({'':true, 'hasAside':true})).toEqual('pui-layout pui-layout-hasAside')
        expect(sc({'':true, 'hasAside':false})).toEqual('pui-layout')
    })

    it('接受两个对象', ()=>{
        expect(sc({'':true, 'hasAside':true}, {extra:'xxx'}))
          .toEqual('pui-layout pui-layout-hasAside xxx')
        expect(sc({'':true, 'hasAside':false}, {extra: 'hi'}))
          .toEqual('pui-layout hi')
    })
})