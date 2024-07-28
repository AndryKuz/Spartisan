import style from './ThreeReasonsBlock.module.scss';

export const threeReasons = [
    {count: '01',title: 'An original gift:', text: 'The bathhouse gift voucher is a unique gift by definition'},
    {count: '02',title: 'Guaranteed success:', text: 'A gift that is sure to please'},
    {count: '03',title: 'Easy-to-use: ', text: 'Just one code to enter when booking your bathhouse session online'},
];

const ThreeReasonsBlock = ({count, title, text}) => {
  return (
    <div className={style.block}>
      <h2>{count}</h2>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default ThreeReasonsBlock;
