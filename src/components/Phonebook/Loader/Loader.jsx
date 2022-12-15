import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <h2>Идёт загрузка, подождите пожалуйста</h2>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </>
  );
}
