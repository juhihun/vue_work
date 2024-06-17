// let moduleB;
// const moduleA = 'hello'
// export {moduleA, moduleB}

export let moduleB;
export const moduleA = 'hello';
export default function moduleC(){
    console.log("moduleC 호출");
}
