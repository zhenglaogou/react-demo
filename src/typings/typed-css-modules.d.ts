// 解决tsx中引入scss文件找不到模块的问题
// https://www.jianshu.com/p/5b9d330c3740
declare module "*.scss" {
  const content: any;
  export = content;
}